import React from 'react';
import { BarChart3, TrendingUp, Users, AlertTriangle, Shield, Calendar } from 'lucide-react';

const Analytics = () => {
  const universityStats = {
    totalStudents: 15420,
    activeUsers: 3247,
    riskFlags: 23,
    counselorSessions: 156,
    weeklyGrowth: 12.5
  };

  const trendData = [
    { month: 'Jan', stress: 65, anxiety: 45, depression: 30 },
    { month: 'Feb', stress: 72, anxiety: 52, depression: 35 },
    { month: 'Mar', stress: 85, anxiety: 68, depression: 45 },
    { month: 'Apr', stress: 78, anxiety: 61, depression: 40 },
    { month: 'May', stress: 70, anxiety: 55, depression: 32 },
    { month: 'Jun', stress: 60, anxiety: 42, depression: 28 }
  ];

  const riskAlerts = [
    { level: 'High Risk', count: 8, change: '+2', color: 'text-red-600 bg-red-100' },
    { level: 'Moderate Risk', count: 15, change: '+1', color: 'text-orange-600 bg-orange-100' },
    { level: 'Low Risk', count: 42, change: '-3', color: 'text-yellow-600 bg-yellow-100' }
  ];

  const departmentData = [
    { name: 'Engineering', students: 3520, riskLevel: 'Medium', utilization: 68 },
    { name: 'Medicine', students: 2100, riskLevel: 'High', utilization: 84 },
    { name: 'Arts & Sciences', students: 4200, riskLevel: 'Low', utilization: 45 },
    { name: 'Business', students: 2800, riskLevel: 'Medium', utilization: 72 },
    { name: 'Law', students: 1200, riskLevel: 'Medium', utilization: 63 }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Mental Health Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Anonymous insights to help improve campus mental health support
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-blue-800 font-medium">Privacy Protected Analytics</p>
              <p className="text-blue-700 text-sm">All data is anonymized and aggregated to protect student privacy</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-primary-500" />
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{universityStats.totalStudents.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-8 h-8 text-therapeutic-500" />
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{universityStats.activeUsers.toLocaleString()}</p>
                <p className="text-xs text-green-600">+{universityStats.weeklyGrowth}% this week</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-warning-500" />
              <div>
                <p className="text-sm text-gray-600">Risk Flags</p>
                <p className="text-2xl font-bold text-gray-900">{universityStats.riskFlags}</p>
                <p className="text-xs text-orange-600">Requires attention</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Counselor Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{universityStats.counselorSessions}</p>
                <p className="text-xs text-purple-600">This month</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-indigo-500" />
              <div>
                <p className="text-sm text-gray-600">Platform Usage</p>
                <p className="text-2xl font-bold text-gray-900">21%</p>
                <p className="text-xs text-indigo-600">Of total students</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trends Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Mental Health Trends</h2>
            <div className="space-y-4">
              {/* Chart placeholder */}
              <div className="h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Stress, Anxiety, and Depression Trends</p>
                  <p className="text-sm text-gray-400">6-month overview by month</p>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Stress Levels</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Anxiety Reports</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Depression Indicators</span>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Alerts */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
              <div className="space-y-3">
                {riskAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{alert.level}</p>
                      <p className="text-sm text-gray-600">{alert.count} students</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${alert.color}`}>
                      {alert.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Review High-Risk Cases
                </button>
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Schedule Interventions
                </button>
                <button className="w-full bg-therapeutic-500 hover:bg-therapeutic-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Department-wise Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Department</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Students</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Platform Usage</th>
                </tr>
              </thead>
              <tbody>
                {departmentData.map((dept, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                    <td className="py-3 px-4 text-gray-700">{dept.students.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        dept.riskLevel === 'High' ? 'bg-red-100 text-red-700' :
                        dept.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {dept.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full" 
                            style={{ width: `${dept.utilization}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{dept.utilization}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;