import React from 'react'
import Accept from "./Accept"
import NewTask from "./NewTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"

const TaskLIst = ({ data }) => {
    return (
        <div id='tasklist' className='select-none flex overflow-x-auto items-center justify-start gap-[1.2vw] flex-wrap h-[55%] w-full mt-10 py-5 px-14'>

            {data.tasks.map((elem, idx) => {

                if (elem.active) {
                    return <Accept key={idx} data={elem} />
                }
                else if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                else if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                else {
                    return <FailedTask key={idx} data={elem} />
                }
            })}

            {/* 
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}
        </div>

    )
}

export default TaskLIst