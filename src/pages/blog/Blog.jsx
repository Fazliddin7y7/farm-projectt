import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import HeroImg from "../blog/blogPng/BgImg.jpg";
import Footer from "../../components/Footer";

// images for cards
import WhatTechnology from "../home/home3Png/whatTechnology.png";
import WhichType from "../home/home3Png/whichType.png";
import TheFarmer from "../home/home3Png/theFarmer.png";
import StepHen from "../blog/blogPng/Bogbon.jpg";
import FarmingSectionImg from "../blog/blogPng/Vegetables.jpg";
import VegHero from "../blog/blogPng/KoreanGirl.jpg";
import Kiwi2 from "../blog/blogPng/Bogbon2.jpg";
import Banana from "../blog/blogPng/Dala.jpg";
import Orange from "../blog/blogPng/OrangeGirl.jpg";
import TelIcon from "../../pages/home/home3Png/telephoneIcon.png";
import MailIcon from "../../pages/home/home3Png/messageIcon.png";

/* ===== MAIN CONTAINER ===== */
const BlogCtn = styled.div`
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
  max-width: 1200px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ===== FILTER BUTTONS ===== */
const FiltersRow = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 30px;
  }
`;

const FilterButton = styled.button`
  background: ${props => (props.active ? "#2f4b2d" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#2f4b2d")};
  border: 1px solid rgba(47, 75, 45, 0.12);
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => (props.active ? "#2f4b2d" : "#f0f0f0")};
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

/* ===== POSTS GRID ===== */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Card = styled.article`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Badge = styled.span`
  position: absolute;
  left: 15px;
  top: 15px;
  background: rgba(255, 255, 255, 0.95);
  color: #2f4b2d;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const RoundAction = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #45a049;
  }
`;

const CardContent = styled.div`
  padding: 25px;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 15px;
  color: #6b756b;
  font-size: 14px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: #122116;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

/* ===== FOOTER YELLOW SECTION ===== */
const FooterYellowWrapper = styled.footer`
  width: 100%;
  background: #e9df59;
  padding: 25px 0;
  margin-top: 60px;
`;

const FooterYellowContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
  color: rgba(55, 71, 54, 0.9);
  font-weight: 600;
  font-size: 14px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;

const NavItem = styled.span`
  &:nth-child(odd) {
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2f4b2d;
    }
  }
`;

const ContactGroup = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: rgba(55, 71, 54, 0.9);
  font-weight: 500;
  font-size: 14px;
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ContactText = styled.div`
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function Blog() {
    const posts = [
        { image: WhatTechnology, tag: "FOOD CROPS", date: "March 28, 2024", title: "What technology is used in vertical farming?" },
        { image: WhichType, tag: "ORGANIC FARM", date: "March 28, 2024", title: "Which type of farming is more prevalent today?" },
        { image: TheFarmer, tag: "FARMING TIPS", date: "March 28, 2024", title: "The Farmers Sentiment Darkens Hopes Fade" },
        { image: StepHen, tag: "MIXED FARMING", date: "March 28, 2024", title: "A farmer is a person who works in agriculture." },
        { image: FarmingSectionImg, tag: "AGRICULTURE", date: "March 28, 2024", title: "Organic Fruits: Hidden Advantages And Information" },
        { image: VegHero, tag: "EXTENSIVE", date: "March 28, 2024", title: "How to Include Organic Vegetables in Your Diet" },
        { image: Kiwi2, tag: "FARMING TIPS", date: "March 28, 2024", title: "Agricultural Infrastructure in Rural Areas" },
        { image: Banana, tag: "FOOD CROPS", date: "March 28, 2024", title: "Are You Prepared for the Upcoming Season?" },
        { image: Orange, tag: "MIXED FARMING", date: "March 28, 2024", title: "A Beginner's Guide for Managing a Successful Farm" },
    ];

    return (
        <>
            <Header />
            <BlogCtn>
                {/* Banner Section */}
                <Banner>
                    <img src={HeroImg} alt="Blog Background" />
                    <BannerOverlay>
                        <BannerTitle>Blog Sortable Col 3</BannerTitle>
                        <Breadcrumb>
                            <span>AGRIMO</span>
                            <span>›</span>
                            <span className="active">BLOG SORTABLE COL 3</span>
                        </Breadcrumb>
                    </BannerOverlay>
                </Banner>

                <ContentWrapper>
                    {/* Filter Buttons */}
                    <FiltersRow>
                        <FilterButton active>All</FilterButton>
                        <FilterButton>Agriculture</FilterButton>
                        <FilterButton>Extensive</FilterButton>
                        <FilterButton>Farming Tips</FilterButton>
                        <FilterButton>Food Crops</FilterButton>
                        <FilterButton>Mixed Farming</FilterButton>
                        <FilterButton>Organic Farm</FilterButton>
                    </FiltersRow>

                    {/* Posts Grid */}
                    <Grid>
                        {posts.map((post, index) => (
                            <Card key={index}>
                                <ImageWrap>
                                    <CardImg src={post.image} alt={post.title} />
                                    <Badge>{post.tag}</Badge>
                                    <RoundAction>↗</RoundAction>
                                </ImageWrap>
                                <CardContent>
                                    <MetaRow>
                                        <MetaItem>📅 {post.date}</MetaItem>
                                        <MetaItem>👤 Admin</MetaItem>
                                    </MetaRow>
                                    <CardTitle>{post.title}</CardTitle>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </ContentWrapper>

                {/* Yellow Footer Section */}
                <FooterYellowWrapper>
                    <FooterYellowContainer>
                        <FooterNav>
                            <NavItem>FARMERS</NavItem>
                            <NavItem>•</NavItem>
                            <NavItem>ORGANIC</NavItem>
                            <NavItem>•</NavItem>
                            <NavItem>FOODS</NavItem>
                            <NavItem>•</NavItem>
                            <NavItem>PRODUCT</NavItem>
                        </FooterNav>

                        <ContactGroup>
                            <ContactItem>
                                <IconCircle>
                                    <img src={TelIcon} alt="phone" />
                                </IconCircle>
                                <ContactText>+1(212) 255-511</ContactText>
                            </ContactItem>

                            <ContactItem>
                                <IconCircle>
                                    <img src={MailIcon} alt="mail" />
                                </IconCircle>
                                <ContactText>noreply@pbminfotech.com</ContactText>
                            </ContactItem>
                        </ContactGroup>
                    </FooterYellowContainer>
                </FooterYellowWrapper>
            </BlogCtn>
            <Footer />
        </>
    );
}