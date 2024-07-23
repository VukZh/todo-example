import { useContext, useEffect } from 'react';
import { getAllTodos } from '../../services/todosAPI.ts';
import { Context } from '../../store/contextProvider.tsx';
import { Todo } from '../';
import { TodoType } from '../../types/types.ts';

export const TodoList = () => {
  const { todos, setTodos } = useContext(Context);

  console.log('selectedTodo', todos);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = (await getAllTodos()) as TodoType[];
        console.log(todos);
        setTodos(todos);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);

  return (
    <div>
      {todos?.length ? 'My todos :' : 'No todos found'}
      {todos?.length
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              createdAt={todo.createdAt}
            />
          ))
        : null}
    </div>
  );
};
