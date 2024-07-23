import { TodoDelete, TodoEditCreate, TodoList } from '../../components';

export const TodosPage = () => {
  return (
    <>
      <TodoList />
      <TodoEditCreate />
      <TodoDelete />
    </>
  );
};
