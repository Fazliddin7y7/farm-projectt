import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images - o'zingizning fayllaringiz bilan almashtiring
import BackgroundImg from "./portfolio3Png/background.png";
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

/* ===== MAIN CONTENT ===== */
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 60px 20px;
`;

/* ===== HEADER SECTION ===== */
const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PageTitle = styled.h2`
  font-size: 32px;
  color: #2d5a27;
  margin-bottom: 10px;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const BrandName = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PortfolioTags = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const PortfolioTag = styled.span`
  padding: 6px 20px;
  background: #e8f5e9;
  color: #4CAF50;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #4CAF50;
    color: white;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px auto;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/* ===== PORTFOLIO GRID - 3 COLUMNS ===== */
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 500px;
    margin: 0 auto 50px auto;
  }
`;

const PortfolioItem = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const PortfolioImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    height: 220px;
  }
`;

const PortfolioContent = styled.div`
  padding: 25px;
`;

const PortfolioCategory = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PortfolioTitle = styled.h3`
  font-size: 20px;
  color: #2d5a27;
  margin-bottom: 15px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PortfolioExcerpt = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const PortfolioMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 13px;
  color: #888;
  
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

/* ===== FOOTER LINKS ===== */
const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 40px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const LinksColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const ColumnTitle = styled.h4`
  font-size: 16px;
  color: #2d5a27;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4CAF50;
    }
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
`;

/* ===== BOTTOM BAR ===== */
const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #eee;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TermsLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #666;
  
  a {
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4CAF50;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #666;
`;

export default function PortfolioGrid3() {
  const portfolioItems = [
    {
      id: 1,
      image: Portfolio1,
      title: "AGENSO",
      category: "PROFESSOR",
      excerpt: "Professional & modern, a theme designed to help your business stand out from the rest.",
      meta: "DIRIGENCE | FORTING | PROJECT"
    },
    {
      id: 2,
      image: Portfolio2,
      title: "Portfolio Item 2",
      category: "CATEGORY",
      excerpt: "Modern agricultural solutions for sustainable farming practices and increased productivity.",
      meta: "META 1 | META 2 | META 3"
    },
    {
      id: 3,
      image: Portfolio3,
      title: "Portfolio Item 3",
      category: "CATEGORY",
      excerpt: "Advanced greenhouse management system for optimal plant growth and climate control.",
      meta: "META 1 | META 2"
    },
    {
      id: 4,
      image: Portfolio4,
      title: "Portfolio Item 4",
      category: "CATEGORY",
      excerpt: "Sustainable organic farming project with modern technology and traditional methods.",
      meta: "ORGANIC | SUSTAINABLE"
    },
    {
      id: 5,
      image: Portfolio5,
      title: "Portfolio Item 5",
      category: "CATEGORY",
      excerpt: "Modern tractor technology for efficient farming operations and increased productivity.",
      meta: "TECHNOLOGY | EFFICIENCY"
    },
    {
      id: 6,
      image: Portfolio6,
      title: "Portfolio Item 6",
      category: "CATEGORY",
      excerpt: "Irrigation systems for optimal water usage in agricultural fields and greenhouses.",
      meta: "IRRIGATION | WATER"
    }
  ];

  return (
    <>
      <Header />
      <PortfolioCtn>
        {/* Banner Section */}
        <Banner>
          <img src={BackgroundImg} alt="Portfolio Background" />
          <BannerOverlay>
            <BannerTitle>Portfolio Grid Col 3</BannerTitle>
            <Breadcrumb>
              <span>AGENSO</span>
              <span>›</span>
              <span className="active">PORTFOLIO GIRD COL 1</span>
            </Breadcrumb>
          </BannerOverlay>
        </Banner>

        <ContentWrapper>
          {/* Header Section */}
          <HeaderSection>
            <PageTitle>Portfolio Grid Col 3</PageTitle>
            <BrandName>AGENSO | PORTFOLIO GIRD COL 1</BrandName>
            
            <PortfolioTags>
              <PortfolioTag>PROFESSOR</PortfolioTag>
              <PortfolioTag>DIRIGENCE</PortfolioTag>
              <PortfolioTag>FORTING</PortfolioTag>
              <PortfolioTag>PROJECT</PortfolioTag>
            </PortfolioTags>
            
            <Description>
              Professional & modern, a theme designed to help your business stand out from the rest.
            </Description>
          </HeaderSection>

          {/* Portfolio Grid - 3 Columns */}
          <PortfolioGrid>
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.id}>
                <PortfolioImage>
                  <img src={item.image} alt={item.title} />
                </PortfolioImage>
                <PortfolioContent>
                  <PortfolioCategory>{item.category}</PortfolioCategory>
                  <PortfolioTitle>{item.title}</PortfolioTitle>
                  <PortfolioExcerpt>{item.excerpt}</PortfolioExcerpt>
                  <PortfolioMeta>
                    <span>{item.meta}</span>
                  </PortfolioMeta>
                </PortfolioContent>
              </PortfolioItem>
            ))}
          </PortfolioGrid>

          {/* Footer Links Section */}
          <FooterLinks>
            <LinksColumn>
              <ColumnTitle>Useful Link</ColumnTitle>
              <LinkList>
                <LinkItem><a href="#">Company</a></LinkItem>
                <LinkItem><a href="#">About</a></LinkItem>
                <LinkItem><a href="#">Contact</a></LinkItem>
              </LinkList>
            </LinksColumn>
            
            <LinksColumn>
              <ColumnTitle>Working Time</ColumnTitle>
              <InfoText>Mon. Fri. 9:00am - 5:00pm</InfoText>
              <InfoText>Saturday: 10:00am - 6:00pm</InfoText>
              <InfoText>Sunday Closed</InfoText>
            </LinksColumn>
            
            <LinksColumn>
              <ColumnTitle>Our Address</ColumnTitle>
              <InfoText>09/November 256, New York</InfoText>
              <InfoText>11201, United States</InfoText>
            </LinksColumn>
          </FooterLinks>

          {/* Bottom Bar */}
          <BottomBar>
            <TermsLinks>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </TermsLinks>
            
            <Copyright>
              Copyright © 2024 Agrimo, All Rights Reserved.
            </Copyright>
          </BottomBar>
        </ContentWrapper>
      </PortfolioCtn>
      <Footer />
    </>
  );
}