import React from "react";
import styled from "styled-components";

const StyledCredit = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 20;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  line-height: 2;
  margin-bottom: 20px;

  a {
    color: #fff;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const Footer = () => {
  return (
    <StyledCredit>
      Images from Unsplash by
      <a
        href="https://unsplash.com/photos/i7viNsvJa2c"
        target="_Blank"
        rel="noreferrer"
      >
        Baghaei photography
      </a>
      <a
        href="https://unsplash.com/photos/FdkF3FKWeK0"
        target="_Blank"
        rel="noreferrer"
      >
        Daniel Kainz
      </a>
      <a
        href="https://unsplash.com/photos/yh2caIMEk0M"
        target="_Blank"
        rel="noreferrer"
      >
        Ehsan Ahmadi
      </a>
      <a
        href="https://unsplash.com/photos/RwHv7LgeC7s"
        target="_Blank"
        rel="noreferrer"
      >
        Johannes Plenio
      </a>
      <a
        href="https://unsplash.com/photos/Ts4d8AvN7K8"
        target="_Blank"
        rel="noreferrer"
      >
        sobhan jood
      </a>
      <a
        href="https://unsplash.com/photos/mYL3OWayfUc"
        target="_Blank"
        rel="noreferrer"
      >
        Klemen Vrankar
      </a>
      <a
        href="https://unsplash.com/photos/JGf0KBPj3x4"
        target="_Blank"
        rel="noreferrer"
      >
        Joshua Fuller
      </a>
      <a
        href="https://unsplash.com/photos/YFFGkE3y4F8"
        target="_Blank"
        rel="noreferrer"
      >
        Tim Stief
      </a>
      <a
        href="https://unsplash.com/photos/-djRG1vB1pw"
        target="_Blank"
        rel="noreferrer"
      >
        Alexandru Zdrobău
      </a>
      <a
        href="https://unsplash.com/photos/laRYhLGlz-Y"
        target="_Blank"
        rel="noreferrer"
      >
        Rafael Mota
      </a>
    </StyledCredit>
  );
};

export default Footer;
