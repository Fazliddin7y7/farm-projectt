import React from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import Footer from "../../components/Footer";

import BgImage from "../../pages/home/home3Png/BgImageMain.png";
import BgImage2 from "../../pages/home/home3Png/background.png";
import FlyImg from "../../pages/home/headerPng/Fly.png";
import Sectin from "../../pages/home/home3Png/Section.png";
import WhatTechnology from "../../pages/home/home3Png/whatTechnology.png";
import Corn from "../../pages/home/home3Png/corn.png";
import Tomato from "../../pages/home/home3Png/tomato.png";
import WhichType from "../../pages/home/home3Png/whichType.png";
import Cabbage from "../../pages/home/home3Png/cabbage.png";
import StarRate from "../../pages/home/home3Png/StarRate.png";
import Kiwi from "../../pages/home/home3Png/kiwi.png";
import FarmingSectionImg from "../../pages/home/home3Png/FarmingImagee.png";
import List from "../../pages/home/home3Png/List.png";
import List2 from "../../pages/home/home3Png/List2.png";
import StepHen from "../../pages/home/home3Png/stepHen.png";
import OurPr from "../../pages/home/home3Png/OurProducts.png";
import NewBg2 from "../../pages/home/home3Png/NewBg2.png";
import Carrot from "../../pages/home/home3Png/carrot.png";
import Kiwi2 from "../../pages/home/home3Png/Kiwi2.png";
import PurpleCabbage from "../../pages/home/home3Png/purpleCabbage.png";
import Brinjal from "../../pages/home/home3Png/brinjal.png";
import Banana from "../../pages/home/home3Png/banana.png";
import Orange from "../../pages/home/home3Png/orange.png";
import Watermelon from "../../pages/home/home3Png/watermelon.png";
import OrganicRiceIcon from "../../pages/home/home3Png/organicRiceIcon.png";
import FarmIcon from "../../pages/home/home3Png/farmIcon.png";
import FarmFreshIcon from "../../pages/home/home3Png/freshFarmIcon.png";
import FoodIcon from "../../pages/home/home3Png/foodIcon.png";
import EcoProduct from "../../pages/home/home3Png/ecoProduct.png";
import TractorIcon from "../../pages/home/home3Png/traktorIcon.png";
import VegHero from "../../pages/home/home3Png/vegetables.png";
import TelIcon from "../../pages/home/home3Png/telephoneIcon.png";
import MailIcon from "../../pages/home/home3Png/messageIcon.png";
import TheFarmer from "../../pages/home/home3Png/theFarmer.png";

const BigContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(248, 247, 240, 1);
  overflow-x: hidden;
`;

const HeaderWrapper = styled.header`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const MainContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 630px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 1200px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    padding: 0 10px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
  }
`;

const ForBg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 1500px;
  height: 630px;
  border-radius: 30px;
  position: absolute;
  background-color: rgba(91, 140, 81, 1);
  left: 0;
  
  @media (max-width: 1200px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
    border-radius: 20px;
  }
  
  @media (max-width: 576px) {
    height: 350px;
    border-radius: 15px;
  }
`;

const ForBg2 = styled.img`
  margin-top: 20px;
  width: 48%;
  height: 630px;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  
  @media (max-width: 1200px) {
    height: 500px;
    width: 45%;
  }
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const ForBg4 = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 1500px;
  height: 800px;
  border-radius: 30px;
  position: absolute;
  background-color: rgba(237, 221, 94, 1);
  left: 0;
  
  @media (max-width: 1200px) {
    height: 700px;
  }
  
  @media (max-width: 768px) {
    height: 600px;
    border-radius: 20px;
  }
  
  @media (max-width: 576px) {
    height: 500px;
    border-radius: 15px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 190px;
  left: 210px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: white;
  
  @media (max-width: 1200px) {
    top: 150px;
    left: 150px;
  }
  
  @media (max-width: 992px) {
    left: 100px;
    top: 120px;
  }
  
  @media (max-width: 768px) {
    left: 50px;
    top: 100px;
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    left: 20px;
    top: 80px;
    gap: 10px;
  }
`;

const LetsCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 32px;
  border-radius: 50px;
  border: 1px solid #fff;
  
  @media (max-width: 768px) {
    width: 160px;
    height: 28px;
  }
  
  @media (max-width: 576px) {
    width: 140px;
    height: 26px;
  }
`;

const LetsText = styled.h1`
  font-family: "Signika", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const BigTitle = styled.h1`
  width: 421px;
  font-family: "Signika", sans-serif;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.1;
  
  @media (max-width: 1200px) {
    font-size: 44px;
    width: 350px;
  }
  
  @media (max-width: 992px) {
    font-size: 38px;
    width: 300px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    width: 250px;
  }
  
  @media (max-width: 576px) {
    font-size: 26px;
    width: 200px;
  }
`;

const ContactBtn2 = styled.div`
  width: 190px;
  background: white;
  color: black;
  padding: 12px 22px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    width: 170px;
    padding: 10px 18px;
    font-size: 14px;
  }
  
  @media (max-width: 576px) {
    width: 150px;
    padding: 8px 15px;
    font-size: 12px;
  }
`;

const FlyImage = styled.img`
  width: 30px;
  
  @media (max-width: 768px) {
    width: 24px;
  }
  
  @media (max-width: 576px) {
    width: 20px;
  }
`;

const BadgeBox = styled.div`
  position: absolute;
  top: 180px;
  right: 150px;
  width: 180px;
  height: 180px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const SectionImage = styled.img`
  max-width: 1260px;
  width: 100%;
  height: auto;
  margin: 10px auto 0;
  display: block;
  
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ProductsWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 200px auto 0;
  padding: 0 15px;
  
  @media (max-width: 1200px) {
    margin-top: 150px;
  }
  
  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 0 10px;
  }
  
  @media (max-width: 576px) {
    margin-top: 80px;
  }
`;

const ProductsTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const Title = styled.h1`
  font-size: 44px;
  font-family: "Signika", sans-serif;
  color: rgba(64, 74, 61, 1);
  font-weight: 500;
  
  @media (max-width: 1200px) {
    font-size: 38px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const OverlayTitle = styled.h1`
  font-size: 44px;
  font-family: "Signika", sans-serif;
  color: rgba(64, 74, 61, 1);
  font-weight: 700;
  text-align: center;
  
  @media (max-width: 1200px) {
    font-size: 38px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
    text-align: left;
    padding-left: 20px;
  }
`;

const ArrowButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ArrowBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
`;

const ProductsGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProductCard = styled.div`
  width: 100%;
  background: white;
  border-radius: 30px;
  padding: 20px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover {
    border-color: #5b8c51;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
  }
  
  @media (max-width: 768px) {
    border-radius: 25px;
    padding: 15px;
  }
`;

const ProductImage = styled.img`
  width: 210px;
  height: 210px;
  object-fit: contain;
  
  @media (max-width: 992px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  
  @media (max-width: 576px) {
    width: 180px;
    height: 180px;
  }
`;

const ProductName = styled.h3`
  font-size: 22px;
  margin-top: 10px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const StarRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  
  img {
    width: 120px;
    
    @media (max-width: 768px) {
      width: 100px;
    }
  }
  
  span {
    font-size: 16px;
    color: #555;
    
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`;

const PriceBox = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  gap: 10px;
  
  span.old {
    color: #999;
    text-decoration: line-through;
    font-size: 14px;
  }
  
  span.new {
    color: #5b8c51;
    font-weight: bold;
    font-size: 16px;
  }
`;

const CartBtn = styled.button`
  margin-top: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #e6f3e4;
  color: #5b8c51;
  cursor: pointer;
  font-size: 20px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;

const YellowSectionWrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 150px auto 0;
  position: relative;
  padding: 0 15px;
  
  @media (max-width: 1200px) {
    margin-top: 120px;
  }
  
  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 0 10px;
  }
  
  @media (max-width: 576px) {
    margin-top: 60px;
  }
`;

const YellowContentBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255,255,255,0.95);
  padding: 30px;
  border-radius: 20px;
  z-index: 4;
  
  @media (max-width: 1200px) {
    top: 150px;
    padding: 25px;
  }
  
  @media (max-width: 992px) {
    position: relative;
    top: 0;
    margin-top: 30px;
    background: white;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const YellowTabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 992px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
    gap: 30px;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const YellowTab = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: "Signika", sans-serif;
  cursor: pointer;
  padding: 8px 16px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    font-size: 15px;
    text-align: center;
  }
`;

const YellowProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const YellowCard = styled.div`
  text-align: center;
  padding: 18px 12px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 576px) {
    padding: 15px 10px;
  }
`;

const YellowImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  
  @media (max-width: 576px) {
    width: 90px;
    height: 90px;
  }
`;

const OldPrice = styled.span`
  color: #888;
  text-decoration: line-through;
  font-size: 14px;
`;

const NewPrice = styled.span`
  color: #5b8c51;
  font-weight: bold;
  margin-left: 8px;
  font-size: 16px;
`;

const TestimonialsWrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 60px auto 0;
  display: flex;
  gap: 30px;
  align-items: flex-start;
  padding: 0 15px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 0 10px;
    margin-top: 40px;
  }
`;

const TestiLeft = styled.div`
  width: 45%;
  padding-right: 20px;
  
  @media (max-width: 992px) {
    width: 100%;
    padding-right: 0;
    text-align: center;
  }
`;

const TestiBadge = styled.div`
  display: inline-block;
  background: #f6f7f2;
  color: #5b8c51;
  padding: 8px 14px;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 18px;
`;

const TestiTitle = styled.h2`
  font-size: 48px;
  color: #374736;
  line-height: 1.05;
  margin: 10px 0 24px;
  
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 34px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const TestiNav = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 18px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const NavBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.08);
  background: transparent;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const TestiRight = styled.div`
  width: 55%;
  padding-left: 8px;
  
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 0;
  }
`;

const TestiCard = styled.div`
  background: transparent;
`;

const Stars = styled.img`
  width: 140px;
  display: block;
  margin-bottom: 14px;
  
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const Quote = styled.p`
  font-size: 22px;
  color: #2b3b2b;
  line-height: 1.4;
  margin-bottom: 18px;
  
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 700;
  color: #374736;
  font-size: 18px;
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const AuthorRole = styled.div`
  font-size: 12px;
  color: #9aa092;
`;

const Dots = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e9df59;
  opacity: ${props => props.active ? "1" : "0.3"};
`;

const LogosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 576px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const LogosRow = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  @media (max-width: 576px) {
    gap: 20px;
  }
`;

const LogoItem = styled.img`
  width: 120px;
  height: auto;
  opacity: 0.85;
  filter: grayscale(10%);
  
  @media (max-width: 992px) {
    width: 100px;
  }
  
  @media (max-width: 768px) {
    width: 90px;
  }
  
  @media (max-width: 576px) {
    width: 80px;
  }
`;

const HeroWrapper = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 40px auto 80px;
  background: white;
  border-radius: 30px;
  padding: 26px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.04);
  
  @media (max-width: 1200px) {
    max-width: 95%;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px;
    margin: 30px auto 60px;
  }
  
  @media (max-width: 576px) {
    padding: 15px;
    border-radius: 15px;
  }
`;

const HeroInner = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const HeroLeft = styled.img`
  width: 58%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
  
  @media (max-width: 576px) {
    height: 200px;
  }
`;

const HeroRight = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  
  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const BadgeFreeSmall = styled.span`
  display: inline-block;
  background: #f3f6ef;
  color: #5b8c51;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 600;
  width: fit-content;
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  color: #374736;
  line-height: 1.05;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 34px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const HeroTextSmall = styled.p`
  color: #707770;
  font-size: 16px;
  line-height: 1.6;
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const BuyNowBtn = styled.button`
  width: 160px;
  background: #5b8c51;
  color: white;
  padding: 12px 18px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  
  @media (max-width: 576px) {
    width: 140px;
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const BlogSection = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 120px;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    margin: 30px auto 80px;
    padding: 0 10px;
  }
`;

const BlogTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BlogHeading = styled.h2`
  font-size: 48px;
  color: #374736;
  margin: 0;
  
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 34px;
  }
  
  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const BlogCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  background: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    border-radius: 20px;
  }
`;

const BlogImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 768px) {
    height: 200px;
  }
  
  @media (max-width: 576px) {
    height: 180px;
  }
`;

const BlogBody = styled.div`
  padding: 22px 24px 30px;
  
  @media (max-width: 768px) {
    padding: 18px 20px 25px;
  }
`;

const TagBadge = styled.span`
  display: inline-block;
  background: #f3f6ef;
  color: #5b8c51;
  padding: 8px 12px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 13px;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 12px;
  color: #8b9a8b;
  font-size: 13px;
`;

const BlogCardTitle = styled.h3`
  margin: 14px 0 6px;
  font-size: 22px;
  color: #2e3b31;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const BlogExcerpt = styled.p`
  color: #6b756b;
  font-size: 15px;
  margin: 0 0 12px;
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const ReadBtn = styled.button`
  background: #e9df59;
  border: none;
  padding: 10px 12px;
  border-radius: 20px;
  cursor: pointer;
`;

const FooterYellowWrapper = styled.footer`
  width: 100%;
  background: #e9df59;
  padding: 16px 0;
  margin-top: 30px;
`;

const FooterYellowContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
  color: rgba(55,71,54,0.9);
  font-weight: 600;
  font-size: 13px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
`;

const ContactGroup = styled.div`
  display: flex;
  gap: 28px;
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
  color: rgba(55,71,54,0.9);
  font-weight: 500;
  font-size: 14px;
  
  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;

const ContactText = styled.div``;

const FarmingSection = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: flex-start;
  
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const FarmingBox = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 60px;
  border-radius: 30px;
  
  @media (max-width: 1200px) {
    padding: 40px;
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 20px;
  }
  
  @media (max-width: 576px) {
    padding: 20px 15px;
    border-radius: 15px;
  }
`;

const FarmingLeft = styled.div`
  width: 50%;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  gap: 20px;
  
  @media (max-width: 992px) {
    width: 100%;
    margin-top: 0;
    order: 2;
  }
`;

const FarmingTitle = styled.h1`
  font-size: 55px;
  font-family: "Signika", sans-serif;
  color: #374736;
  font-weight: 600;
  line-height: 60px;
  
  @media (max-width: 1200px) {
    font-size: 48px;
    line-height: 52px;
  }
  
  @media (max-width: 992px) {
    font-size: 42px;
    line-height: 46px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }
  
  @media (max-width: 576px) {
    font-size: 30px;
    line-height: 34px;
  }
`;

const FarmingText = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const FarmingBtn = styled.button`
  width: 201px;
  border: none;
  background: #5b8c51;
  color: white;
  padding: 14px 24px;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  
  @media (max-width: 768px) {
    width: 180px;
    padding: 12px 20px;
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    width: 160px;
    padding: 10px 18px;
    font-size: 15px;
  }
`;

const FarmingRight = styled.img`
  width: 45%;
  height: auto;
  border-radius: 30px;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
    order: 1;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    border-radius: 20px;
  }
  
  @media (max-width: 576px) {
    height: 250px;
    border-radius: 15px;
  }
`;

const ContainerForList = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListImage = styled.img`
  width: 350px;
  height: auto;
  
  @media (max-width: 1200px) {
    width: 300px;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 400px;
  }
`;

const ListImage2 = styled.img`
  width: 350px;
  height: auto;
  
  @media (max-width: 1200px) {
    width: 300px;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 400px;
  }
`;

const ForOurPr = styled.img`
  width: 147px;
  height: 30px;
  
  @media (max-width: 768px) {
    width: 130px;
    height: auto;
  }
  
  @media (max-width: 576px) {
    width: 110px;
  }
`;

const JustContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  flex-direction: column;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 15px;
  z-index: 5;
  
  @media (max-width: 992px) {
    top: 80px;
  }
  
  @media (max-width: 768px) {
    top: 60px;
  }
  
  @media (max-width: 576px) {
    top: 50px;
  }
`;

const ContainerForPrice = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const ContainerForPriceColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home3() {
  return (
    <BigContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <MainContainer>
        <ImageWrapper>
          <ForBg src={BgImage} />
          <ForBg2 src={BgImage2} />

          <ContentWrapper>
            <LetsCtn><LetsText>Let's Eat Healthier</LetsText></LetsCtn>

            <BigTitle>Respect Nature, Gain Benefits</BigTitle>

            <ContactBtn2>
              Get In Touch <FlyImage src={FlyImg} />
            </ContactBtn2>
          </ContentWrapper>

          <BadgeBox />
        </ImageWrapper>
      </MainContainer>

      <SectionImage src={Sectin} />

      <ProductsWrapper>
        <ProductsTop>
          <Title>Check Our Products</Title>
          <ArrowButtons>
            <ArrowBtn>{`<`}</ArrowBtn>
            <ArrowBtn>{`>`}</ArrowBtn>
          </ArrowButtons>
        </ProductsTop>

        <ProductsGrid>
          <ProductCard>
            <ProductImage src={Corn} />
            <ProductName>Corn</ProductName>
            <StarRow>
              <img src={StarRate} alt="Star rating" />
              <span>(5.0)</span>
            </StarRow>
            <PriceBox>
              <span className="new">$45.00</span>
            </PriceBox>
            <CartBtn>🛒</CartBtn>
          </ProductCard>

          <ProductCard>
            <ProductImage src={Tomato} />
            <ProductName>Tomato</ProductName>
            <StarRow>
              <img src={StarRate} alt="Star rating" />
              <span>(5.0)</span>
            </StarRow>
            <PriceBox>
              <span className="old">$18.00</span>
              <span className="new">$16.00</span>
            </PriceBox>
            <CartBtn>🛒</CartBtn>
          </ProductCard>

          <ProductCard>
            <ProductImage src={Cabbage} />
            <ProductName>Cabbage</ProductName>
            <StarRow>
              <img src={StarRate} alt="Star rating" />
              <span>(5.0)</span>
            </StarRow>
            <PriceBox>
              <span className="old">$20.00</span>
              <span className="new">$18.00</span>
            </PriceBox>
            <CartBtn>🛒</CartBtn>
          </ProductCard>

          <ProductCard style={{ borderColor: "#5b8c51" }}>
            <ProductImage src={Kiwi} />
            <ProductName>Kiwi</ProductName>
            <StarRow>
              <img src={StarRate} alt="Star rating" />
              <span>(5.0)</span>
            </StarRow>
            <PriceBox>
              <span className="old">$3.00</span>
              <span className="new">$2.00</span>
            </PriceBox>
            <CartBtn>🛒</CartBtn>
          </ProductCard>
        </ProductsGrid>
      </ProductsWrapper>

      <FarmingSection>
        <FarmingBox>
          <FarmingRight src={FarmingSectionImg} />
          <FarmingLeft>
            <FarmingTitle>We're Best Agriculture & Organic Farms</FarmingTitle>
            <FarmingText>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </FarmingText>

            <ContainerForList>
              <ListImage src={List} alt="Benefits list 1" />
              <ListImage2 src={List2} alt="Benefits list 2" />
            </ContainerForList>
            <FarmingBtn>Learn More</FarmingBtn>
          </FarmingLeft>
        </FarmingBox>
      </FarmingSection>

      <YellowSectionWrapper>
        <ForBg4 src={NewBg2} />

        <JustContainer>
          <ForOurPr src={OurPr} alt="Our Products" />
          <OverlayTitle>Products Delivered To Home</OverlayTitle>
        </JustContainer>

        <YellowContentBox>
          <YellowTabs>
            <YellowTab>On Sale Product</YellowTab>
            <YellowTab>Fresh Organic Fruits</YellowTab>
            <YellowTab>Featured Product</YellowTab>
          </YellowTabs>

          <YellowProducts>
            <YellowCard>
              <YellowImg src={Cabbage} alt="Cabbage" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Cabbage</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$20.00</OldPrice>
                  <NewPrice>$18.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Tomato} alt="Tomato" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Tomato</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$20.00</OldPrice>
                  <NewPrice>$18.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Carrot} alt="Carrot" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Carrot</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$11.05</OldPrice>
                  <NewPrice>$10.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Kiwi2} alt="Kiwi" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Kiwi</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$3.00</OldPrice>
                  <NewPrice>$2.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={PurpleCabbage} alt="Purple Cabbage" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Purple Cabbage</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$65.00</OldPrice>
                  <NewPrice>$55.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Brinjal} alt="Brinjal" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Brinjal</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$18.00</OldPrice>
                  <NewPrice>$16.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Banana} alt="Banana" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Banana</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$45.00</OldPrice>
                  <NewPrice>$40.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>

            <YellowCard>
              <YellowImg src={Watermelon} alt="Watermelon" />
              <ContainerForPrice>
                <h3 style={{fontFamily: "Signika, sans-serif", fontWeight: "500", marginRight: "40px"}}>Watermelon</h3>
                <ContainerForPriceColumn>
                  <OldPrice>$30.00</OldPrice>
                  <NewPrice>$25.00</NewPrice>
                </ContainerForPriceColumn>
              </ContainerForPrice>
            </YellowCard>
          </YellowProducts>
        </YellowContentBox>
      </YellowSectionWrapper>

      <TestimonialsWrapper>
        <TestiLeft>
          <TestiBadge>Testimonials</TestiBadge>
          <TestiTitle>What our clients
            <br />say about us</TestiTitle>
          <TestiNav>
            <NavBtn>{`<`}</NavBtn>
            <NavBtn>{`>`}</NavBtn>
          </TestiNav>
        </TestiLeft>

        <TestiRight>
          <TestiCard>
            <Stars src={StarRate} alt="Stars rating" />
            <Quote>
              "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"
            </Quote>

            <AuthorRow>
              <Avatar src={StepHen} alt="Stephen" />
              <AuthorInfo>
                <AuthorName>Stephen Welch</AuthorName>
                <AuthorRole>Worker</AuthorRole>
              </AuthorInfo>
            </AuthorRow>

            <Dots>
              <Dot active />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </Dots>
          </TestiCard>
        </TestiRight>
      </TestimonialsWrapper>

      <LogosWrapper>
        <LogosRow>
          <LogoItem src={OrganicRiceIcon} alt="organic rice" />
          <LogoItem src={FarmIcon} alt="farm" />
          <LogoItem src={FarmFreshIcon} alt="farm fresh" />
          <LogoItem src={FoodIcon} alt="food" />
          <LogoItem src={EcoProduct} alt="eco product" />
          <LogoItem src={TractorIcon} alt="tractor" />
        </LogosRow>
      </LogosWrapper>

      <HeroWrapper>
        <HeroInner>
          <HeroLeft src={VegHero} alt="organic vegetables" />

          <HeroRight>
            <BadgeFreeSmall>Free Quote</BadgeFreeSmall>
            <HeroTitle>Organic Vegetables
              <br />in Our Store</HeroTitle>
            <HeroTextSmall>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration look even.
            </HeroTextSmall>
            <BuyNowBtn>Buy Now ↗</BuyNowBtn>
          </HeroRight>
        </HeroInner>
      </HeroWrapper>

      <BlogSection>
        <BlogTop>
          <BlogHeading>Latest posts & articles</BlogHeading>
          <ArrowButtons>
            <ArrowBtn>{`<`}</ArrowBtn>
            <ArrowBtn>{`>`}</ArrowBtn>
          </ArrowButtons>
        </BlogTop>

        <BlogGrid>
          <BlogCard>
            <BlogImg src={WhatTechnology} alt="What technology is used in vertical farming?" />
            <BlogBody>
              <TagBadge>FOOD CROPS</TagBadge>
              <MetaRow>
                <div>March 28, 2024</div>
                <div>Admin</div>
              </MetaRow>
              <BlogCardTitle>What technology is used in vertical farming?</BlogCardTitle>
              <BlogExcerpt>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</BlogExcerpt>
              <ReadBtn>→</ReadBtn>
            </BlogBody>
          </BlogCard>

          <BlogCard>
            <BlogImg src={WhichType} alt="Which type of farming is more prevalent today?" />
            <BlogBody>
              <TagBadge>ORGANIC FARM</TagBadge>
              <MetaRow>
                <div>March 28, 2024</div>
                <div>Admin</div>
              </MetaRow>
              <BlogCardTitle>Which type of farming is more prevalent today?</BlogCardTitle>
              <BlogExcerpt>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</BlogExcerpt>
              <ReadBtn>→</ReadBtn>
            </BlogBody>
          </BlogCard>

          <BlogCard>
            <BlogImg src={TheFarmer} alt="The Farmers Sentiment Darkens Hopes Fade" />
            <BlogBody>
              <TagBadge>FARMING TIPS</TagBadge>
              <MetaRow>
                <div>March 28, 2024</div>
                <div>Admin</div>
              </MetaRow>
              <BlogCardTitle>The Farmers Sentiment Darkens Hopes Fade</BlogCardTitle>
              <BlogExcerpt>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</BlogExcerpt>
              <ReadBtn>→</ReadBtn>
            </BlogBody>
          </BlogCard>
        </BlogGrid>
      </BlogSection>

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
                <img src={TelIcon} alt="phone" style={{width: 18}} />
              </IconCircle>
              <ContactText>+1(212) 255-511</ContactText>
            </ContactItem>

            <ContactItem>
              <IconCircle>
                <img src={MailIcon} alt="mail" style={{width: 18}} />
              </IconCircle>
              <ContactText>noreply@pbminfotech.com</ContactText>
            </ContactItem>
          </ContactGroup>
        </FooterYellowContainer>
      </FooterYellowWrapper>

      <Footer />
    </BigContainer>
  );
}