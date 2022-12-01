import React from "react";


function DeleteModal(props){

    function cancelHandler(){
        props.onCancel() ;

    }
    function confirmHandler(){
        props.onConfirm();
    }
    

    return(
        <div className="modal">
            <p>Are you Sure to delete</p>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        </div>
    )
}

export default DeleteModal;