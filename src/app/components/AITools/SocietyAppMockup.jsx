import { Building, Users, Calendar, FileText, Bell, Shield, CreditCard, Settings } from 'lucide-react';

export default function SocietyAppMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm mx-auto hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-float">
      {/* Phone Header */}
      <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm font-medium">9:41</div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Enclave</h3>
              <p className="text-xs text-slate-600">Society Management</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <Bell className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="w-4 h-4 text-green-500" />
              <span className="text-xs font-medium text-slate-900">Maintenance</span>
            </div>
            <p className="text-lg font-bold text-green-600">$2,500</p>
            <p className="text-xs text-slate-500">Due in 5 days</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-medium text-slate-900">Visitors</span>
            </div>
            <p className="text-lg font-bold text-blue-600">3</p>
            <p className="text-xs text-slate-500">Today</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h4 className="font-bold text-slate-900 mb-3">Recent Activities</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Visitor Approved</p>
                <p className="text-xs text-slate-500">John Doe - Apt 4B</p>
              </div>
              <span className="text-xs text-slate-400">2 min ago</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Maintenance Request</p>
                <p className="text-xs text-slate-500">Elevator repair - Apt 2A</p>
              </div>
              <span className="text-xs text-slate-400">1 hour ago</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">Event Scheduled</p>
                <p className="text-xs text-slate-500">Community Meeting - Tomorrow</p>
              </div>
              <span className="text-xs text-slate-400">3 hours ago</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button className="bg-white rounded-lg p-3 shadow-sm text-left">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-slate-900">Visitor Pass</span>
            </div>
            <p className="text-xs text-slate-500">Generate QR code</p>
          </button>
          <button className="bg-white rounded-lg p-3 shadow-sm text-left">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-slate-900">Complaint</span>
            </div>
            <p className="text-xs text-slate-500">Submit issue</p>
          </button>
        </div>

        {/* Notices */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h4 className="font-bold text-slate-900 mb-3">Important Notices</h4>
          <div className="space-y-2">
            <div className="p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-medium text-yellow-800">Water Supply Maintenance</p>
              <p className="text-xs text-yellow-600">Tomorrow 9 AM - 12 PM</p>
            </div>
            <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-800">Annual Meeting</p>
              <p className="text-xs text-blue-600">Next Saturday 3 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around pt-4 border-t border-slate-200">
          <div className="flex flex-col items-center gap-1">
            <Building className="w-5 h-5 text-green-500 fill-current" />
            <span className="text-xs text-green-500 font-medium">Home</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Visitors</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Events</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Settings className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
}
