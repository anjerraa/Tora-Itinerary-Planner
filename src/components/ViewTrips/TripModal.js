import React from 'react';
import ReactDom from  'react-dom';
import { Modal, ModalOverlay, ModalButton, ModalLeftSection } from './TripModalStyles';
import { IoCloseSharp }  from 'react-icons/io5';

export default function TripModal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ModalOverlay>
        <Modal>
          <ModalButton onClick={onClose}><IoCloseSharp size={'3rem'}/></ModalButton>
          <ModalLeftSection> </ModalLeftSection>
        </Modal>
      </ModalOverlay>
    </>,
    document.getElementById('modal-root')
  )
}