import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slides() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,    
      };
    return (
        <Wrapper>
        <Carousel {...settings}>
          <Wrap>
          <a href="img1"><img src="cv/src/assets/showcase/img2.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img2"><img src="cv/src/assets/showcase/img3.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img3"><img src="cv/src/assets/showcase/img4.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img4"><img src="cv/src/assets/showcase/img5.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img5"><img src="cv/src/assets/showcase/img6.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img6"><img src="cv/src/assets/showcase/img7.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img7"><img src="cv/src/assets/showcase/img8.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img8"><img src="cv/src/assets/showcase/img9.jpg" alt="" /></a>
          </Wrap>
          <Wrap>
            <a href="img9"><img src="cv/src/assets/showcase/img10.jpg" alt="" /></a>
          </Wrap>
        </Carousel>
      </Wrapper>
    )
}

export default Slides

const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  justify-content: center;    
`;

const Carousel = styled(Slider)`
  width: 70vw;
  ul li button {
    &:before {
      margin-top: 10px;
      font-size: 8px;
      color: rgb(50, 58, 71);
    }
  }
  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  .slick-dots li {
    @media (max-width: 750px) {
      width: 10px;
      height: 10px;
    }
  }

  @media (min-width: 1920px) {
    width: 50vw;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translateX(-45%);
  border: none;
  outline: none;
  img {
    border-radius: 8px;
    width: 90%;    
    height: 35vh;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 25%) 0px 26px 30px -10px,
      rgb(0 0 0 / 50%) 0px 16px 10px -10px;
    transition-duration: 300ms;
  }
`;
