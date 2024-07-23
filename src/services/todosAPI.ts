import axios from 'axios';

const BASE_URL = 'https://669f5eacb132e2c136fd951b.mockapi.io/api/v1/todos';

const getAllTodos = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

const createTodo = async (todo) => {
  try {
    const response = await axios.post(BASE_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    throw error;
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
