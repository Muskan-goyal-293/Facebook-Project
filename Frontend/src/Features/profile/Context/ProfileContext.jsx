import React, { createContext, useState } from "react";
export const ProfileProviderContext = createContext();

export function ProfileContext({ children }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  return (
    <ProfileProviderContext.Provider
      value={{ error, setError, loading, setLoading, result, setResult }}
    >
      {children}
    </ProfileProviderContext.Provider>
  );
}
