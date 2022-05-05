import React from "react";
import status from "../../constant/status";
// import EditListItem from "./EditListItem";
// import FilterStatus from "./FilterStatus";
const ListItems = ({ todo, changeToDo, deleteItem, handleShowContextMenu }) => {
    // const [showInput, setShowInput] = useState(false);
    // const [filteredStatus, setFilterdStatus] = useState("completed");

    return (
        <>
            <li className="todo-item" key={todo.id}>
                <div className="todo-content">{todo.name}</div>
                <div
                    className={`todo-status ${status.getClass(todo.status)}`}
                    onClick={(e) => {
                        handleShowContextMenu(e, todo);
                    }}
                >
                    {status.getDisplayName(todo.status)}
                </div>

                <div className="todo-action">
                    <a
                        onClick={() => {
                            changeToDo(todo.id);
                            document.getElementById("myText").focus();
                        }}
                        href="/#"
                        className="todo-edit"
                    >
                        Edit
                    </a>
                    {/* {showInput && <EditListItem></EditListItem>} */}
                    <a
                        onClick={() => deleteItem(todo.id)}
                        href="/#"
                        className="todo-delete"
                    >
                        Delete
                    </a>
                </div>
            </li>
        </>
    );
};
export default ListItems;
