import React, { useContext, useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import { TodosContext } from '../../TodoContext';
import myAxios from '../../utils/api';

const TodoForm = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [todo, setTodo] = useState('');

  const onAddTodo = async (event) => {
    event.preventDefault();

    const data = {
      title: todo,
    };

    try {
      const response = await myAxios.post('/todo', data);
      toast.info(`Todo "${response.data.todo.title}" created!`);
      setTodos([...todos, response.data.todo]);
      setTodo('');
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <Form onSubmit={onAddTodo}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
              type="text"
              placeholder="Insert your todo"
            />
          </Form.Group>
        </Col>
        <Col>
          <Button type="submit">
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
