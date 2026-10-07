import React from 'react';

function Task(props)
{
    return (
        <>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <label>Status:</label>
            <select name="status" id="status" value={props.status}>
                <option value="">--Please choose an option--</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <input type='button' value={"Edit"} />
            <input type='button' value={"Delete"} />
        </>
    )
}

export default Task;