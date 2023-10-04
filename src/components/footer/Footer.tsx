import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './style.scss';

type Props = {
  data: any
}

const Footer: React.FC<Props> = ({data}) => {
  const aboutUs = `${data?.name || ''} - ${data?.address || ''} - ${data?.email || ''} - ${data?.phone || ""} - ${data?.phone_wa || ''}`
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">About Us</li>
        </ul>
        <div className="infoText">
          {aboutUs}
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
