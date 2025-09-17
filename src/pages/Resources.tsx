import React, { useState } from 'react';
import { Library, Play, Download, BookOpen, Video, Headphones, FileText, Search, Filter } from 'lucide-react';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Meditation', 'Study Tips', 'Stress Management', 'Sleep', 'Relationships', 'Crisis Support'];

  const resources = [
    {
      id: 1,
      title: 'गहरी सांस लेने की तकनीक (Deep Breathing Techniques)',
      description: 'Learn traditional pranayama techniques adapted for modern stress relief',
      type: 'video',
      duration: '12 min',
      category: 'Meditation',
      language: 'Hindi/English',
      institution: 'IIT Delhi Wellness Center',
      thumbnail: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Effective Study Techniques for Better Mental Health',
      description: 'Research-backed study methods that reduce academic stress',
      type: 'article',
      duration: '8 min read',
      category: 'Study Tips',
      language: 'English',
      institution: 'AIIMS Mental Health Department',
      thumbnail: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'शांति संगीत - Relaxation Music Collection',
      description: 'Curated Indian classical and ambient music for relaxation',
      type: 'audio',
      duration: '45 min',
      category: 'Stress Management',
      language: 'Instrumental',
      institution: 'University Music Therapy Program',
      thumbnail: 'https://images.pexels.com/photos/3693601/pexels-photo-3693601.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Sleep Hygiene for Students',
      description: 'Practical guide to improving sleep quality during academic stress',
      type: 'guide',
      duration: '15 min read',
      category: 'Sleep',
      language: 'English',
      institution: 'Campus Health Services',
      thumbnail: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Building Healthy Relationships in College',
      description: 'Navigate friendships and romantic relationships while maintaining mental wellness',
      type: 'video',
      duration: '18 min',
      category: 'Relationships',
      language: 'English',
      institution: 'Student Counseling Center',
      thumbnail: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Crisis Support Guide - Know When to Seek Help',
      description: 'Recognize warning signs and access immediate professional support',
      type: 'guide',
      duration: '10 min read',
      category: 'Crisis Support',
      language: 'Multiple',
      institution: 'Emergency Mental Health Services',
      thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'audio': return Headphones;
      case 'article': return BookOpen;
      case 'guide': return FileText;
      default: return BookOpen;
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Resource Hub</h1>
          <p className="text-gray-600">
            Culturally relevant mental health resources curated by your institution
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white min-w-48"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Institution Notice */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-indigo-900 mb-2">Institution-Specific Content</h3>
          <p className="text-indigo-800 text-sm">
            These resources are specially curated and approved by your university's mental health professionals, 
            ensuring cultural relevance and institutional alignment.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            
            return (
              <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 group">
                <div className="relative">
                  <img 
                    src={resource.thumbnail} 
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      <TypeIcon className="w-3 h-3" />
                      <span>{resource.type}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {resource.duration}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Language: {resource.language}</span>
                      <span>By: {resource.institution}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Access</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upload Section for Institutions */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Institution Resource Management</h3>
              <p className="text-gray-600 text-sm mt-1">Upload and manage your institution's mental health resources</p>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Manage Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;