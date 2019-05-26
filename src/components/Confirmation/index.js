import React from "react";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Modal, ButtonGroup } from "./components";

const Confirmation = ({ onClose, deleteTrip }) => {
  return (
    <Modal>
      <h1>Удалить?</h1>
      <ButtonGroup>
        <button onClick={onClose}>Нет</button>
        <button
          onClick={() => {
            deleteTrip();
            onClose();
          }}
        >
          Да, удалить!
        </button>
      </ButtonGroup>
    </Modal>
  );
};

export default Confirmation;
