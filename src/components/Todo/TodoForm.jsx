import React, { useContext, useState } from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { TodosContext } from '../../TodoContext';

const TodoForm = () => {
  const [todos, setTodos] = useContext(TodosContext);
  const [todo, setTodo] = useState('');

  const onAddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
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
