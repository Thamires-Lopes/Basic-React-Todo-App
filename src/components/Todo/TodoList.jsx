import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { TodosContext } from '../../TodoContext';

const TodoList = () => {
  const [todos] = useContext(TodosContext);
  // const deleteTodo = () => {};
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Your todo</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr>
            <td>
              {index}
            </td>
            <td>
              {todo}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TodoList;
