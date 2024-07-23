import { TodoEditCreate, TodoList } from '../../components';

export const TodosPage = () => {
  return (
    <>
      <TodoList />
      <TodoEditCreate isNew={true} />
      <TodoEditCreate isNew={false} id="1" />
    </>
  );
};
