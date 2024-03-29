import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditedTodo(todos[index].text);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex].text = editedTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditedTodo('');
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditedTodo('');
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* ... (existing code) */}

        {/* New To-Do List Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Add a new to-do"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="p-2 border border-gray-300 rounded mr-2"
            />
            <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded">
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="mb-2">
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedTodo}
                      onChange={(e) => setEditedTodo(e.target.value)}
                      className="p-2 border border-gray-300 rounded mr-2"
                    />
                    <button onClick={saveEdit} className="px-2 py-1 bg-green-500 text-white rounded mr-2">
                      Save
                    </button>
                    <button onClick={cancelEdit} className="px-2 py-1 bg-gray-500 text-white rounded">
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                    <button onClick={() => startEdit(index)} className="px-2 ml-2 bg-blue-500 text-white rounded">
                      Edit
                    </button>
                    <button onClick={() => deleteTodo(index)} className="px-2 ml-2 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ... (existing code) */}
    </main>
  );
}
