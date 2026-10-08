import './App.css'
import Task from './Task.jsx';
import taskData from './tasks.js';
import React, { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState(taskData);

  const [task, setTask] = useState({
      title: '', 
      description: '', 
      status: ''
    });

function handleEdit(id, taskStatus)
{
  setTasks(currTasks => {
    return currTasks.map(currTask => {
      if (currTask.id === id)
      {
        return {
          ...currTask,
          status: taskStatus
        };
      }

      return currTask;
    });
  });
}

  function createTask(task)
  {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        description={task.description}
        status={task.status}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    ) 
  }

  function handleDelete(id)
  {
    setTasks(currTasks => {
      return currTasks.filter(task => task.id !== id);
    });
  }

  function AddTask(e)
  {
    setTasks(currTasks => {
      const newTask = {
        id: crypto.randomUUID(),
        title: task.title,
        description: task.description,
        status: task.status
      };
        return [...currTasks, newTask];
    });

    e.preventDefault();
  }

  function handleOnChange(e)
  {
     const { value, name } = e.target;

     console.log(value);
     console.log(name);

     setTask(prevValue => {
      if(name === 'title')
      {
        return {
          title: value,
          description: prevValue.description,
          status: prevValue.status
        }
      }
      else if(name === 'description')
      {
        return {
          title: prevValue.title,
          description: value,
          status: prevValue.status
        }
      }
      else if(name === 'status')
      {
        return {
          title: prevValue.title,
          description: prevValue.description,
          status: value,
        }
      }
     });
  }

  return (
    <>
          <h1>Task Tracker</h1>
          {tasks.map(createTask)}
          <form>
              <label> Title: </label>
              <input type='text' placeholder='Add task title...' name='title' value={task.title} onChange={handleOnChange}/>
              <label> Description </label>
              <input type='text' placeholder='Add task description...' name='description' value={task.description} onChange={handleOnChange}/>

              <label> Status: </label>
              <select name='status' value={task.status} onChange={handleOnChange}>
                <option value="">--Please choose an option--</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <button onClick={AddTask}>Add Task</button>
          </form>
    </>
  )
}

export default App
