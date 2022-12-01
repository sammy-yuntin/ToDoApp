import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import DeleteModal from "./DeleteModal";

function Todo(props){

  const [modalIsOpen, setModalIsOpen] = useState(false)


  useState();

    function deleteHandler() {
      setModalIsOpen(true)
    }

    function closeModalHandler() {
      setModalIsOpen(false)
    } 

    return(  
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <DeleteModal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
        
      </div>
    )
}

export default Todo; 