import React from 'react'

export const ToodsItem = ({Todo,onDelete}) => {
    return (
        <div>
            <h4>{Todo.title}</h4>
            <p>{Todo.desc}</p>
            <butten className='btn btn-sm btn-danger' onClick={()=>{onDelete(Todo)}} >Delete</butten>
        </div>
    )
}
