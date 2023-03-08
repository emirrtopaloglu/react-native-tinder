import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const signInWithPassword = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response.user) {
        setUser(response.user);
      } else {
        setUser(null);
        alert("Invalid email or password");
      }
      return response;
    } catch (error) {
      setUser(null);
      alert("Invalid email or password");
    }
  };

  const logout = async () => {
    try {
      const response = await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth = () => {
  return useContext(AuthContext);
};
