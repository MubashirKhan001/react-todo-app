import { useState } from "react";

function Todo() {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([]);

    const Addtodo = () => {
        if (!newTodo) {
            alert("please fill input");
            return
        } else {
            setTodos([...todos, { text: newTodo }]);
            setNewTodo("");
        }
    };

    const deleteTodo = (index) => {
        let todo = todos.filter((_, i) => i !== index);
        setTodos(todo);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center max-w-full">
            <div className="flex gap-3 mb-5">
                <input
                    className="border-2 rounded-lg pl-1 font-medium"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={Addtodo}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg
                   hover:bg-orange-700 transition font-semibold cursor-pointer">
                    ADD TODO
                </button>
            </div>
            <ul className="space-y-3">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center
                         bg-gray-100 px-4 py-2 rounded-lg gap-x-3 min-w-80 max-w-full"
                    >
                        <div className="text-gray-800">{todo.text}</div>
                        <div className="flex justify-center items-center gap-x-1">
                            {/* <button
                                className="cursor-pointer"
                                onClick={() => editTodo(index)}
                            >
                                <i className="fa-solid fa-pen-to-square text-red-500  text-[18px] hover:text-red-600"></i>
                            </button> */}
                            <button
                                className="cursor-pointer"
                                onClick={() => deleteTodo(index)}
                            >
                                <i className="fa-solid fa-trash text-red-500 hover:text-red-600 text-[18px]"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Todo;