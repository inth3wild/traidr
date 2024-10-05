import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
`;

export const NavMiddle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  min-width: 0;

  @media (max-width: 768px) {
    flex: 2;
    margin-right: 0;
    justify-content: flex-start;
  }
  @media (max-width: 480px) {
    flex: 1;
    margin-right: 0;
    justify-content: flex-start;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  display: flex; /* Ensure icons and input are aligned */
  align-items: center;

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
  }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 14px;
    padding-right: 30px;

    &:focus {
        outline: none;
        border-color: #e04f16;
    }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 10px; /* Align search icon to the right */
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
`;

export const CancelIcon = styled.i`
  position: absolute;
  left: 10px; /* Align cancel icon to the left */
  top: 50%;
  transform: translateY(-50%);
  color: grey;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.3rem;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const BrandLogo = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #d35d2c;
  white-space: nowrap;
  text-decoration: none !important;

  &:hover {
    text-decoration: none !important;
  }
`;

export const NotificationIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa-bell {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const NotificationCount = styled.div`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: rgba(242, 153, 74, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding: 10px;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 0;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  overflow: hidden;
`;

export const DefaultAvatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;

  .fa-user {
    font-size: 20px;
    color: #888;
  }
`;

export const StartSellingButton = styled.button`
  background-color: rgba(224, 79, 22, 1);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  white-space: nowrap;
  text-decoration: none !important;

  &:hover {
    background-color: #ef6820;
    text-decoration: none !important;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 11px;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

/* Dropdown menu styles for user profile */
export const ProfileDropdown = styled.div`
  position: absolute;
  top: 45px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 200px;
  padding: 10px 0;

  @media (max-width: 768px) {
    min-width: 150px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    width: 100%;
  }

  span {
    color: inherit;
  }
`;

export const CartIconContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;
export const CartImage = styled.img`
  height: 100%;
  width: 30px;
`;
export const CartContentsCount = styled.p`
  border: 2px solid white;
  background-color: rgba(242, 153, 74, 1);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 13px;
  position: absolute;
  right: -15px;
  top: -18px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
