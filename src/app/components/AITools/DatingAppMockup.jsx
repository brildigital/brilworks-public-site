import { Heart, MessageCircle, Video, MapPin, Star, Users } from 'lucide-react';

export default function DatingAppMockup() {
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
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">LoveMatch</h3>
              <p className="text-xs text-slate-600">Find your perfect match</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
          <div className="relative">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-pink-500" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-slate-900">Sarah, 25</h4>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-slate-600">4.9</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">Photographer & Travel Enthusiast</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              <span>2 miles away</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">✕</span>
          </button>
          <button className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">♥</span>
          </button>
          <button className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Video className="w-5 h-5 text-blue-600" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around mt-6 pt-4 border-t border-slate-200">
          <div className="flex flex-col items-center gap-1">
            <Heart className="w-5 h-5 text-pink-500 fill-current" />
            <span className="text-xs text-pink-500 font-medium">Discover</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Messages</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
