import { useContext, useEffect, useState } from 'react';
import {
  createTodo,
  getAllTodos,
  updateTodo,
} from '../../services/todosAPI.ts';
import { TodoType } from '../../types/types.ts';
import { Context } from '../../store/contextProvider.tsx';

type TodoEditCreateProps = {
  isNew: boolean;
  id?: string;
};

export const TodoEditCreate = (props: TodoEditCreateProps) => {
  const { isNew = false, id = '' } = props;

  const { todos, setTodos } = useContext(Context);

  let todo: TodoType | undefined;

  if (!isNew && id) {
    todo = todos.find((todo) => todo.id === id);
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().slice(0, 10),
  );

  useEffect(() => {
    setTitle(todo?.title || '');
    setDescription(todo?.description || '');
    setCreatedAt(
      todo?.createdAt
        ? new Date(todo.createdAt).toISOString().slice(0, 10)
        : new Date().toISOString().slice(0, 10),
    );
  }, [todo]);

  const addTodoHandler = async () => {
    try {
      const date = await createTodo({
        title,
        description,
        createdAt,
      });
      const todos = (await getAllTodos()) as TodoType[];
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTodoHandler = async () => {
    try {
      const date = await updateTodo({
        id,
        title,
        description,
        createdAt,
      });
      const todos = (await getAllTodos()) as TodoType[];
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
      />
      <button onClick={isNew ? addTodoHandler : changeTodoHandler}>
        {isNew ? 'Create' : 'Update'}
      </button>
    </div>
  );
};
