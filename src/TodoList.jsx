import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    
    <>
      {/* /* 短路效应 就是前面这个条件如果是false后面就被jsx渲染出来 只有整个表达式都是true最后才是true */}
      {todos.length === 0 && <div>No todos</div>}

      <ul className="list">
        {todos.map((todo) => (
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </>
  );
}
