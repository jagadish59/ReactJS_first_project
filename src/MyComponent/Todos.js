import React from 'react'
import { ToodsItem } from './ToodsItem'

export const Todos = (props) => {
    return (
        <div className='container'>

            <h3 className='text-center'>Todos list</h3>
            {

                props.Todos.length===0 ? 'no todos':
             props.Todos.map( (todo)=>{
                 return(
                 
                 <> <h3>This is </h3>
                 <ToodsItem Todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    
                    </>)
             })
            }

            
        </div>
    )
}
