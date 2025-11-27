"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const AIAgentUserContext = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "Guest",
    birthDate: "1990-01-01",
    birthTime: "12:00",
    birthPlace: "New York, USA",
    fitnessGoals: "Stay healthy",
    dietaryPreferences: "None",
    jobTitle: "Professional",
    location: "Earth",
    notificationsEnabled: true,
    bio: "",
  });

  useEffect(() => {
    // load from storage after mount
    const saved = localStorage.getItem("omnilife_user");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("omnilife_user", JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (data) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUser must be used within AIAgentUserContext");
  return context;
};
