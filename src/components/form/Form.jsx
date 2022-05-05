import React, { useState, useEffect } from "react";
import todoApi from "../../apis/todoApis";

const Form = (props) => {
    const [newTodo, setNewTodo] = useState({
        name: "",
        id: "",
        status: "",
    });
    const handleChange = (e) => {
        setNewTodo({
            ...newTodo,
            name: e.target.value,
            status: 0,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        createData(newTodo);
        setNewTodo({
            name: "",
            id: undefined,
            status: "",
        });
    };
    const handleChangeFormToSave = () => {
        setNewTodo({
            id: undefined,
            name: "",
            status: 0,
        });
    };
    async function createData(item) {
        const toCreate = await todoApi.SAVE(item);
        if (newTodo.id !== undefined) {
            props.changedHandler(newTodo);
        } else {
            props.changedHandler({
                name: "",
                id: undefined,
                status: "",
            });
        }
    }
    useEffect(() => {
        setNewTodo({ ...newTodo, ...props.todo });
    }, [props]);
    return (
        <div className="todo-form">
            {newTodo.id && (
                <button
                    className="edit-tag"
                    onClick={() => {
                        handleChangeFormToSave();
                    }}
                >
                    EDIT: {newTodo.name}
                </button>
            )}
            <form
                onSubmit={(e) => {
                    return handleSubmit(e);
                }}
            >
                <input
                    id="myText"
                    onChange={(e) => {
                        return handleChange(e);
                    }}
                    type="text"
                    placeholder=" "
                    name="name"
                    value={newTodo.name}
                />
                <button
                    className="todo-save"
                    placeholder="Input todo"
                    type="submit"
                >
                    SAVE
                </button>
            </form>
        </div>
    );
};
export default Form;
