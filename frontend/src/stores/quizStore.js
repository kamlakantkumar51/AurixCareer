import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useQuizStore = create(
  persist(
    (set, get) => ({
      // quiz mode: 'practice' or 'timed'
      quizMode: 'practice',
      setQuizMode: (mode) => set({ quizMode: mode }),

      // progress: { "dbms_part_1": { currentQuestionIndex: 0, answers: { "q1": 2 } } }
      progress: {},
      
      // completedParts: { "dbms_part_1": { score: 12, total: 15 } }
      completedParts: {},

      // revisionQueue: array of question objects that were answered incorrectly
      revisionQueue: [],

      // Analytics:
      // topicProgress: { "Time & Work": { attempted: 5, correct: 2 } }
      topicProgress: {},
      
      // mistakeHistory: array of detailed mistake logs
      mistakeHistory: [],

      // timeMetrics: { "APT-P1-Q1": 15, "APT-P1-Q2": 45 } (in seconds)
      timeMetrics: {},

      submitAnswer: (partId, questionId, selectedIndex, isCorrect, questionData, timeTaken = 0) => set((state) => {
        const partProgress = state.progress[partId] || { currentQuestionIndex: 0, answers: {} };
        
        const newRevisionQueue = [...state.revisionQueue];
        const newMistakeHistory = [...(state.mistakeHistory || [])];
        
        if (!isCorrect) {
          // Add to revision queue
          if (!newRevisionQueue.find(q => q.id === questionId)) {
            newRevisionQueue.push({
              ...questionData,
              addedAt: new Date().toISOString()
            });
          }
          
          // Add to mistake history for analytics
          if (!newMistakeHistory.find(m => m.questionId === questionId)) {
             newMistakeHistory.push({
                questionId,
                topic: questionData.topic,
                partId,
                timestamp: new Date().toISOString()
             });
          }
        }

        // Update topic progress
        const topic = questionData.topic || 'General';
        const currentTopicStats = state.topicProgress?.[topic] || { attempted: 0, correct: 0 };
        const newTopicStats = {
          attempted: currentTopicStats.attempted + 1,
          correct: currentTopicStats.correct + (isCorrect ? 1 : 0)
        };

        return {
          progress: {
            ...state.progress,
            [partId]: {
              ...partProgress,
              answers: {
                ...partProgress.answers,
                [questionId]: selectedIndex
              }
            }
          },
          revisionQueue: newRevisionQueue,
          mistakeHistory: newMistakeHistory,
          topicProgress: {
            ...(state.topicProgress || {}),
            [topic]: newTopicStats
          },
          timeMetrics: {
            ...(state.timeMetrics || {}),
            [questionId]: timeTaken
          }
        };
      }),

      nextQuestion: (partId) => set((state) => {
        const partProgress = state.progress[partId];
        if (!partProgress) return state;

        return {
          progress: {
            ...state.progress,
            [partId]: {
              ...partProgress,
              currentQuestionIndex: partProgress.currentQuestionIndex + 1
            }
          }
        };
      }),

      finishPart: (partId, score, total) => set((state) => ({
        completedParts: {
          ...state.completedParts,
          [partId]: { score, total, completedAt: new Date().toISOString() }
        }
      })),

      resetPart: (partId) => set((state) => {
        const newProgress = { ...state.progress };
        delete newProgress[partId];
        
        return {
          progress: newProgress
        };
      }),

      removeFromRevision: (questionId) => set((state) => ({
        revisionQueue: state.revisionQueue.filter(q => q.id !== questionId)
      })),
      
      clearRevision: () => set({ revisionQueue: [] })
    }),
    {
      name: 'careerforge-quiz-storage',
    }
  )
);

export default useQuizStore;
