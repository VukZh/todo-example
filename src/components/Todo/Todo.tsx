import { useContext } from 'react';
import { Context } from '../../store/contextProvider.tsx';
import { TodoType } from '../../types/types.ts';
import { deleteTodo, getAllTodos } from '../../services/todosAPI.ts';

export const Todo = (todo: TodoType) => {
  const { id, title, description, createdAt } = todo;
  const { setTodos } = useContext(Context);
  const deleteTodoHandle = async (id: string) => {
    try {
      await deleteTodo(todo.id);
      const todos = (await getAllTodos()) as TodoType[];
      console.log(todos);
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {title} / {description} / {createdAt}
      <button style={{ marginLeft: '10px' }}>Edit</button>
      <button
        style={{ marginLeft: '10px' }}
        onClick={() => deleteTodoHandle(id)}>
        Delete
      </button>
    </div>
  );
};
