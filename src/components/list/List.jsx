import React, { useState, useEffect } from "react";
import ListItem from "./ListItems";
import status from "../../constant/status";
const List = ({ todos, changedHandler, changeToDo, deleteItem, getStatus }) => {
    const [contexts, setContexts] = useState({
        top: 0,
        left: 0,
        visibility: "hidden",
        todoList: {
            id: undefined,
            status: undefined,
            name: "",
        },
    });
    const handleShowContextMenu = (e, todo) => {
        setContexts({
            top: e.clientY,
            left: e.clientX,
            visibility: "visible",
            todoList: {
                ...contexts.todoList,
                ...todo,
            },
        });
    };
    const handleCloseContextMenu = (todo) => {
        setContexts({
            visibility: "hidden",
            todoList: {
                ...contexts.todoList,
                ...todo,
            },
        });
    };
    useEffect(() => {
        getStatus(contexts.todoList);
    }, [contexts]);

    function handleSaveStatusTodo(stt) {
        setContexts({
            ...contexts,
            todoList: {
                ...contexts.todoList,
                status: stt,
            },
        });
        console.log(contexts.todoList.status);
    }
    console.log(contexts.todoList);
    return (
        <>
            <div
                className={`status-context-cover ${contexts.visibility}`}
                onClick={() => {
                    handleCloseContextMenu();
                }}
            ></div>
            <div
                className={`status-context-menu ${contexts.visibility}`}
                style={{
                    top: `${contexts.top}px`,
                    left: `${contexts.left}px`,
                    transform: `${
                        window.innerHeight - contexts.top <= 150
                            ? "translateY(-100%)"
                            : ""
                    }`,
                }}
            >
                <button
                    className={`todo-status todo`}
                    onClick={(stt) => {
                        handleSaveStatusTodo(status.TODO);
                    }}
                >
                    Todo
                </button>
                <button
                    className={`todo-status process`}
                    onClick={(stt) => {
                        handleSaveStatusTodo(status.PROCESS);
                    }}
                >
                    Processing
                </button>
                <button
                    className={`todo-status completed`}
                    onClick={(stt) => {
                        handleSaveStatusTodo(status.COMPLETED);
                    }}
                >
                    Completed
                </button>
            </div>
            <ul>
                {todos &&
                    todos.map((item, key) => {
                        return (
                            <ListItem
                                key={key}
                                todo={item}
                                changeToDo={changeToDo}
                                deleteItem={deleteItem}
                                handleShowContextMenu={handleShowContextMenu}
                            ></ListItem>
                        );
                    })}
            </ul>
        </>
    );
};
export default List;
