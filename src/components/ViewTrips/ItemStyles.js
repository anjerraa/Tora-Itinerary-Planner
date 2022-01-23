import styled from 'styled-components'

export const ItemInputRow = styled.div`
  padding: 10px 0px 10px 10px;
  margin-left: 30px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: dashed;
  border-width: 2px;
  border-color: rgba(65, 72, 51, 0.5);
  outline: none;
  width: 340px;
  background: transparent;
  color: #414833;
`

export const ItemInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: #414833;
  font-size: 20px;
  &::placeholder {
    opacity: 0.2;
  }
`

export const AddItemButton = styled.button`
  margin-left: 52px;
  border: none;
  margin: none;
  color: #718355;
  background-color: transparent;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all ease 0.5s;
  }
`

export const ItemRow = styled.div`
  display: flex;
  font-size: 20px;
  color: #cb997e;
  width: 340px;
  height: 30px;
  margin: 30px;
  padding-left: 10px;
  padding-bottom: 35px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: solid;
  border-color: rgba(254, 197, 187, 0.5);
`

export const ItemButtons = styled.div`
  margin-left: auto;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: all ease 0.5s;
  }
`