import React from "react";

const FilterStatus = (props) => {
    const statusChangeHandler = () => {
        
    }

    return (
        <div>
            <select value={props.selected} onChange={statusChangeHandler}>
                <option value="todo">Todo</option>
                <option value="process">Process</option>
                <option value="completed">Completed</option>
            </select>
        </div>
    );
}
export default FilterStatus