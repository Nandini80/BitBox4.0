import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: #151414;
  color: #fff;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterWidget = styled.div`
  flex: 1 1 300px;
  margin-bottom: 30px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 2px;
      width: 50px;
      background: #ff5e14;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: #878787;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #ff5e14;
        }
      }
    }
  }
`;

const SubscribeForm = styled.form`
  margin-bottom: 30px;

  p {
    margin-bottom: 15px;
  }

  input[type='text'] {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  button[type='submit'] {
    background-color: #ff5e14;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff753e;
    }

    i {
      margin-right: 5px;
    }
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5e14;
  }

  i {
    margin-right: 5px;
  }
`;

const Footer = () => {
  return (
    <FooterSection className="footer-section">
      <Container className="container">
        <FooterContent className="footer-content">
          <FooterWidget style={{marginLeft:"10rem"}}>
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </FooterWidget>
          <FooterWidget>
            <h3>Subscribe</h3>
            <SubscribeForm style={{marginTop:"1rem"}}>
              <p >Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              <input type="text" placeholder="Email Address" />
              <button type="submit"><i className="fab fa-telegram-plane"></i>Subscribe</button>
            </SubscribeForm>
          </FooterWidget>
          <FooterWidget style={{ marginLeft: '7rem' }}>
            <h3>Follow Us</h3>
            <div>
              <SocialLink href="#" style={{marginTop:"0.5rem"}}><i className="fab fa-facebook-f"></i>Facebook</SocialLink><br />
              <SocialLink href="#" style={{marginTop:"0.5rem"}}><i className="fab fa-twitter"></i>Twitter</SocialLink><br />
              <SocialLink href="#" style={{marginTop:"0.5rem"}}><i className="fab fa-instagram"></i>Instagram</SocialLink><br />
              <SocialLink href="#" style={{marginTop:"0.5rem"}}><i className="fab fa-linkedin-in"></i>LinkedIn</SocialLink>
            </div>
          </FooterWidget>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
