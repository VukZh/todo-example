import { useContext, useEffect } from 'react';
import { getAllTodos } from '../../services/todosAPI.ts';
import { Context } from '../../store/contextProvider.tsx';
import { Todo } from '../';
import { TodoType } from '../../types/types.ts';

export const TodoList = () => {
  const { todos, setTodos, setShowEditModal, setCurrentTodoId } =
    useContext(Context);

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

  const createTodoHandle = () => {
    setShowEditModal(true);
    setCurrentTodoId('');
  };

  return (
    <div>
      <button
        className="fixed top-1 inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto"
        onClick={createTodoHandle}>
        Create
      </button>
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
