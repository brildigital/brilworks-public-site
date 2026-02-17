"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const HospitalContactForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    hospitalName: "",
    cityCountry: "",
    spineSurgeryOffered: "",
    specializations: [],
    surgeriesPerMonth: "",
    contactName: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });

  const specializationsList = [
    "Degenerative Spine",
    "Spinal Deformity (Scoliosis)",
    "Spine Trauma",
    "Spine Oncology",
    "Minimally Invasive Spine Surgery (MISS)",
    "Pediatric Spine",
    "Cervical Spine",
    "Lumbar Spine",
  ];

  const roles = [
    "Admin",
    "Medical Director",
    "Head of Orthopedics",
    "Head of Neurosurgery",
    "Other",
  ];

  const surgeryRanges = ["0 - 10", "11 - 30", "31 - 50", "51 - 100", "100+"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleSpecializationChange = (spec) => {
    setFormData((prev) => ({
      ...prev,
      specializations: prev.specializations.includes(spec)
        ? prev.specializations.filter((s) => s !== spec)
        : [...prev.specializations, spec],
    }));
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          onClick={onClose}
        ></div>
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center space-y-6 animate-scaleIn">
          <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
            <p className="text-slate-600 text-lg">
              Our team will contact you shortly to schedule your personalized
              demo of SpineRecovery Pro.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-4 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col animate-scaleIn">
        <div className="flex-shrink-0 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-slate-100 flex justify-between items-center rounded-t-3xl z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Request Hospital Demo
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Fill out the form below to get started
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-slate-400" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-8 overflow-y-auto flex-1"
        >
          {/* Section: Hospital Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wider">
              <Building2 className="h-4 w-4" />
              <span>Hospital Details</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Hospital Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. St. Jude Medical Center"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none"
                  value={formData.hospitalName}
                  onChange={(e) =>
                    setFormData({ ...formData, hospitalName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  City & Country *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. New York, USA"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none"
                  value={formData.cityCountry}
                  onChange={(e) =>
                    setFormData({ ...formData, cityCountry: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Is Spine Surgery Offered at your Hospital? *
              </label>
              <div className="flex gap-4">
                {["Yes", "No"].map((option) => (
                  <label
                    key={option}
                    className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.spineSurgeryOffered === option
                        ? "border-blue-700 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                    }`}
                  >
                    <input
                      required
                      type="radio"
                      name="offered"
                      className="hidden"
                      value={option}
                      checked={formData.spineSurgeryOffered === option}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          spineSurgeryOffered: e.target.value,
                        })
                      }
                    />
                    <div
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                        formData.spineSurgeryOffered === option
                          ? "border-blue-700"
                          : "border-slate-300"
                      }`}
                    >
                      {formData.spineSurgeryOffered === option && (
                        <div className="h-2.5 w-2.5 rounded-full bg-blue-700" />
                      )}
                    </div>
                    <span className="font-bold">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Spine Specializations * (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {specializationsList.map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => handleSpecializationChange(spec)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      formData.specializations.includes(spec)
                        ? "bg-blue-700 border-blue-700 text-white shadow-md shadow-blue-700/20"
                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-700/50"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
              {formData.specializations.length === 0 && (
                <p className="text-xs text-slate-400 !mt-2 italic">
                  Please select at least one specialization
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Approx spine surgeries per month *
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none appearance-none font-medium text-slate-700"
                  value={formData.surgeriesPerMonth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      surgeriesPerMonth: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {surgeryRanges.map((range) => (
                    <option key={range} value={range}>
                      {range} surgeries
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section: Contact Person */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wider">
              <User className="h-4 w-4" />
              <span>Contact Person</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none"
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Role *
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none appearance-none font-medium text-slate-700"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    required
                    type="email"
                    placeholder="john@hospital.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Message / Notes (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                <textarea
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-8">
            <button
              type="submit"
              className="w-full py-4 bg-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-700/25 hover:shadow-blue-700/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
            >
              Request Hospital Demo
              <Send className="h-5 w-5" />
            </button>

            <p className="text-center text-xs text-slate-400 px-8 leading-relaxed">
              By submitting this form, you agree to our terms of service and
              privacy policy. No account will be created at this stage.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HospitalContactForm;
