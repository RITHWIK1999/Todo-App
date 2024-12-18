import React, { useState } from 'react'

function Searchbar() {
    const [todo,setTodo]=useState([]);
    const [task,setTask]=useState("");
    const [date, setDate] = useState("");
    const [editTask,setEditTask]=useState(null);

    const handleTask =(e)=>{
        e.preventDefault();
        if (!task.trim()) {
            alert('Please Enter A Task and Click ToDo Button');
            return; 
    }
    if (editTask !== null){
        const updatetask=[...todo];
        updatetask[editTask]={task,date};
        setTodo(updatetask);
        setEditTask(null);
    }
    else {
        setTodo([...todo,{task,date}]);
       } 
       setTask("");
       setDate("");
    };

    const handleEditTask = (index) => {
        setTask(todo[index].task);
        setDate(todo[index].date);
        setEditTask(index);
      };
    
      const handleDeleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
      };
  return (
    <>
        <div>
        
        <form class="flex flex-col sm:flex-row items-center max-w-lg mx-auto p-4 space-y-4 sm:space-y-0 sm:space-x-4">
    <input 
        type="text" 
        id="todo-input" 
        class="w-full sm:flex-1 bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter your task..." 
        required 
        value={task}
        onChange={(e) => setTask(e.target.value)}
    />
     <input 
            type="date" 
            id="due-date-input" 
            className="bg-white border border-gray-300 text-black text-sm rounded-lg p-2.5 dark:bg-white dark:border-gray-300 dark:text-black"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
    <button 
        type="submit" 
        class="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm  text-white border-2 font-bold rounded-lg"
        onClick={handleTask}
        >
        {editTask !==null ? "Update" : "ToDo" }
    </button>
</form>

    </div>
    <div className='pt-20'>
    <ul className="space-y-2">
  {todo.map((tasks, index) => (
    <li
      key={index}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded space-y-2 sm:space-y-0 sm:space-x-4"
    >
<span className="text-sm md:text-base lg:text-lg text-black font-bold">{tasks.task}</span>
              {tasks.date && (
                <span className="text-xs sm:text-sm  text-black font-bold">Due: {tasks.date}</span>
              )}      <div className="flex space-x-2">
        <button
          className="px-2 py-1 text-white bg-yellow-600 rounded border-2 border-white text-sm sm:text-base"
          onClick={() => handleEditTask(index)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 text-white bg-red-500 rounded border-2 border-white text-sm sm:text-base"
          onClick={() => handleDeleteTask(index)}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
 </div>
    </>
    
  )
}

export default Searchbar