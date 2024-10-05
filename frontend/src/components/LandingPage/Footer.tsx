import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa';
import {
  FooterContact,
  FooterContainer,
  FooterInnerContainer,
  FooterInfo,
  FooterLinks,
  FooterLogo,
  FooterDescription,
  ContactItem,
  LinksGroup,
  FooterBottom,
  FooterBottomLinks,
  FooterBottomText,
} from './StyledFooter';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterInfo>
          <FooterLogo>Traidr</FooterLogo>
          <FooterDescription>
            We are a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat...{' '}
            <Link to="#">Read More</Link>
          </FooterDescription>
        </FooterInfo>

        <FooterContact>
          <ContactItem>
            <FaPhone /> <span>Tel 310-437-2766</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> <span>Mail unreal@outlook.com</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />{' '}
            <span>Address 706 Campfire Ave. Meriden, CT 06450</span>
          </ContactItem>
          <ContactItem>
            <FaFax /> <span>Fax +1-000-0000</span>
          </ContactItem>
        </FooterContact>

        <FooterLinks>
          <LinksGroup>
            <h4>About</h4>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Jobs</Link>
              </li>
              <li>
                <Link to="#">In Press</Link>
              </li>
            </ul>
          </LinksGroup>
          <LinksGroup>
            <h4>Support</h4>
            <ul>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Online Chat</Link>
              </li>
              <li>
                <Link to="#">WhatsApp</Link>
              </li>
              <li>
                <Link to="#">Telegram</Link>
              </li>
              <li>
                <Link to="#">Ticketing</Link>
              </li>
            </ul>
          </LinksGroup>
          <LinksGroup>
            <h4>FAQ</h4>
            <ul>
              <li>
                <Link to="#">Account</Link>
              </li>
              <li>
                <Link to="#">Manage Deliveries</Link>
              </li>
              <li>
                <Link to="#">Orders</Link>
              </li>
              <li>
                <Link to="#">Payments</Link>
              </li>
              <li>
                <Link to="#">Returns</Link>
              </li>
            </ul>
          </LinksGroup>
        </FooterLinks>
      </FooterInnerContainer>

      <FooterBottom>
        <FooterBottomLinks>
          <Link to="#">About us</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Privacy policy</Link>
          <Link to="#">Sitemap</Link>
          <Link to="#">Terms of Use</Link>
        </FooterBottomLinks>
        <FooterBottomText>
          &copy; 2000-2024, All Rights Reserved
        </FooterBottomText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
