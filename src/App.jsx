import React, { useState, useEffect } from "react";
import List from "./components/list/List";
import Form from "./components/form/Form";
// import logo from "./logo.svg";
import "./App.scss";
import todoApi from "./apis/todoApis";

function App() {
    const [todos, setToDos] = useState([]);
    const [todo, setToDo] = useState({});
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        renderData();
    }, [changed]);

    const changedHandler = async (todoParam) => {
        // setToDo(todoParam);
        setChanged(!changed);
    };
    async function renderData() {
        const toDos = await todoApi.GETALL();
        setToDos(toDos);
    }
    const changeToDo = async (toDo) => {
        const getTodo = await todoApi.GETITEM(toDo);
        setToDo(getTodo);
    };
    async function deleteHandler(id) {
        const toDelete = await todoApi.DELETE(id);
        changedHandler();
    }
    async function getStatus(item) {
        const toCreate = await todoApi.SAVE(item);
        if (todo.id !== undefined) {
            changedHandler(todo);
        } else {
            changedHandler({
                name: "",
                id: undefined,
                status: "",
            });
        }
    }
    return (
        <div className="App">
            <div className="title">
                Todo <strong>list</strong>
            </div>
            <div className="todo-list">
                <Form todo={todo} changedHandler={changedHandler} />
                <List
                    todos={todos}
                    todo={todo}
                    changeToDo={changeToDo}
                    deleteItem={deleteHandler}
                    getStatus={getStatus}
                    changedHandler={changedHandler}
                />
            </div>
        </div>
    );
}
export default App;
