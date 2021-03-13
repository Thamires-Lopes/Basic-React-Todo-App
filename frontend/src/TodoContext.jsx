import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import myAxios from './utils/api';

const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await myAxios.get('/todo');
      setTodos(response.data.todos);
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosContextProvider };
