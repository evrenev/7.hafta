import React, { useEffect, useState } from "react";
import TaskListeItem from "./TaskListeItem";

function TaskList({ tasks, removeTask, editTask, doneTask }) {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function handlePriorityFilter() {
    setPriority((prev) => !prev);
  }

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    priority
      ? setFilteredTasks(tasks.filter((item) => item.priority === priority))
      : setFilteredTasks(tasks);
  }, [priority]);

  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <p className="lead">
          GÖREVLERR
          <span
            onClick={handlePriorityFilter}
            className={
              'btn btn-sm ${!priority?  "btn-info":"btn-primary"} float-end'
            }
          >
            {!priority ? "öncelikli olanları göster" : "hepsini göster"}
          </span>
        </p>

        <ul className="list-group my-3">
          {filteredTasks.map((item, index) => (
            <TaskListeItem
              key={index}
              item={item}
              editTask={editTask}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
