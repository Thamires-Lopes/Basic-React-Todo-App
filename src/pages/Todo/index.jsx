import React from 'react';
import { Container } from 'react-bootstrap';
import TodoForm from '../../components/Todo/TodoForm';
import TodoList from '../../components/Todo/TodoList';
import { TodosContextProvider } from '../../TodoContext';

const TodoPage = () => (
  <TodosContextProvider>
    <Container className="m-4">
      <TodoForm />
      <TodoList />
    </Container>
  </TodosContextProvider>
);

export default TodoPage;
