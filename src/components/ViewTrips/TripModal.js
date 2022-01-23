import React, { useState } from 'react';
import ReactDom from  'react-dom';
import { Modal, ModalOverlay, ModalButton, ModalFirstSection, ModalTitle, ModalSecondSection, ModalThirdSection } from './TripModalStyles';
import { IoCloseSharp } from 'react-icons/io5';
import { RiSunFill } from 'react-icons/ri';
import { FaSuitcase, FaBookmark }  from 'react-icons/fa';
import ItemList from './ItemList';

export default function TripModal({ open, children, onClose }) {
  
  // If modal is not open just return null.
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ModalOverlay>
        <Modal>
          <ModalButton onClick={onClose}><IoCloseSharp size={'3rem'}/></ModalButton>
          <ModalFirstSection>
              <ModalTitle>Packing List</ModalTitle>
              <ItemList></ItemList>
          </ModalFirstSection>
          <ModalSecondSection>
            <ModalTitle>Places</ModalTitle>
            <ItemList></ItemList>
          </ModalSecondSection>
          <ModalThirdSection>
            <ModalTitle>Activities</ModalTitle>
            <ItemList></ItemList>
          </ModalThirdSection>
          
        </Modal>
      </ModalOverlay>
    </>,
    document.getElementById('modal-root')
  )
}