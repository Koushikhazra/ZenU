import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  ClipboardList, 
  BookOpen, 
  Users, 
  TrendingUp,
  Calendar,
  Shield,
  Brain,
  Heart,
  Smile,
  Meh,
  Frown,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
  const moodOptions = [
    { icon: Smile, label: 'Great', color: 'text-green-500', bg: 'bg-green-100' },
    { icon: Smile, label: 'Good', color: 'text-therapeutic-500', bg: 'bg-therapeutic-100' },
    { icon: Meh, label: 'Okay', color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { icon: Frown, label: 'Low', color: 'text-orange-500', bg: 'bg-orange-100' },
    { icon: Frown, label: 'Struggling', color: 'text-red-500', bg: 'bg-red-100' },
  ];

  const quickActions = [
    {
      title: 'Talk to AI Counselor',
      description: 'Get immediate support in your preferred language',
      icon: MessageCircle,
      path: '/chat',
      color: 'bg-primary-500',
      available: '24/7'
    },
    {
      title: 'Take Assessment',
      description: 'Quick mental health check with validated tools',
      icon: ClipboardList,
      path: '/assessment',
      color: 'bg-therapeutic-500',
      available: '5 min'
    },
    {
      title: 'Write in Journal',
      description: 'Private, encrypted space for your thoughts',
      icon: BookOpen,
      path: '/journal',
      color: 'bg-purple-500',
      available: 'Private'
    },
    {
      title: 'Join Community',
      description: 'Connect with peers in a safe environment',
      icon: Users,
      path: '/forum',
      color: 'bg-indigo-500',
      available: 'Moderated'
    },
  ];

  const recentActivity = [
    { type: 'journal', content: 'Daily reflection completed', time: '2 hours ago', mood: 'good' },
    { type: 'chat', content: 'AI session: Stress management tips', time: '1 day ago', mood: 'okay' },
    { type: 'assessment', content: 'PHQ-9 assessment completed', time: '3 days ago', mood: 'low' },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Welcome back, Student
          </h1>
          <p className="text-gray-600">
            How are you feeling today? Your mental wellness journey matters.
          </p>
        </div>

        {/* Crisis Alert */}
        <div className="bg-gradient-to-r from-warning-50 to-orange-50 border border-warning-200 rounded-lg p-4 mb-8 animate-fade-in">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-warning-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-warning-800">Need immediate help?</h3>
              <p className="text-warning-700 text-sm mt-1">
                If you're experiencing a mental health crisis, our SOS system connects you instantly with professional help.
              </p>
              <Link
                to="/crisis"
                className="inline-flex items-center mt-3 bg-warning-500 hover:bg-warning-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Get Help Now
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mood Check-in */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-primary-500 mr-2" />
                Daily Mood Check-in
              </h2>
              <p className="text-gray-600 mb-6">How are you feeling right now?</p>
              <div className="grid grid-cols-5 gap-3">
                {moodOptions.map((mood, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center p-4 rounded-lg border-2 border-transparent hover:border-gray-300 transition-all duration-200 group ${mood.bg}`}
                  >
                    <mood.icon className={`w-8 h-8 ${mood.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-700">{mood.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Brain className="w-5 h-5 text-primary-500 mr-2" />
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.path}
                    className="group bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-5 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${action.color} p-3 rounded-lg group-hover:scale-105 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                        <span className="inline-flex items-center mt-2 text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                          {action.available}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 text-primary-500 mr-2" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.content}</p>
                      <p className="text-gray-500 text-sm">{activity.time}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.mood === 'good' ? 'bg-green-100 text-green-700' :
                      activity.mood === 'okay' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {activity.mood}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Mood Tracking</span>
                    <span className="text-gray-900 font-medium">6/7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-therapeutic-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Journal Entries</span>
                    <span className="text-gray-900 font-medium">4/7 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Self-Care Activities</span>
                    <span className="text-gray-900 font-medium">3/5 completed</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-primary-500 mr-2" />
                Today's Wellness
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-therapeutic-50 rounded-lg">
                  <div className="w-8 h-8 bg-therapeutic-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Morning meditation</p>
                    <p className="text-xs text-gray-500">Completed at 8:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Mood check-in</p>
                    <p className="text-xs text-gray-500">Due at 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Evening reflection</p>
                    <p className="text-xs text-gray-500">Due at 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Your Privacy is Protected</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    All your data is encrypted and anonymous. We prioritize your confidentiality and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;