import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

export default function Copyright() {
  return (
    <>
      <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        WonderataX Solutions
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Web Development</FooterLink>
            <FooterLink href="#">AR/VR</FooterLink>
            <FooterLink href="#">Graphic Design</FooterLink>
            <FooterLink href="#">EDTECH</FooterLink>
          </Column>
          <Column>
            <Heading>Legal</Heading>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="Return policy.pdf" target="_blank">Return Policy</FooterLink>
            <FooterLink href="Privacy policy.pdf" target="_blank">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
