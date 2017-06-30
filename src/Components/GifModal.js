import React, { Component } from 'react';
import Modal from 'react-modal';

const GifModal = props => {
  // Ocassionally want props.selectedGif to be null
  if (!props.selectedGif) {
    return <div />;
  }
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
    >
      <div className="gif-modal">
        <img src={props.selectedGif.images.original.url} />
        <p>
          <strong>Source:</strong>{' '}
          <a href={props.selectedGif.source}>{props.selectedGif.source}</a>
        </p>
        <p><strong>Rating:</strong> {props.selectedGif.rating}</p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
