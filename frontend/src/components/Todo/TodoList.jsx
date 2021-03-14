/* eslint-disable no-underscore-dangle */
import React, { useContext, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { TodosContext } from '../../TodoContext';
import myAxios from '../../utils/api';
import TodoModal from './TodoEditModal';

const TodoList = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [modalShow, setModalShow] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  const onDeleteTodo = async (todo) => {
    try {
      await myAxios.delete(`/todo/${todo._id}`);
      const newTodos = todos.filter(({ _id }) => _id !== todo._id);
      setTodos(newTodos);
      toast.info(`Todo "${todo.title}" deleted`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const setEditTodo = (todo) => {
    setTodoToEdit(todo);
    setModalShow(true);
  };

  return (
    <>
      <TodoModal
        show={modalShow}
        setModalShow={setModalShow}
        todoToEdit={todoToEdit}
      />
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
                  className="mr-4"
                  onClick={() => onDeleteTodo(todo)}
                  variant="danger"
                >
                  Delete
                </Button>

                <Button
                  onClick={() => setEditTodo(todo)}
                  variant="primary"
                >
                  Edit
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
    </>
  );
};

export default TodoList;
