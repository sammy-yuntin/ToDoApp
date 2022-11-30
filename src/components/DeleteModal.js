import React from "react";

function DeleteModal(){

    return(
        <div className="modal">
            <p>Are you Sure to delete</p>
            <button className="btn">Confirm</button>
            <button className="btn btn--alt">Cancel</button>
        </div>
    )
}

export default DeleteModal;