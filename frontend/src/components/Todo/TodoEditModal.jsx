/* eslint-disable no-underscore-dangle */
import React, { useContext, useState } from 'react';
import {
  Modal, Button, Form,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { TodosContext } from '../../TodoContext';
import myAxios from '../../utils/api';

const TodoModal = ({ show, onHide, todoToEdit }) => {
  const [todos, setTodos] = useContext(TodosContext);
  const [edit, setEdit] = useState('');

  const onSaveTodo = () => {
    try {
      const newTodos = todos.map((todo) => {
        if (todo._id === todoToEdit._id) {
          const data = {
            ...todo,
            title: edit,
          };
          myAxios.put(`/todo/${todoToEdit._id}`, { title: edit });
          return data;
        }
        return todo;
      });
      setTodos(newTodos);
      toast.info('Updated');
    } catch (e) {
      toast.error(e.message);
    }
    setEdit('');
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{todoToEdit.title}</h4>
        <Form>
          <Form.Group>
            <Form.Control
              value={edit}
              onChange={(event) => setEdit(event.target.value)}
              type="text"
              placeholder="Edit your todo"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSaveTodo}>Save Todo</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
