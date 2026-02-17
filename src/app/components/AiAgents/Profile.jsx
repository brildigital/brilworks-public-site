"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  User,
  MapPin,
  Briefcase,
  Heart,
  Sparkles,
  Save,
  Upload,
  Utensils,
  Globe,
  Calendar,
  Clock,
  Activity,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
import AIAgentLayout from "./AIAgentLayout";
import { useUser } from "../../../context/AIAgentUserContext";

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-4 mt-8 pb-2 border-b border-white/5">
    <Icon className="text-cyan-400" size={18} />
    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest">
      {title}
    </h3>
  </div>
);

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}) => (
  <div className="group">
    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide group-focus-within:text-cyan-400 transition-colors">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-200 placeholder:text-slate-600 font-medium"
      />
      <div className="absolute left-3 top-[18px] text-slate-600 group-focus-within:text-cyan-500 transition-colors">
        {Icon && <Icon size={16} />}
      </div>
    </div>
  </div>
);

const SelectField = ({ label, value, onChange, options, icon: Icon }) => (
  <div className="group">
    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide group-focus-within:text-cyan-400 transition-colors">
      {label}
    </label>
    <div className="relative">
      <select
        value={value || ""}
        onChange={onChange}
        className="w-full pl-10 pr-10 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-200 appearance-none font-medium"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-900 text-slate-200">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute left-3 top-3.5 text-slate-600 group-focus-within:text-cyan-500 transition-colors">
        {Icon && <Icon size={16} />}
      </div>
      <div className="absolute right-3 top-3.5 text-slate-600 pointer-events-none">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>
);

const Profile = () => {
  const { profile, updateProfile } = useUser();
  const [formData, setFormData] = useState(profile);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  // Sync state if context updates
  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSaved(true);

    // Redirect to home after a short delay to show success feedback
    setTimeout(() => {
      setSaved(false);
      router.push("/ai-agents/");
    }, 800);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AIAgentLayout title="Personal Data Core" showBack>
      <div className="max-w-3xl mx-auto w-full p-6 pb-24">
        {/* Header / Avatar */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="relative group cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-28 h-28 rounded-full bg-slate-800 border-2 border-slate-700 overflow-hidden shadow-2xl group-hover:border-cyan-500 transition-all">
              {formData?.avatar ? (
                <img
                  src={formData?.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900">
                  <User size={40} />
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm">
              <Upload size={24} className="text-white" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white font-display tracking-wide">
            {formData?.name || "User"}
          </h2>
          <p className="text-slate-500 text-sm font-mono">
            {formData?.location || "Location Unknown"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Identity Section */}
          <SectionTitle icon={User} title="Identity & Bio" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              value={formData?.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              icon={User}
            />
            <SelectField
              label="Gender"
              value={formData?.gender}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, gender: e.target.value }))
              }
              options={["Male", "Female"]}
              icon={User}
            />
            <InputField
              label="Location"
              value={formData?.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="City, Country"
              icon={MapPin}
            />
            <InputField
              label="Job / Profession"
              value={formData?.jobTitle}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))
              }
              placeholder="e.g. Software Engineer"
              icon={Briefcase}
            />
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
                Bio / About Me
              </label>
              <textarea
                value={formData?.bio}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, bio: e.target.value }))
                }
                className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-200 h-24 resize-none"
                placeholder="Tell the AI a bit about yourself..."
              />
            </div>
          </div>

          {/* Cosmic Data (Astrology) */}
          <SectionTitle icon={Sparkles} title="Cosmic Data (For Astrology)" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              type="date"
              label="Birth Date"
              value={formData?.birthDate}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, birthDate: e.target.value }))
              }
              icon={Calendar}
            />
            <InputField
              type="time"
              label="Birth Time"
              value={formData?.birthTime}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, birthTime: e.target.value }))
              }
              icon={Clock}
            />
            <InputField
              label="Birth Place"
              value={formData?.birthPlace}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, birthPlace: e.target.value }))
              }
              placeholder="City, State"
              icon={MapPin}
            />
          </div>

          {/* Lifestyle & Preferences */}
          <SectionTitle icon={Activity} title="Lifestyle & Preferences" />
          <div className="space-y-4">
            <InputField
              label="Fitness Goals"
              value={formData?.fitnessGoals}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  fitnessGoals: e.target.value,
                }))
              }
              placeholder="e.g. Build muscle, Run 5k"
              icon={Heart}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Dietary Preferences"
                value={formData?.dietaryPreferences}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dietaryPreferences: e.target.value,
                  }))
                }
                placeholder="e.g. Vegan, Keto, No Nuts"
                icon={Utensils}
              />
              <InputField
                label="Learning / Language Goals"
                value={formData?.learningGoals}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    learningGoals: e.target.value,
                  }))
                }
                placeholder="e.g. Learn Spanish, Python"
                icon={Globe}
              />
            </div>
          </div>

          {/* Static Save Button */}
          <div className="mt-10 mb-8 flex justify-end">
            <button
              type="submit"
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl shadow-lg transition-all duration-300 w-full md:w-auto hover:scale-[1.02] active:scale-95 ${
                saved
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border border-white/10"
              }`}
            >
              <Save size={20} />
              <span className="font-bold tracking-wide">
                {saved ? "DATA UPDATED" : "SAVE CHANGES"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </AIAgentLayout>
  );
};

export default Profile;
