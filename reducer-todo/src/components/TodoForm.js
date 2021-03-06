import React, { useState } from "react";

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const handleSubmit = event => {
      event.preventDefault();
        props.addTodo(input)
      setInput("");
    };

    const clearCompleted = event => {
        event.preventDefault();
            props.clearCompleted()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
            <button>Add Item</button>
            <button onClick={clearCompleted}>Clear Selected</button>
            </form>
        </div>
    );
}


export default TodoForm;