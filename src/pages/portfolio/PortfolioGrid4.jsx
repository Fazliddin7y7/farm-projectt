import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";


//images 
import BackgroundImg from "./portfolio4Png/background.png"

import Portfolio1 from "./portfolio2Png/handpotato.png";
import Portfolio2 from "./portfolio2Png/smartperson.png";
import Portfolio3 from "./portfolio2Png/potato.png";
import Portfolio4 from "./portfolio2Png/giyohlar.png";
import Portfolio5 from "./portfolio2Png/traktor.png";
import Portfolio6 from "./portfolio2Png/yaxhiqchiopa.png";
import Portfolio7 from "./portfolio2Png/qovun.png";
import Portfolio8 from "./portfolio2Png/suvchiopa.png";


const PortfolioCtn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding-top: 80px;
`;

/* ===== BANNER SECTION ===== */
const Banner = styled.div`
  width: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  
  span {
    color: #ddd;
  }
  
  .active {
    color: #4CAF50;
    font-weight: 600;
  }
`;

const ImgCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px;
  
  @media (max-width: 1200px) {
    padding: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 15px;
  }


`;

const ImgCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
    }
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    
    img {
      height: 280px;
    }
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    
    img {
      height: 260px;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    
    img {
      height: 220px;
    }
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 500px;
    
    img {
      height: 250px;
    }
  }
`;

const Row = styled.div`
  display: contents;
  
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default function PortfolioGrid4() {
    return (
        <>
       <Header />

       <PortfolioCtn>
       <Banner>
          <img src={BackgroundImg} alt="Portfolio Background" />
          <BannerOverlay>
            <BannerTitle>Portfolio Grid Col 4</BannerTitle>
            <Breadcrumb>
              <span>AGENSO</span>
              <span>›</span>
              <span className="active">PORTFOLIO GIRD COL 4</span>
            </Breadcrumb>
          </BannerOverlay>
        </Banner>

        <ImgCtn>
          {/* Birinchi qator - 4 ta rasm */}
          <ImgCard>
            <img src={Portfolio1} alt="Portfolio 1" />
            <img src={Portfolio2} alt="Portfolio 2" />
            <img src={Portfolio3} alt="Portfolio 3" />
            <img src={Portfolio4} alt="Portfolio 4" />
          </ImgCard>

          {/* Ikkinchi qator - 4 ta rasm */}
          <ImgCard>
            <img src={Portfolio5} alt="Portfolio 5" />
            <img src={Portfolio6} alt="Portfolio 6" />
            <img src={Portfolio7} alt="Portfolio 7" />
            <img src={Portfolio8} alt="Portfolio 8" />
          </ImgCard>
        </ImgCtn>

       </PortfolioCtn>

       <Footer />
        </>
    )
}