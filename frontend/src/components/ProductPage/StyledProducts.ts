import styled from 'styled-components';

import { IoMdNotificationsOutline } from 'react-icons/io';

export const Nav = styled.nav`
  margin-left: 80px;
  margin-right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
// export const SortByButton = styled.button``
export const StyledIoMdNotificationsOutline = styled(IoMdNotificationsOutline)`
  height: 30px;
`

export const StyledButton = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const Btn = styled.a`
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #e04f16;
    text-decoration: none;
    padding: 5px 10px;
`
export const MainDiv = styled.div`
  gap: 100px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: center;
`

export const StyleCategories = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  //box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 800px;
  width: 200px;

  h2 {
           padding: 10px;
          margin: 5px 0;
    
    font-family: 'Outfit', sans-serif;
  }

  h4 {
          padding: 10px;
          margin: 5px 0;
      
          
    font-family: 'Outfit', sans-serif;

  }

  label {
          margin: 5px 0;
      
      font-family: 'Outfit', sans-serif;
  }

  div {
    margin-bottom: 10px;
  }

  input[type='checkbox'] {
    margin-right: 8px;
  }
`
export const ColorOption = styled.div`
  input[type="radio"]:checked + label {
    color: ${(props) => props.color};
  }
`;


export const Holder = styled.div`
  width: 60%;
`

export const Catediv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`
export const MaxOut = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-right: 100px;
`
export const StyledInput = styled.input`
  height: 30px;
  width: 60%;
`

export const TwinsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`
export const Field = styled.fieldset`
  margin-top: 50px;
  border: none;
`
export const SidebarTitle = styled.h2`
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
`

export const SidebarItems = styled.div`
  margin-top: 20px;
`

export const SidebarLabelContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 6.4px;
    left: 6.4px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: white;
  }
`

export const Line = styled.hr`
  margin-top: 3rem;
  border-color: #f7f7f7;
`

export const SimpleB = styled.div`
border: 2px solid ;
width: 300px;
height: 400px;
`

export const ColoredDiv = styled.div`
    background-color: #e04f16;
    display: flex;
    padding-left: 10px;
`
 
export const StyleDark = styled.p`
color: black;
`
 
export const StylendAtag = styled.a`
display: flex;
gap: 20px;
`

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
