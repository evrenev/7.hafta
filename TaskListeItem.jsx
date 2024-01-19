import React from 'react'

function TaskListeItem({item,editTask,removeTask,doneTask}) {
  return (
   <>
    <li className={
        'list-group-item ${item.isDone && "bg-success bg-gradient" }' }
                key={item.uuid}>
              {item.priority && 
                <span className='badge text-bg-secondary me-2'>ÖNCELİKLİ</span>
              }
              {item.task}
              <div className="btn-group float-end" role="group">

              <button
                  onClick={() => doneTask(item.uuid)}
                  className="btn btn-sm btn-success float-end">
                
                 BİTTİ
                </button>

                <button
                  onClick={() => editTask(item.uuid)}
                  className="btn btn-sm btn-info float-end">
                
                  GÜNCELLE
                </button>

                <button
                  onClick={() => removeTask(item.uuid)}
                  className="btn btn-sm btn-danger float-end">
                
                  SİL
                </button>
              </div>
              </li>
   
   </>
  )
}

export default TaskListeItem