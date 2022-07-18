import react from "react";
import './CreateTodoButtom.css';

function CreateTodoButtom({setOpenModal, openModal}){

    const onClickButton = () => {
        openModal ? setOpenModal(false) : setOpenModal(true)
    }

    return(
        <button 
            className={openModal ? "CreateTodoButtonTrue": "CreateTodoButtonFalse"}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButtom};