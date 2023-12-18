import React from 'react'

function AddChannel({AddChannelprop}) {
    function submitHandler(e)
    {
        e.preventDefault();

        const formData = {
            id:e.target.elements.id.value,
            name: e.target.elements.name.value,
            views: e.target.elements.views.value,
            verified: e.target.elements.verified.checked,
          };
        AddChannelprop(formData);//here prop will be sent as callback;
        //we sent the data in function parameters by setting the state up
        
        e.target.reset(); //after clicking submit form fields will be reset
        console.log(formData);
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" name="id" placeholder='id'/>
            <input type="text" name="name" placeholder='name'/>
            <input type="text" name="views" placeholder='views'/>
            <input type="checkbox" name="verified" />
            <button type="submit">Add Channel</button>
        </form>
    </div>
  )
}

export default AddChannel;