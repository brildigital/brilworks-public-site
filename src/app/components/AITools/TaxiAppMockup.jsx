import { Car, MapPin, Clock, Star, CreditCard, Phone, Navigation } from 'lucide-react';

export default function TaxiAppMockup() {
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
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">RideEasy</h3>
              <p className="text-xs text-slate-600">Your ride is here</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
            <Phone className="w-4 h-4 text-slate-600" />
          </div>
        </div>

        {/* Map Area */}
        <div className="bg-slate-200 rounded-xl h-32 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <Navigation className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs text-slate-500">Live Map View</p>
            </div>
          </div>
          {/* Driver Location */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          {/* User Location */}
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Driver Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-slate-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900">John Smith</h4>
              <p className="text-sm text-slate-600">Toyota Camry • ABC-123</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-green-600">
              <Clock className="w-4 h-4" />
              <span>2 min away</span>
            </div>
            <div className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span>0.8 km</span>
            </div>
          </div>
        </div>

        {/* Trip Details */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <h4 className="font-bold text-slate-900 mb-3">Trip Details</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">123 Main Street, Downtown</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm text-slate-600">456 Oak Avenue, Uptown</span>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-3 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Estimated Fare</span>
              <span className="font-bold text-slate-900">$12.50</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-900">Payment Method</span>
            </div>
            <span className="text-sm text-slate-600">•••• 1234</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-semibold">
            Cancel Ride
          </button>
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold">
            Call Driver
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-around mt-6 pt-4 border-t border-slate-200">
          <div className="flex flex-col items-center gap-1">
            <Car className="w-5 h-5 text-yellow-500 fill-current" />
            <span className="text-xs text-yellow-500 font-medium">Ride</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">History</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <CreditCard className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Payment</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Star className="w-5 h-5 text-slate-400" />
            <span className="text-xs text-slate-400">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
