import { useContext } from 'react';
import { Context } from '../../store/contextProvider.tsx';
import { TodoType } from '../../types/types.ts';

export const Todo = (todo: TodoType) => {
  const { id, title, description, createdAt } = todo;
  const { setShowDeleteModal, setCurrentTodoId, setShowEditModal } =
    useContext(Context);
  const showDeleteModalHandle = () => {
    setShowDeleteModal(true);
    setCurrentTodoId(id);
  };

  const showEditModalHandle = () => {
    setShowEditModal(true);
    setCurrentTodoId(id);
  };

  return (
    <div>
      {title} / {description} /{' '}
      {createdAt.endsWith('Z') ? createdAt.slice(0, 10) : createdAt}
      <button style={{ marginLeft: '10px' }} onClick={showEditModalHandle}>
        Change
      </button>
      <button style={{ marginLeft: '10px' }} onClick={showDeleteModalHandle}>
        Delete
      </button>
    </div>
  );
};
