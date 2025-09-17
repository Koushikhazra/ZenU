import React, { useState } from 'react';
import { Users, Plus, MessageCircle, Heart, Flag, Search, Filter } from 'lucide-react';

const Forum = () => {
  const [posts] = useState([
    {
      id: 1,
      title: 'Dealing with exam anxiety - tips that actually work',
      content: 'Hi everyone! I wanted to share some techniques that have helped me manage exam stress. Deep breathing exercises and breaking study sessions into smaller chunks have been game-changers...',
      author: 'Student_2024',
      category: 'Academic Stress',
      likes: 23,
      replies: 8,
      timestamp: new Date(Date.now() - 3600000),
      isLiked: false,
      tags: ['anxiety', 'exams', 'coping']
    },
    {
      id: 2,
      title: 'Finding motivation during tough times',
      content: 'Sometimes it feels like everything is overwhelming. What keeps you motivated when things get difficult? Looking for some inspiration from this amazing community...',
      author: 'HopefulHeart',
      category: 'Motivation',
      likes: 31,
      replies: 12,
      timestamp: new Date(Date.now() - 7200000),
      isLiked: true,
      tags: ['motivation', 'support', 'community']
    },
    {
      id: 3,
      title: 'Meditation apps that actually help students',
      content: 'After trying many meditation apps, I\'ve found a few that work specifically well for students. Here\'s my honest review of what worked for me and what didn\'t...',
      author: 'MindfulMedic',
      category: 'Self-Care',
      likes: 45,
      replies: 15,
      timestamp: new Date(Date.now() - 14400000),
      isLiked: false,
      tags: ['meditation', 'apps', 'self-care']
    },
    {
      id: 4,
      title: 'How to talk to friends about mental health',
      content: 'I\'ve been struggling to open up to my friends about my mental health journey. Has anyone here successfully had these conversations? What approach worked for you?',
      author: 'QuietVoice',
      category: 'Relationships',
      likes: 18,
      replies: 9,
      timestamp: new Date(Date.now() - 21600000),
      isLiked: false,
      tags: ['friends', 'communication', 'support']
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic Stress', 'Anxiety', 'Depression', 'Self-Care', 'Relationships', 'Motivation', 'Crisis Support'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Peer Support Community</h1>
            <p className="text-gray-600">A safe, moderated space to connect and share experiences</p>
          </div>
          <button className="mt-4 sm:mt-0 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Create Post</span>
          </button>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>✓ Be kind and supportive</div>
            <div>✓ Respect privacy and anonymity</div>
            <div>✓ No medical advice - seek professionals</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-gray-900">{post.author}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{post.timestamp.toLocaleDateString()}</span>
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-700 line-clamp-3">{post.content}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                      <Flag className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-6 pt-4 border-t border-gray-100">
                    <button className={`flex items-center space-x-2 ${post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'} transition-colors`}>
                      <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{post.replies} replies</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 text-primary-500 mr-2" />
                Community
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active members</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts this week</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Online now</span>
                  <span className="font-semibold text-green-600">127</span>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['#examstress', '#mindfulness', '#selfcare', '#motivation', '#anxiety'].map((tag, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium">{tag}</span>
                    <span className="text-xs text-gray-500">{Math.floor(Math.random() * 50) + 10} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Moderation Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Moderated Community</h4>
              <p className="text-green-700 text-sm">
                Our trained moderators ensure this space remains safe and supportive for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;