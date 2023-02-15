import React from 'react';
import PropTypes from 'prop-types';
import { ModalBackdrop, ModalContent, ModalImg, Icon } from './Modal.module';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>
          <ModalImg src={this.props.imgUrl} alt="" />
          <Icon
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => this.props.onClose()}
          ></Icon>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
