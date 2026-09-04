import { useState, useMemo } from 'react'
import { Search, Book, FileText, Download, ExternalLink, Code, Database, Globe, Wrench, Brain, Coffee } from 'lucide-react'

// Map of categories and their associated notes
const notesData = [
  {
    id: "cs-fundamentals",
    title: "CS Fundamentals",
    icon: Code,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/30",
    files: [
      { title: "C Programming Basic Notes for Beginners Part-1", file: "C Programming Basic Notes for Beginners Part-1.pdf" },
      { title: "Oops Concepts", file: "Oops Concepts.pdf" }
    ]
  },
  {
    id: "java",
    title: "Java",
    icon: Coffee,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/30",
    files: [
      { title: "Star Patterns Programs in Java", file: "Star Patterns Programs in Java.pdf" }
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
    files: [
      { title: "SQL Notes for Beginners Part-1", file: "SQL Notes for Beginners Part-1.pdf" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/30",
    files: [
      { title: "Full Stack Web Development Notes", file: "Full Stack Web Development Notes.pdf" }
    ]
  },
  {
    id: "aptitude",
    title: "Aptitude",
    icon: Brain,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/30",
    files: [
      { title: "Aptitude Shortcuts", file: "Aptitude Shortcuts.pdf" }
    ]
  },
  {
    id: "productivity-tools",
    title: "Productivity & Tools",
    icon: Wrench,
    color: "text-gray-500",
    bgColor: "bg-gray-50 dark:bg-gray-800/50",
    files: [
      { title: "AI Productivity Tools", file: "AI Productivity Tools.pdf" },
      { title: "Excel Shortcut Keys", file: "Excel Shortcut Keys.pdf" },
      { title: "VS Code Shortcut Keys", file: "VS Code Shortcut Keys.pdf" },
      { title: "How to Make Symbols with Keyboard", file: "How to Make Symbols with Keyboard.pdf" }
    ]
  }
];

export default function NotesDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter notes based on search query
  const filteredData = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    
    return notesData.map(category => {
      // If the category title matches, show all its files
      if (category.title.toLowerCase().includes(lowerQuery)) {
        return category;
      }
      
      // Otherwise, filter the files inside the category
      const filteredFiles = category.files.filter(f => 
        f.title.toLowerCase().includes(lowerQuery) || f.file.toLowerCase().includes(lowerQuery)
      );
      
      if (filteredFiles.length > 0) {
        return { ...category, files: filteredFiles };
      }
      
      return null;
    }).filter(Boolean); // Remove nulls
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Global Search */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white flex items-center">
            <Book className="w-8 h-8 mr-3 text-indigo-500" />
            My Notes
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Your personal knowledge base and uploaded materials. Browse by category or search.
          </p>
          
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search notes, topics, technologies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-indigo-500 fill-current">
              <polygon points="0,100 100,0 100,100" />
           </svg>
        </div>
      </div>

      {/* Notes Grid */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map(category => (
            <div key={category.id} className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
              
              {/* Category Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                <div className={`p-3 rounded-2xl ${category.bgColor}`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>
              
              {/* Files List */}
              <div className="p-6 flex-1 bg-gray-50/50 dark:bg-gray-900/50">
                <ul className="space-y-4">
                  {category.files.map((file, idx) => (
                    <li key={idx} className="flex flex-col space-y-3 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
                      <div className="flex items-start">
                        <FileText className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">
                          {file.title}
                        </span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center space-x-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                        <a 
                          href={`/notes/${file.file}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-semibold transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </a>
                        <a 
                          href={`/notes/${file.file}`}
                          download
                          className="flex-1 flex items-center justify-center space-x-2 py-2 px-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold transition-colors border border-gray-200 dark:border-gray-600"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <Search className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No notes found</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            We couldn't find any notes matching "{searchQuery}". Try a different search term.
          </p>
        </div>
      )}

    </div>
  )
}
