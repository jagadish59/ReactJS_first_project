import React,{ useState } from 'react';

export const AddTodo = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    return (
        <div className="container my-3">
            <h3 className="text-center">Add Todo </h3>
            <form>
  <div className="form-group my-3">
    <label for="exampleInputEmail1">Title of Todo</label>
    <input type="text" className="form-control"  value={title} onChange={(e)=>{settitle(e.target.value)}} aria-describedby="emailHelp" placeholder="Title of Todo"/>
    
  </div>
  <div className="form-group my-3">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Description"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
        </div>
    )
}
