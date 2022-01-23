import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  height: 600px;
  width: 1400px;
  border-radius: 20px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.07);
  zIndex: 1000;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.4);
  zIndex: 1000;
`

export const ModalButton = styled.button`
  position: absolute; 
  top: 0; 
  right: 0;
  margin: 15px 15px 0px 0px;
  border: none;
  color: #718355;
  background-color: transparent;
  &:hover {
    transform: scale(1.15);
    cursor: pointer;
    transition: all ease 0.5s;
  }
`

export const ModalFirstSection = styled.div`
  width: 415px;
  height: 540px;
  margin: 30px;
  border-style: dotted;
  border-width: medium;
  border-color: #fff0f3;
  border-radius: 20px;
`

export const ModalSecondSection = styled.div`
  width: 415px;
  height: 540px;
  margin: 30px 30px 30px 0px;
  border-style: dotted;
  border-width: medium;
  border-color: #fff0f3;
  border-radius: 20px;
`

export const ModalThirdSection = styled.div`
  width: 415px;
  height: 540px;
  margin: 30px 30px 30px 0px;
  border-style: dotted;
  border-width: medium;
  border-color: #fff0f3;
  border-radius: 20px;
`

export const ModalTitle = styled.h1`
  color: #656D4A;
  text-align: center;
`