import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import Assessment from './pages/Assessment';
import Journal from './pages/Journal';
import Forum from './pages/Forum';
import Analytics from './pages/Analytics';
import Resources from './pages/Resources';
import Crisis from './pages/Crisis';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-therapeutic-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chatbot />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/crisis" element={<Crisis />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;