/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { TodosContext } from '../../TodoContext';

const TodoList = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const onDeleteTodo = (index) => {
    toast.info('Deleted');
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className="mb-2 text-center">
          <th>#</th>
          <th>Your todo</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody className="mb-2 text-center">
        {todos.length ? todos.map((todo, index) => (
          <tr key={todo._id}>
            <td>
              {index}
            </td>
            <td>
              {todo.title}
            </td>
            <td>
              <Button
                onClick={() => onDeleteTodo(index)}
                variant="danger"
              >
                Delete
              </Button>
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan={3} align="center">
              No Data Found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TodoList;
