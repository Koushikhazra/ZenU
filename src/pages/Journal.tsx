import React, { useState } from 'react';
import { BookOpen, Lock, Calendar, Search, Plus, Edit3, Trash2 } from 'lucide-react';

const Journal = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: 'Feeling overwhelmed with exams',
      content: 'Today was particularly challenging with upcoming exams. I managed to complete my study schedule but felt anxious throughout...',
      date: new Date(Date.now() - 86400000),
      mood: 'anxious',
      isPrivate: true
    },
    {
      id: 2,
      title: 'Good day with friends',
      content: 'Had a wonderful time with my study group. We supported each other and I felt less isolated...',
      date: new Date(Date.now() - 172800000),
      mood: 'happy',
      isPrivate: true
    },
    {
      id: 3,
      title: 'Meditation practice',
      content: 'Started my morning meditation routine. It helped me feel more centered and focused for the day ahead...',
      date: new Date(Date.now() - 259200000),
      mood: 'calm',
      isPrivate: true
    }
  ]);

  const [isWriting, setIsWriting] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: '', content: '', mood: 'neutral' });
  const [searchTerm, setSearchTerm] = useState('');

  const moodColors = {
    happy: 'bg-green-100 text-green-800',
    calm: 'bg-blue-100 text-blue-800',
    anxious: 'bg-yellow-100 text-yellow-800',
    sad: 'bg-purple-100 text-purple-800',
    angry: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800'
  };

  const moodOptions = [
    { value: 'happy', label: '😊 Happy', emoji: '😊' },
    { value: 'calm', label: '😌 Calm', emoji: '😌' },
    { value: 'neutral', label: '😐 Neutral', emoji: '😐' },
    { value: 'anxious', label: '😰 Anxious', emoji: '😰' },
    { value: 'sad', label: '😢 Sad', emoji: '😢' },
    { value: 'angry', label: '😠 Angry', emoji: '😠' }
  ];

  const handleSaveEntry = () => {
    if (!newEntry.title.trim() || !newEntry.content.trim()) return;

    const entry = {
      id: entries.length + 1,
      title: newEntry.title,
      content: newEntry.content,
      date: new Date(),
      mood: newEntry.mood,
      isPrivate: true
    };

    setEntries([entry, ...entries]);
    setNewEntry({ title: '', content: '', mood: 'neutral' });
    setIsWriting(false);
  };

  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Daily Journal</h1>
            <p className="text-gray-600">Your private, encrypted space for reflection and growth</p>
          </div>
          <button
            onClick={() => setIsWriting(true)}
            className="mt-4 sm:mt-0 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Entry</span>
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-green-800 font-medium">End-to-end encrypted</p>
              <p className="text-green-700 text-sm">Your journal entries are completely private and secure</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Writing/Search Area */}
          <div className="lg:col-span-2">
            {isWriting ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">New Journal Entry</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={newEntry.title}
                      onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                      placeholder="Give your entry a title..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How are you feeling?</label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {moodOptions.map((mood) => (
                        <button
                          key={mood.value}
                          onClick={() => setNewEntry({ ...newEntry, mood: mood.value })}
                          className={`p-3 rounded-lg border-2 text-center transition-all ${
                            newEntry.mood === mood.value
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-lg mb-1">{mood.emoji}</div>
                          <div className="text-xs font-medium">{mood.label.split(' ')[1]}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your thoughts</label>
                    <textarea
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                      placeholder="Write about your thoughts, feelings, experiences, or anything that's on your mind..."
                      rows={8}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setIsWriting(false)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveEntry}
                      className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                    >
                      Save Entry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Search */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search your journal entries..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Entries */}
                <div className="space-y-4">
                  {filteredEntries.map((entry) => (
                    <div key={entry.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{entry.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{entry.date.toLocaleDateString()}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${moodColors[entry.mood as keyof typeof moodColors]}`}>
                              {entry.mood}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Lock className="w-4 h-4 text-green-500" />
                              <span className="text-green-600">Encrypted</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-700 line-clamp-3">{entry.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Writing Prompts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Writing Prompts</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <p className="text-sm font-medium text-gray-900">What made me smile today?</p>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <p className="text-sm font-medium text-gray-900">What challenge did I overcome?</p>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <p className="text-sm font-medium text-gray-900">What am I grateful for?</p>
                </button>
                <button className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <p className="text-sm font-medium text-gray-900">How did I practice self-care?</p>
                </button>
              </div>
            </div>

            {/* Mood Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mood Patterns</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">This week</span>
                    <span className="font-medium">Mostly positive</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {['😊', '😌', '😐', '😊', '😌', '😊', '😰'].map((emoji, index) => (
                      <div key={index} className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>💡 You tend to feel better after writing. Keep it up!</p>
                </div>
              </div>
            </div>

            {/* Journal Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Journal Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total entries</span>
                  <span className="font-semibold">247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Writing streak</span>
                  <span className="font-semibold">12 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Average mood</span>
                  <span className="font-semibold">Good 😊</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Words written</span>
                  <span className="font-semibold">15,482</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;