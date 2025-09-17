import React, { useState } from 'react';
import { Send, Bot, User, Globe, Mic, MicOff } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      content: 'नमस्ते! मैं आपका AI सलाहकार हूं। आज आप कैसा महसूस कर रहे हैं? (Hello! I\'m your AI counselor. How are you feeling today?)',
      timestamp: new Date(Date.now() - 10000),
      language: 'Hindi/English'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [isListening, setIsListening] = useState(false);

  const languages = [
    'Hindi', 'English', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi'
  ];

  const quickResponses = [
    'मैं तनावग्रस्त महसूस कर रहा हूं (I feel stressed)',
    'मुझे चिंता हो रही है (I\'m feeling anxious)',
    'मैं अकेला महसूस करता हूं (I feel lonely)',
    'पढ़ाई का दबाव है (Academic pressure)',
    'नींद नहीं आ रही (Can\'t sleep)',
    'I need motivation'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      timestamp: new Date(),
      language: selectedLanguage
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'मैं समझ रहा हूं कि आप कैसा महसूस कर रहे हैं। आइए इस पर बात करते हैं। (I understand how you\'re feeling. Let\'s talk about this.)',
        'आपकी भावनाएं वैध हैं। क्या आप मुझे और बता सकते हैं? (Your feelings are valid. Can you tell me more?)',
        'मैं यहां आपकी मदद के लिए हूं। आइए कुछ श्वास व्यायाम करते हैं। (I\'m here to help. Let\'s try some breathing exercises.)'
      ];

      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        language: selectedLanguage
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-therapeutic-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-gray-900">AI Counselor</h1>
                <p className="text-sm text-gray-600">Available 24/7 • Multilingual Support</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>End-to-end encrypted</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Culturally aware responses</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Evidence-based guidance</span>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1">
                    {message.sender === 'bot' ? (
                      <Bot className="w-4 h-4 text-primary-500" />
                    ) : (
                      <User className="w-4 h-4 text-primary-200" />
                    )}
                    <span className="text-xs opacity-75">
                      {message.sender === 'bot' ? 'AI Counselor' : 'You'}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-75 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <p className="text-sm text-gray-600 mb-3">Quick responses:</p>
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickResponse(response)}
                  className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsListening(!isListening)}
                className={`p-2 rounded-lg transition-colors ${
                  isListening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`Type your message in ${selectedLanguage}...`}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> This AI counselor provides general support and guidance. 
            For serious mental health concerns, please consult with a professional counselor or use our SOS feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;