import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import HeroImg from "../blog/blogPng/BgImg.jpg";
import Footer from "../../components/Footer";

// images for cards (reused from home3Png)
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

const HeroSection = styled.section`
    width: 100%;
    height: 300px;
    border-radius: 30px;
    /* overflow: hidden; */
    position: relative;
    margin-bottom: 40px;
`;

const HeroBg = styled.div`
    width:1500px;
    height:500px;
    margin-left:15px;;
    margin-top: 5px;
    border-radius:30px;
    background-color: #f5f5f5;
    position: absolute;
    inset: 0;
    background-image: url(${HeroImg});
    background-size: cover;
    background-position: center;
    
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    /* margin-top: 100px;; */
    height: 100%;
    margin-bottom:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 24px;
    color: white;
`;

const Breadcrumb = styled.div`
    font-size: 13px;
   
    color: rgba(255,255,255,0.85);
    font-family: "Signika", sans-serif;
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: 0.6px;
`;

const PageTitle = styled.h1`
    font-family: "Signika", sans-serif;
    font-size: 48px;
     margin-top:250px;
    font-weight:500;
    margin-bottom:10px;
    color: #fff;
`;

export default function Blog() {
    return (
        <>
            <Header  />

            <HeroSection>
                <HeroBg />
                <HeroContent>
                      <PageTitle>Blog Sortable Col 3</PageTitle>
                    <Breadcrumb>AGRIMO &nbsp;&gt;&nbsp; BLOG SORTABLE COL 3</Breadcrumb>
                  
                </HeroContent>
            </HeroSection>

                        {/* Sektsiya: keyingi kontent — post grid (3 column) */}
                        <PostsSection>
                            <FiltersRow>
                                <FilterButton active>All</FilterButton>
                                <FilterButton>Agriculture</FilterButton>
                                <FilterButton>Extensive</FilterButton>
                                <FilterButton>Farming Tips</FilterButton>
                                <FilterButton>Food Crops</FilterButton>
                                <FilterButton>Mixed Farming</FilterButton>
                                <FilterButton>Organic Farm</FilterButton>
                            </FiltersRow>

                            <Grid>
                                {posts.map((p, i) => (
                                    <Card key={i}>
                                        <ImageWrap>
                                            <CardImg src={p.image} alt={p.title} />
                                            <Badge>{p.tag}</Badge>
                                            <RoundAction>↗</RoundAction>
                                        </ImageWrap>

                                        <MetaRow>
                                            <MetaItem>📅 {p.date}</MetaItem>
                                            <MetaItem>👤 Admin</MetaItem>
                                        </MetaRow>

                                        <CardTitle>{p.title}</CardTitle>
                                    </Card>
                                ))}
                            </Grid>

                              
                        </PostsSection>
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
                                            <img src={TelIcon} alt="phone" style={{width:18}} />
                                          </IconCircle>
                                          <ContactText>+1(212) 255-511</ContactText>
                                        </ContactItem>
                            
                                        <ContactItem>
                                          <IconCircle>
                                            <img src={MailIcon} alt="mail" style={{width:18}} />
                                          </IconCircle>
                                          <ContactText>noreply@pbminfotech.com</ContactText>
                                        </ContactItem>
                                      </ContactGroup>
                                    </FooterYellowContainer>
                                  </FooterYellowWrapper>

            <Footer />
        </>
    );
}

/* ===== Posts grid styles ===== */
const PostsSection = styled.section`
    max-width: 1200px;
    margin-top:300px;
    margin-left:170px;
    padding: 0 16px;
`;


const FooterYellowWrapper = styled.footer`
  width: 100%;
  background: #e9df59;
  padding: 16px 0;
  margin-top: 100px;
`;


const ContactText = styled.div``;
const FooterYellowContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 18px;
  margin-left:190px;
  align-items: center;
  color: rgba(55,71,54,0.9);
  font-weight: 600;
  font-size: 13px;
`;

const NavItem = styled.span``;

const ContactGroup = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  margin-right:120px;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: rgba(55,71,54,0.9);
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
`;

const FiltersRow = styled.div`
    display: flex;
    gap: 18px;
    margin-bottom: 24px;
    align-items: center;
    flex-wrap: wrap;
`;

const FilterButton = styled.button`
    background: ${props => (props.active ? "#2f4b2d" : "transparent")};
    color: ${props => (props.active ? "#fff" : "#2f4b2d")};
    border: 1px solid rgba(47,75,45,0.12);
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
`;

const Card = styled.article`
    background: transparent;
`;

const ImageWrap = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 18px;
    overflow: hidden;
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Badge = styled.span`
    position: absolute;
    left: 14px;
    top: 14px;
    background: rgba(255,255,255,0.9);
    color: #2f4b2d;
    font-family:"Signika", sans-serif;
    padding: 6px 10px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 12px;
`;

const RoundAction = styled.div`
    position: absolute;
    right: 14px;
    bottom: 14px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f0d14b;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    font-weight: 700;
`;

const MetaRow = styled.div`
    display: flex;
    gap: 12px;
    color: #6b756b;
    font-size: 13px;
    margin-top: 12px;
`;

const MetaItem = styled.div``;

const CardTitle = styled.h3`
    font-size: 20px;
    color: #122116;
    font-family: "Signika", sans-serif;
    margin-top: 10px;
    font-weight: 500;
`;

/* sample posts data */
const posts = [
    { image: WhatTechnology, tag: "FOOD CROPS", date: "March 28, 2024", title: "What technology is used in vertical farming?" },
    { image: WhichType, tag: "ORGANIC FARM", date: "March 28, 2024", title: "Which type of farming is more prevalent today?" },
    { image: TheFarmer, tag: "FARMING TIPS", date: "March 28, 2024", title: "The Farmers Sentiment Darkens Hopes Fade" },
    { image: StepHen, tag: "MIXED FARMING", date: "March 28, 2024", title: "A farmer is a person who works in agriculture." },
    { image: FarmingSectionImg, tag: "AGRICULTURE", date: "March 28, 2024", title: "Organic Fruits: Hidden Advantages And Information" },
    { image: VegHero, tag: "EXTENSIVE", date: "March 28, 2024", title: "How to Include Organic Vegetables in Your Diet" },
    { image: Kiwi2, tag: "FARMING TIPS", date: "March 28, 2024", title: "Agricultural Infrastructure in Rural Areas" },
    { image: Banana, tag: "FOOD CROPS", date: "March 28, 2024", title: "Are You Prepared for the Upcoming Season?" },
    { image: Orange, tag: "MIXED FARMING", date: "March 28, 2024", title: "A Beginner’s Guide for Managing a Successful Farm" },
];