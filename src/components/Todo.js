import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import DeleteModal from "./DeleteModal";

function Todo(props){

  const [modalIsOpen, setModalIsOpen] = useState(false)


  useState();

    function deletehandler() {
      console.log("i was clicked")
      setModalIsOpen(true)
    }

    return(
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deletehandler}>Delete</button>
        </div>
        {modalIsOpen && <DeleteModal/>}
        {modalIsOpen ? <Backdrop/> : null}
        
      </div>
    )
}

export default Todo; 