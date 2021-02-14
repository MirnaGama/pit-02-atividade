import React, { useState } from 'react';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';

import Card from '../components/Card';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const onAddTodo = () => {
    if (!text.trim()) {
      alert('Ta vazio');
      return;
    }
    setTodos([...todos, { title: text, completed: false }]);
    setText('');
  };

  const onCompleteTodo = (event, i) => {
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        const updatedTodo = {
          ...item,
          completed: event.target.checked,
        };
        return updatedTodo;
      }
      return item;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <Card title="Todo App" className="m-4">
        <Container>
          <h2>Lista de atividades</h2>
          <Row>
            <Col xl={12} md={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    type="text"
                    placeholder="Insira sua atividade do dia"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Button disabled={!text.trim()} onClick={onAddTodo} type="button">
                Adicionar Todo
              </Button>
            </Col>
          </Row>

          <Row>
            <ul>
              {todos.map((todo, index) => (
                <li className={todo.completed ? 'completed' : ''}>
                  <input className="m-2" type="checkbox" onChange={(event) => onCompleteTodo(event, index)} />
                  {todo.title}

                </li>
              ))}
            </ul>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default App;
