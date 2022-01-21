import styled from 'styled-components';

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

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`