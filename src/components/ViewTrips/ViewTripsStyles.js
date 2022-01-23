import styled from 'styled-components';

export const SliderBody = styled.div`
  display: flex;
  margin: 0px 0px 80px 0px;
  padding-top: 0px;
  background-colour: black;
`

export const SliderBox = styled.div`
  margin: 0px 30px -15px 0px;
  width: 330px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const SliderImgBox = styled.div`
  height: 355px;
  position: relative;
`

export const SliderImg = styled.img`
  filter: grayscale(50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
`

export const SliderImgOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;
`

export const DetailsButton = styled.button`
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-color: rgba(255,255,255,0);
  color: rgba(65, 72, 51,0);
  font-weight: 700;
  letter-spacing: 1px;
  font-family: "Space Grotesk";
  border: none;
  border-radius: 20px;
  &:hover {
    background-color: #fff;
    background-color: rgba(255,255,255,0.9);
    color: rgba(65, 72, 51, 0.9);\
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    transition: all ease 0.3s;
  }
`

export const SliderDetailBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  box-sizing: border-box;
  font-family: "Space Grotesk";
`

export const FormTitle = styled.h3`
  font-weight: "bold";
  margin-top: 15px;
  background: linear-gradient(121.57deg, #656d4a 18.77%, #414833 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const FormInput = styled.input`
  font-size: 27px;
  color: #656d4a;
  padding: 10px;
  margin: 10px 10px 10px 0px;
  background: white;
  border-color: #ffe5d9;
  border-radius: 2px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: dashed;
  outline: none;
  ::placeholder {
    color: #84a98c;
`

export const FormTextArea = styled.textarea`
  font-size: 27px;
  color: #656d4a;
  padding: 10px;
  margin: 10px 10px 10px 0px;
  width: 770px;
  height: 55px;
  background: white;
  border-color: #ffe5d9;
  border-width: 2px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: dashed;
  resize: none;
  overflow: hidden;
  outline: none;
  ::placeholder {
    color: #84a98c;
`