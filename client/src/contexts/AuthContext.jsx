import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, []);


  const login = (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem('savedUser'));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      setUser({ name: savedUser.name, email });
      localStorage.setItem('user', JSON.stringify({ name: savedUser.name, email }));
      return true;
    }
    return false;
  };


  const register = (name, email, password) => {
    if (!email || !password || !name) return false;

    localStorage.setItem('savedUser', JSON.stringify({ name, email, password }));
    setUser({ name, email });
    localStorage.setItem('user', JSON.stringify({ name, email }));
    return true;
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}