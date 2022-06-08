import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(!props.flag);


  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() =>toggleModal(),[props.flag])


  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      { modal && (
        <div className="modal">
          <div onClick={props.onClose} className="overlay"></div>
          <div className="modal-content-modal">
            <div>
              <div className="title-container-modal">{props.title}</div>
              <div className="artist-container-modal">{props.artist}</div>
              <div className="id-container-modal">Id - {props.id}</div>
              <img className="img-modal" src={props.image} width="150px" height="150px"/>
            </div>
            <div className="link-container-modal">
              <a href={props.image}>{props.image}</a>
            </div>
            <button className="close-btn-modal" onClick={props.onClose}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}