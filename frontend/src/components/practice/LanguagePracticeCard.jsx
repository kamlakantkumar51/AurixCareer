import React, { useState } from 'react';
import { Code, ChevronDown, MoreHorizontal, ArrowRight, X, Rocket, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LanguageIcon = ({ type }) => {
  switch (type) {
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#3776AB" d="M63.9 0C28.7 0 30.4 15.2 30.4 15.2l.1 15.7h33.8v4.8H30.1s-16.7-1.1-16.7 16.4c0 17.5 14.5 17.5 14.5 17.5h11.1v-15s-.2-16.8 17.3-16.8h21.1s15.9-.6 15.9-15.6C93.4 7.2 63.9 0 63.9 0zm-17.6 9.6c2.7 0 4.8 2.2 4.8 4.8s-2.2 4.8-4.8 4.8-4.8-2.2-4.8-4.8 2.2-4.8 4.8-4.8z"/>
          <path fill="#FFD43B" d="M64.6 128c35.2 0 33.5-15.2 33.5-15.2l-.1-15.7H64.2v-4.8h34.1s16.7 1.1 16.7-16.4c0-17.5-14.5-17.5-14.5-17.5H89.4v15s.2 16.8-17.3 16.8H51s-15.9.6-15.9 15.6c.1 15 29.5 22.2 29.5 22.2zm17.6-9.6c-2.7 0-4.8-2.2-4.8-4.8s2.2-4.8 4.8-4.8 4.8 2.2 4.8 4.8-2.1 4.8-4.8 4.8z"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#E76F00" d="M85.7 66.8c-.5-1.1-1.3-1.6-1.5-1.7-.7-.4-1.3-.2-1.6.4-1.1 1.7-2.3 4.8-3.4 9-2.5 9.7-4 22.1-4.2 30.6h17c.5 0 .9.5.9 1s-.4.9-.9.9h-17c0 .1 0 .2 0 .2 0 1.9.1 3.5.2 4.8h23.2c.5 0 .9.4.9.9s-.4.9-.9.9h-24c-.1 2-.1 3.6-.1 3.6v.1s.1-1.6.1-3.6h-.7c0 .4-.1.7-.1 1 0 1.2.2 2.6.4 3.7h9c.5 0 .9.5.9.9 0 .5-.4.9-.9.9h-8.2c2.5 4.5 7.1 6.8 12.3 6.8 6.4 0 11.2-3.4 13.9-9.5-3.4 2.8-7.7 4.2-12.4 4.2-8.3 0-16.1-5.6-20.9-15.5l-1-.2s.5-7.8 1.4-17.3c1.5-16.1 4.5-31.5 5.2-34.6 1.4-6.3-1.4-8.8-1.5-8.9-.4-.4-1.1-.4-1.5 0-.5.5-1.4 1.7-1.5 3.5-.2 2.6 1.1 6.5 2.1 9.3 0 0-4.4-6.2-4.1-14.7.2-5.7 3.6-10.7 8.2-13.8.4-.3.6-1 .2-1.4-.4-.5-1.1-.5-1.5-.1-5.1 3.4-8.9 9-9 15.6-.2 7.7 3.3 13.9 4.2 15.5-1.3-2.8-2.6-7-2.3-11.4.3-5.2 2.9-9.2 4.4-11.2.4-.5.3-1.1-.1-1.5-.4-.4-1.1-.3-1.5.1-1.8 2.2-4.8 6.8-5.1 13-.3 6.6 2.3 11.8 3 13.2-1.8-2.7-3.9-7-4.2-12.2-.4-6.8 2.2-12.3 3.3-14.5.3-.5.1-1.1-.3-1.4-.5-.3-1.1-.1-1.4.4-1.2 2.3-4.2 8.4-3.8 16.1.4 6 3 11.2 5 14.6-2-2.1-4.9-6-5.4-11.4-.6-5.9 1.5-11.1 2.3-13.1.2-.5 0-1.1-.5-1.4-.5-.2-1.1 0-1.3.5-1 2.2-3.3 7.9-2.7 14.7.6 6.3 3.8 11.1 6 13.6-3.2-2.6-7-7-7.2-12.9-.3-5.7 2.1-10.4 2.8-11.8.2-.5 0-1.1-.5-1.4-.5-.2-1.1 0-1.3.5-.8 1.5-3.3 6.6-3 13.2.3 5.4 3 9.4 4.8 11.6-4.5-2.7-9.5-7.7-9.2-14.6.3-5.3 2.6-9.6 3.7-11.5.3-.5.1-1.1-.3-1.4-.5-.3-1.1-.1-1.4.3-1.3 2.1-3.8 6.8-4.2 12.9-.4 8.7 6.1 14.4 11 17.6-1.5-.7-3.1-1.6-4.5-2.8-.4-.3-1-.3-1.3.1-.3.4-.3 1 .1 1.4 3.7 3 8 4.7 12.7 4.7.9 0 1.8-.1 2.8-.2l2.6 5c1 1.8 2 3.6 3.1 5.3-2.6.2-5.1.1-7.6-.2h-.4c-.5-.1-.8-.5-.8-.9 0-.5.4-.9.9-.9h.2c1.4.1 2.9.2 4.4.2h1.6c.9 1.2 1.8 2.3 2.7 3.4h-10c-.5 0-.9.5-.9 1s.4.9.9.9h11.4c3.2 3.2 6.8 5.7 10.9 7.3h-25.1c-.5 0-.9.4-.9.9s.4.9.9.9h28.1c8.1 2.5 17.4 2 25.1-1.2h-55.8c-.5 0-.9.4-.9.9s.4.9.9.9h59.9c1 0 1.8-.8 1.8-1.8 0-.9-.7-1.7-1.6-1.8h-53.1c11-5.6 18.7-16.7 18.7-30v-.1c-.1-5-1.1-12.8-2.6-20.2z"/>
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#00599C" d="M117.3 32L64 1.3 10.7 32v64L64 126.7 117.3 96V32zM64 114.7L21.3 90V38l42.7-24.7L106.7 38V90L64 114.7z"/>
          <path fill="#004482" d="M112 35.1L64 7.4 16 35.1v55.4l48 27.7 48-27.7V35.1zM64 111.4l-42.7-24.7V41.3L64 16.6l42.7 24.7v45.4L64 111.4z"/>
          <path fill="#FFFFFF" d="M66.7 48h-10.7c-5.9 0-10.7 4.8-10.7 10.7v10.7C45.3 75.2 50.1 80 56 80h10.7c5.9 0 10.7-4.8 10.7-10.7V64H66.7v5.3H56v-10.7h10.7V48z"/>
          <path fill="#FFFFFF" d="M96 56v5.3h5.3V64H96v5.3h-5.3V64h-5.3v-2.7h5.3V56H96zm16 0v5.3h5.3V64H112v5.3h-5.3V64h-5.3v-2.7h5.3V56h5.3z"/>
        </svg>
      );
    case 'js':
      return (
        <svg viewBox="0 0 128 128" className="w-8 h-8">
          <path fill="#F7DF1E" d="M12.4 12.4h103.1v103.1H12.4z"/>
          <path fill="#000000" d="M89.7 100.9c-4.9 3.5-12.7 6-20.1 6-12.8 0-19.4-5.5-23.3-12.9l12.4-7.4c2.6 4.9 6.2 8.5 11.5 8.5 4.6 0 7.8-2.3 7.8-5.5 0-3.9-3.2-5.3-10.4-8.5-11.8-5.3-18.7-9.5-18.7-19.4 0-9.2 6.9-17 19.4-17 10.1 0 16.2 4.1 20 10.4l-11.7 7.2c-2.3-4.1-5.5-6-9.2-6-3.7 0-6.2 2.1-6.2 4.9 0 3.5 2.5 4.8 10.4 8.5 12 5.5 18.5 10.4 18.5 19.8-.1 10.6-8.2 17.5-20.4 11.4zM39.6 105H24.3V46h15.4v59z"/>
          <path fill="#000000" d="M32 31c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
        </svg>
      );
    default:
      return null;
  }
};

const languages = [
  { id: 'python', name: 'Python', icon: 'python' },
  { id: 'java', name: 'Java', icon: 'java' },
  { id: 'cpp', name: 'C++', icon: 'cpp' },
  { id: 'js', name: 'JavaScript', icon: 'js' }
];

export default function LanguagePracticeCard() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  return (
    <div className="bg-[#121826] border border-gray-800 rounded-2xl p-5 shadow-md flex flex-col relative overflow-hidden group hover:border-[#7b32d9]/40 transition-all duration-300">
      
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7b32d9] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center space-x-3 mb-5 z-10">
        <div className="p-2.5 rounded-xl bg-gray-800/80 text-[#9b66ec]">
          <Code className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm tracking-wide flex items-center space-x-2">
            <span>Practice Programming Language</span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">Sharpen your coding skills in your favorite language</p>
        </div>
      </div>

      {/* Dropdown Placeholder */}
      <div className="relative mb-5 z-10">
        <select 
          className="w-full bg-[#1e2536] border border-gray-700 text-gray-300 text-sm rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-1 focus:ring-[#7b32d9]/50 transition-colors cursor-pointer"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="" disabled>Select Language</option>
          {languages.map(lang => (
            <option key={lang.id} value={lang.id}>{lang.name}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      {/* Grid of Languages */}
      <div className="grid grid-cols-5 gap-2 mb-6 z-10">
        {languages.map(lang => (
          <div 
            key={lang.id}
            onClick={() => {
              setSelectedLanguage(lang.id);
              if (window.innerWidth < 768) {
                setShowMobileWarning(true);
              } else {
                setShowComingSoonModal(true);
              }
            }}
            className={`flex flex-col items-center justify-center space-y-1.5 p-2 rounded-xl border transition-all cursor-pointer ${
              selectedLanguage === lang.id 
                ? 'bg-gray-800 border-gray-600 shadow-[0_0_10px_rgba(123,50,217,0.1)]' 
                : 'bg-[#181f2e] border-transparent hover:bg-gray-800'
            }`}
          >
            <LanguageIcon type={lang.icon} />
            <span className="text-[10px] font-medium text-gray-300">{lang.name}</span>
          </div>
        ))}
        
        {/* 'More' Button */}
        <div 
          onClick={() => {
            if (window.innerWidth < 768) {
              setShowMobileWarning(true);
            } else {
              setShowComingSoonModal(true);
            }
          }}
          className="flex flex-col items-center justify-center space-y-2 p-2 rounded-xl border border-transparent bg-[#181f2e] hover:bg-gray-800 transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-[10px] font-medium text-gray-300">More</span>
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={() => {
          if (window.innerWidth < 768) {
            setShowMobileWarning(true)
          } else {
            setShowComingSoonModal(true)
          }
        }}
        className="mt-auto w-full flex items-center justify-center space-x-2 bg-[#7b32d9] hover:bg-[#8b42e9] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-[0_0_15px_rgba(123,50,217,0.2)] hover:shadow-[0_0_25px_rgba(123,50,217,0.4)] z-10"
      >
        <span>Start Practice</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="bg-[#121826] border border-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#7b32d9] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

            <button 
              onClick={() => setShowComingSoonModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-gradient-to-br from-[#7b32d9]/20 to-[#9b66ec]/20 border border-[#7b32d9]/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(123,50,217,0.15)]">
              <Rocket className="w-10 h-10 text-[#c49bfa]" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-3">Coming Soon!</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We are currently building an amazing, fully-featured interactive coding environment for <span className="text-[#c49bfa] font-semibold">{languages.find(l => l.id === selectedLanguage)?.name || 'your favorite language'}</span>. Stay tuned for the upcoming season!
            </p>

            <button 
              onClick={() => setShowComingSoonModal(false)}
              className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors border border-gray-700"
            >
              Got it, I'll wait!
            </button>
          </div>
        </div>
      )}

      {/* Mobile Warning Modal */}
      {showMobileWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="bg-[#121826] border border-gray-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6 text-rose-500">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-white mb-3">PC/Laptop Required</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              To provide you with the best experience and proper code formatting, practice sessions are only available on desktop devices. Please use a PC or laptop to continue.
            </p>
            <button 
              onClick={() => setShowMobileWarning(false)}
              className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors border border-gray-700"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
