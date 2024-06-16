import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  access_token: string;
  name: string;
  email: string;
  id: string;
}

// Tipo do contexto do usuário
interface UserContextType {
  user: User | null;
  updateUser: (newUserData: User) => Promise<void>;
  removeUser: () => Promise<void>;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUser();
  }, []);

  const updateUser = async (newUserData: User) => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(newUserData));
      setUser(newUserData);
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
    }
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("userData");
      setUser(null);
    } catch (error) {
      console.error("Erro ao remover os dados do usuário:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, updateUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
