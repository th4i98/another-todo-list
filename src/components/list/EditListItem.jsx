import React, { useState } from "react";
import todoApi from "../../apis/todoApis";
const EditListItem = (props) => {
    const [edit, setEdit] = useState(props.name);
    const editHandler = () => {
        setEdit();
    };
    function editData(item) {
        const toEdit = todoApi.SAVE(item);
        setEdit(toEdit);
    }
    return <input placeholder="Edit"></input>;
};
export default EditListItem;
