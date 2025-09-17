import React, { useState } from 'react';
import { AlertTriangle, Phone, MessageCircle, MapPin, Clock, Shield, Heart } from 'lucide-react';

const Crisis = () => {
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const emergencyContacts = [
    {
      name: 'Campus Emergency Counselor',
      phone: '+91-XXXX-XXXXXX',
      available: '24/7',
      type: 'immediate',
      description: 'Immediate crisis intervention and safety assessment'
    },
    {
      name: 'Student Wellness Center',
      phone: '+91-XXXX-XXXXXX',
      available: 'Mon-Fri 9AM-6PM',
      type: 'urgent',
      description: 'Professional counseling and mental health support'
    },
    {
      name: 'National Suicide Prevention Lifeline',
      phone: '9152987821',
      available: '24/7',
      type: 'crisis',
      description: 'National crisis support and suicide prevention'
    },
    {
      name: 'NIMHANS Helpline',
      phone: '+91-80-46110007',
      available: '24/7',
      type: 'professional',
      description: 'Professional mental health crisis support'
    }
  ];

  const warningSigns = [
    'Thoughts of self-harm or suicide',
    'Feeling hopeless or trapped',
    'Severe anxiety or panic attacks',
    'Substance abuse concerns',
    'Complete isolation from others',
    'Severe mood swings',
    'Inability to carry out daily activities'
  ];

  const immediateHelp = [
    {
      title: 'Call Emergency Services',
      description: 'If you or someone is in immediate danger',
      action: 'Call 108',
      urgent: true
    },
    {
      title: 'Campus Security',
      description: 'On-campus emergency assistance',
      action: 'Call Campus Security',
      urgent: true
    },
    {
      title: 'Trusted Friend/Family',
      description: 'Reach out to someone you trust',
      action: 'Make the Call',
      urgent: false
    }
  ];

  const handleSOSClick = () => {
    setIsEmergencyActive(true);
    // In a real app, this would trigger actual emergency protocols
    console.log('SOS activated - connecting to emergency services');
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <AlertTriangle className="w-16 h-16 text-warning-500 mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Crisis Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're not alone. Immediate help is available 24/7. Your safety and wellbeing matter.
          </p>
        </div>

        {/* Emergency SOS Button */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 mb-8 text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Emergency Support</h2>
          <button
            onClick={handleSOSClick}
            className={`w-32 h-32 rounded-full border-4 border-white text-white font-bold text-lg transition-all duration-200 ${
              isEmergencyActive 
                ? 'bg-red-700 animate-pulse-gentle scale-110' 
                : 'bg-red-500 hover:bg-red-600 hover:scale-105'
            }`}
          >
            {isEmergencyActive ? 'CONNECTING...' : 'SOS'}
          </button>
          <p className="text-red-100 mt-4 text-sm">
            Press for immediate connection to emergency mental health services
          </p>
        </div>

        {isEmergencyActive && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 animate-fade-in">
            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h3 className="font-semibold text-yellow-800">Connecting you to help...</h3>
                <p className="text-yellow-700 text-sm mt-1">
                  A trained crisis counselor will be with you shortly. Please stay on the line.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Immediate Help Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-2" />
                Immediate Help
              </h2>
              <div className="space-y-4">
                {immediateHelp.map((help, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${help.urgent ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                    <h3 className={`font-semibold mb-2 ${help.urgent ? 'text-red-800' : 'text-gray-900'}`}>
                      {help.title}
                    </h3>
                    <p className={`text-sm mb-3 ${help.urgent ? 'text-red-700' : 'text-gray-600'}`}>
                      {help.description}
                    </p>
                    <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      help.urgent 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-primary-500 hover:bg-primary-600 text-white'
                    }`}>
                      {help.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Signs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">When to Seek Immediate Help</h2>
              <div className="space-y-3">
                {warningSigns.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-warning-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Phone className="w-5 h-5 text-primary-500 mr-2" />
                Emergency Contacts
              </h2>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.type === 'immediate' ? 'bg-red-100 text-red-700' :
                        contact.type === 'crisis' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {contact.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{contact.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{contact.available}</span>
                        </div>
                      </div>
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Call Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Plan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 text-therapeutic-500 mr-2" />
                Personal Safety Plan
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-therapeutic-50 rounded-lg">
                  <p className="font-medium text-therapeutic-800">Step 1: Recognize warning signs</p>
                  <p className="text-therapeutic-700">Know your personal triggers and early symptoms</p>
                </div>
                <div className="p-3 bg-primary-50 rounded-lg">
                  <p className="font-medium text-primary-800">Step 2: Use coping strategies</p>
                  <p className="text-primary-700">Practice breathing, grounding, or other techniques you've learned</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-800">Step 3: Reach out for support</p>
                  <p className="text-purple-700">Contact friends, family, or crisis support services</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-medium text-indigo-800">Step 4: Seek professional help</p>
                  <p className="text-indigo-700">Contact counselors or emergency services if needed</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors">
                Create My Safety Plan
              </button>
            </div>
          </div>
        </div>

        {/* Chat Alternative */}
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-therapeutic-50 border border-primary-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-8 h-8 text-primary-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Not ready to call?</h3>
                <p className="text-gray-600 text-sm">Start with our AI crisis counselor for immediate support</p>
              </div>
            </div>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Start Crisis Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;