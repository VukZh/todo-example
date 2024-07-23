import { TodoType } from '../types/types.ts';
import { useState, createContext, ReactNode } from 'react';

type ContextType = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
  selectedTodo: string;
  setSelectedTodo: (selectedTodo: string) => void;
};

const Context = createContext<ContextType>({
  todos: [],
  setTodos: () => {},
  selectedTodo: '',
  setSelectedTodo: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<string>('');

  return (
    <Context.Provider
      value={{ todos, setTodos, selectedTodo, setSelectedTodo }}>
      {children}
    </Context.Provider>
  );
};
