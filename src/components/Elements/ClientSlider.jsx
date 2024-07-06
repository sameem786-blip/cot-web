import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/escrowbridge-client.png"
import ClientLogo02 from "../../assets/img/clients/verkpro-client.png";
import ClientLogo03 from "../../assets/img/clients/sindhpolice-client.png";
import ClientLogo04 from "../../assets/img/clients/pepsico-client.png";
export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" style={{width: '70%', height: '120%'}}/>
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" style={{width: '60%', height: '120%'}}/>
        </LogoWrapper>
        {/* <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" style={{width: '40%', height: '100%', marginTop: '5px'}}/>
        </LogoWrapper> */}
        {/* <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" style={{width: '70%', height: '120%'}}/>
        </LogoWrapper> */}
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 50%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
filter: grayscale(50%);
`;