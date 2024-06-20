import { todo } from "node:test";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const Todolist: React.FC = () => {
  const title: string = "오늘 할 일";

  // 구조 분해 할당
  // state를 사용할 떄는 변수와 set이 한세트로 들어간다.
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    // 변화가 생길 때만 실행되도록 한다.
    if (newTodo.trim() != "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="container">
        <div>
          {/* <Form.Control size="lg" type="text" placeholder="Large text" /> */}
          <input
            type="text"
            placeholder="할 일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setNewTodo(e.target.value)} // 입력된 값을 newTodo에 담는다.
          />
          <Button variant="success" onClick={addTodo}>
            추가
          </Button>
          <p></p>
        </div>
        <div className="board">
          <ul>
            {todos.map((todo, idx) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                ></input>
                <span onClick={() => handleTodoClick(todo)}>
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </span>
                <button
                  onClick={() => {
                    removeTodo(todo.id);
                  }}
                  className="delbutton"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
