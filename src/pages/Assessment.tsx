import React, { useState } from 'react';
import { ClipboardList, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Assessment = () => {
  const [currentAssessment, setCurrentAssessment] = useState<'selection' | 'phq9' | 'gad7' | 'results'>('selection');
  const [phq9Responses, setPhq9Responses] = useState<number[]>([]);
  const [gad7Responses, setGad7Responses] = useState<number[]>([]);

  const phq9Questions = [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself - or that you are a failure',
    'Trouble concentrating on things',
    'Moving or speaking slowly, or being fidgety/restless',
    'Thoughts that you would be better off dead'
  ];

  const gad7Questions = [
    'Feeling nervous, anxious, or on edge',
    'Not being able to stop or control worrying',
    'Worrying too much about different things',
    'Trouble relaxing',
    'Being so restless that it\'s hard to sit still',
    'Becoming easily annoyed or irritable',
    'Feeling afraid as if something awful might happen'
  ];

  const responseOptions = [
    { value: 0, label: 'Not at all', description: 'Never or almost never' },
    { value: 1, label: 'Several days', description: 'Once in a while' },
    { value: 2, label: 'More than half the days', description: 'Often' },
    { value: 3, label: 'Nearly every day', description: 'Very often' }
  ];

  const assessmentTypes = [
    {
      id: 'phq9',
      title: 'PHQ-9 Depression Assessment',
      description: 'Clinically validated tool to assess depression symptoms',
      duration: '5-7 minutes',
      questions: '9 questions',
      color: 'bg-blue-500'
    },
    {
      id: 'gad7',
      title: 'GAD-7 Anxiety Assessment',
      description: 'Standardized tool to measure anxiety levels',
      duration: '3-5 minutes',
      questions: '7 questions',
      color: 'bg-therapeutic-500'
    }
  ];

  const handlePhq9Response = (questionIndex: number, value: number) => {
    const newResponses = [...phq9Responses];
    newResponses[questionIndex] = value;
    setPhq9Responses(newResponses);
  };

  const handleGad7Response = (questionIndex: number, value: number) => {
    const newResponses = [...gad7Responses];
    newResponses[questionIndex] = value;
    setGad7Responses(newResponses);
  };

  const calculatePhq9Score = () => {
    return phq9Responses.reduce((sum, response) => sum + (response || 0), 0);
  };

  const calculateGad7Score = () => {
    return gad7Responses.reduce((sum, response) => sum + (response || 0), 0);
  };

  const getPhq9Interpretation = (score: number) => {
    if (score <= 4) return { level: 'Minimal', color: 'text-green-600', description: 'Little to no depression symptoms' };
    if (score <= 9) return { level: 'Mild', color: 'text-yellow-600', description: 'Mild depression symptoms' };
    if (score <= 14) return { level: 'Moderate', color: 'text-orange-600', description: 'Moderate depression symptoms' };
    if (score <= 19) return { level: 'Moderately Severe', color: 'text-red-600', description: 'Moderately severe depression' };
    return { level: 'Severe', color: 'text-red-700', description: 'Severe depression symptoms' };
  };

  const getGad7Interpretation = (score: number) => {
    if (score <= 4) return { level: 'Minimal', color: 'text-green-600', description: 'Little to no anxiety' };
    if (score <= 9) return { level: 'Mild', color: 'text-yellow-600', description: 'Mild anxiety symptoms' };
    if (score <= 14) return { level: 'Moderate', color: 'text-orange-600', description: 'Moderate anxiety symptoms' };
    return { level: 'Severe', color: 'text-red-600', description: 'Severe anxiety symptoms' };
  };

  const renderAssessmentSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Mental Health Assessment</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a scientifically validated assessment to better understand your mental health. 
          These tools are used by healthcare professionals worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessmentTypes.map((assessment) => (
          <div key={assessment.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex items-start space-x-4">
              <div className={`${assessment.color} p-3 rounded-lg`}>
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{assessment.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{assessment.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>⏱️ {assessment.duration}</span>
                  <span>📋 {assessment.questions}</span>
                </div>
                <button
                  onClick={() => setCurrentAssessment(assessment.id as 'phq9' | 'gad7')}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900">About These Assessments</h3>
            <p className="text-blue-800 text-sm mt-1">
              PHQ-9 and GAD-7 are evidence-based screening tools used by healthcare professionals. 
              Your responses are confidential and will help provide personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPhq9Assessment = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-display font-bold text-gray-900">PHQ-9 Depression Assessment</h1>
            <p className="text-gray-600">Over the last 2 weeks, how often have you been bothered by...</p>
          </div>
          <div className="text-sm text-gray-500">
            Question {phq9Responses.filter(r => r !== undefined).length} of {phq9Questions.length}
          </div>
        </div>

        <div className="space-y-8">
          {phq9Questions.map((question, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">{index + 1}. {question}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {responseOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handlePhq9Response(index, option.value)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      phq9Responses[index] === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="font-medium text-gray-900">{option.label}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentAssessment('selection')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentAssessment('results')}
            disabled={phq9Responses.length !== phq9Questions.length}
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white rounded-lg transition-colors"
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );

  const renderResults = () => {
    const phq9Score = calculatePhq9Score();
    const phq9Result = getPhq9Interpretation(phq9Score);

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Assessment Complete</h1>
            <p className="text-gray-600">Here are your results and personalized recommendations</p>
          </div>

          {/* PHQ-9 Results */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Depression Assessment (PHQ-9)</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">{phq9Score}</div>
                <div className="text-sm text-gray-600">Total Score</div>
              </div>
              <div className="text-right">
                <div className={`text-lg font-semibold ${phq9Result.color}`}>{phq9Result.level}</div>
                <div className="text-sm text-gray-600">{phq9Result.description}</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${
                  phq9Score <= 4 ? 'bg-green-500' :
                  phq9Score <= 9 ? 'bg-yellow-500' :
                  phq9Score <= 14 ? 'bg-orange-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min((phq9Score / 27) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Personalized Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-therapeutic-50 border border-therapeutic-200 rounded-lg p-4">
                <h3 className="font-semibold text-therapeutic-800 mb-2">Immediate Actions</h3>
                <ul className="text-sm text-therapeutic-700 space-y-1">
                  <li>• Connect with our AI counselor for daily support</li>
                  <li>• Start a mindfulness routine (5-10 minutes daily)</li>
                  <li>• Maintain regular sleep schedule</li>
                </ul>
              </div>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                <h3 className="font-semibold text-primary-800 mb-2">Follow-up Care</h3>
                <ul className="text-sm text-primary-700 space-y-1">
                  <li>• Schedule appointment with campus counselor</li>
                  <li>• Join peer support groups</li>
                  <li>• Consider professional evaluation</li>
                </ul>
              </div>
            </div>

            {phq9Score > 14 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-800">Important Notice</h3>
                    <p className="text-red-700 text-sm mt-1">
                      Your assessment indicates significant symptoms. We strongly recommend speaking with a mental health professional. 
                      Our campus counselors are available to help.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setCurrentAssessment('selection')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Take Another Assessment
            </button>
            <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
              Save Results
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {currentAssessment === 'selection' && renderAssessmentSelection()}
        {currentAssessment === 'phq9' && renderPhq9Assessment()}
        {currentAssessment === 'results' && renderResults()}
      </div>
    </div>
  );
};

export default Assessment;