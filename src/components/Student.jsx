import React from 'react'

const Student = (props) => {
    return (
        <div onClick={()=>props.setPerson(props.student)} className="name m-3">{props.student.Name}</div>
    );
}

export default Student;