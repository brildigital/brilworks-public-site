import { Stethoscope, Calendar, FileText, Video, Bell, Heart, Activity, Users } from 'lucide-react';

export default function HealthcareAppMockup() {
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
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">HealthCare+</h3>
              <p className="text-xs text-slate-600">Post-surgery care</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <Bell className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        {/* Patient Status Card */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-slate-900">Recovery Progress</h4>
            <div className="flex items-center gap-1 text-green-600">
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">Good</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Pain Level</span>
              <div className="flex items-center gap-1">
                <div className="w-16 h-2 bg-slate-200 rounded-full">
                  <div className="w-8 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-green-600">2/10</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Mobility</span>
              <div className="flex items-center gap-1">
                <div className="w-16 h-2 bg-slate-200 rounded-full">
                  <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-blue-600">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Medication</span>
              <span className="text-sm font-medium text-green-600">On Track</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-900">Appointments</span>
            </div>
            <p className="text-xs text-slate-600">Next: Tomorrow 2:00 PM</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Video className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-slate-900">Telemedicine</span>
            </div>
            <p className="text-xs text-slate-600">Available now</p>
          </div>
        </div>

        {/* Care Plan */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h4 className="font-bold text-slate-900 mb-3">Today's Care Plan</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Take morning medication</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Physical therapy session</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <span className="text-sm text-slate-400">Evening walk (15 min)</span>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700">Emergency Contact</span>
          </div>
          <p className="text-xs text-red-600">Dr. Smith - +1 (555) 123-4567</p>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around pt-4 border-t border-slate-200">
          <div className="flex flex-col items-center gap-1">
            <Heart className="w-5 h-5 text-blue-500 fill-current" />
            <span className="text-xs text-blue-500 font-medium">Health</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Calendar className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Schedule</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FileText className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Records</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
