import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";

export default function TaskItem({ id, title, taskState, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);
  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    /*setEditableTitle((existingEditableTitle)=> {
        return newTitle;
    }) //Callback para alterar valor anterior */
    onTaskUpdate(id, newTitle, taskState);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
    );
  } else {
    return <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>;
  }
}

TaskItem.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
