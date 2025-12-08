import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Import all images
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
import Watermelon from "../../pages/home/home3Png/waterMelon.png";
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

/* ===== MAIN CONTAINER ===== */
const BigContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8f7f0;
  overflow-x: hidden;
  padding-top: 80px;
`;

/* ===== HEADER SECTION ===== */
const HeroSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto 40px;
  position: relative;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 630px;
  border-radius: 30px;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const MainBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const SecondaryBg = styled.img`
  width: 48%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  
  @media (max-width: 1024px) {
    width: 40%;
  }
  
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 60px;
  color: white;
  max-width: 500px;
  z-index: 2;
  
  @media (max-width: 1024px) {
    left: 40px;
  }
  
  @media (max-width: 768px) {
    left: 20px;
    max-width: 300px;
  }
`;

const HeroBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 25px;
  
  @media (max-width: 1024px) {
    font-size: 42px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroButton = styled.button`
  background: white;
  color: #2d5a27;
  border: none;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const FlyIcon = styled.img`
  width: 20px;
  height: 20px;
`;

/* ===== SECTION IMAGE ===== */
const SectionImageWrapper = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 40px auto;
  padding: 0 20px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

/* ===== PRODUCTS SECTION ===== */
const ProductsSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 44px;
  color: #2d5a27;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ArrowButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid ${props => props.highlighted ? '#4CAF50' : 'transparent'};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin: 0 auto 20px;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const ProductName = styled.h3`
  font-size: 22px;
  color: #2d5a27;
  margin-bottom: 10px;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
  
  img {
    width: 100px;
  }
  
  span {
    color: #666;
    font-size: 14px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const OldPrice = styled.span`
  color: #999;
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  color: #4CAF50;
  font-weight: 600;
  font-size: 18px;
`;

const AddToCartButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #f0f7f0;
  color: #4CAF50;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4CAF50;
    color: white;
  }
`;

/* ===== FARMING SECTION ===== */
const FarmingSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 100px auto;
  padding: 0 20px;
`;

const FarmingContainer = styled.div`
  background: white;
  border-radius: 30px;
  padding: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FarmingImage = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
`;

const FarmingContent = styled.div``;

const FarmingTitle = styled.h2`
  font-size: 42px;
  color: #2d5a27;
  line-height: 1.2;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const FarmingDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 180px;
`;

const LearnMoreButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #45a049;
  }
`;

/* ===== YELLOW PRODUCTS SECTION ===== */
const YellowSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 100px auto;
  padding: 0 20px;
  position: relative;
`;

const YellowBackground = styled.div`
  background: #e9df59;
  border-radius: 30px;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
  min-height: 600px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const YellowHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const YellowBadge = styled.img`
  width: 150px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const YellowTitle = styled.h2`
  font-size: 44px;
  color: #2d5a27;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const YellowContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const YellowTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const YellowTab = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 15px;
  }
`;

const YellowProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const YellowProductCard = styled.div`
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const YellowProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto 15px;
`;

const YellowProductName = styled.h3`
  font-size: 18px;
  color: #2d5a27;
  margin-bottom: 10px;
  font-weight: 500;
`;

const YellowPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

/* ===== TESTIMONIALS SECTION ===== */
const TestimonialsSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 100px auto;
  padding: 0 20px;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TestimonialsContent = styled.div``;

const TestimonialsBadge = styled.div`
  display: inline-block;
  background: #f0f7f0;
  color: #4CAF50;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const TestimonialsTitle = styled.h2`
  font-size: 42px;
  color: #2d5a27;
  line-height: 1.2;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const TestimonialStars = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

const TestimonialQuote = styled.p`
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 25px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 18px;
  color: #2d5a27;
  margin-bottom: 5px;
`;

const AuthorRole = styled.p`
  font-size: 14px;
  color: #666;
`;

/* ===== PARTNERS SECTION ===== */
const PartnersSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 80px auto;
  padding: 0 20px;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const PartnerLogo = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

/* ===== BLOG SECTION ===== */
const BlogSection = styled.section`
  width: 100%;
  max-width: 1500px;
  margin: 100px auto;
  padding: 0 20px;
`;

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const BlogTitle = styled.h2`
  font-size: 44px;
  color: #2d5a27;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const BlogCard = styled.article`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 25px;
`;

const BlogCategory = styled.span`
  display: inline-block;
  background: #f0f7f0;
  color: #4CAF50;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const BlogPostTitle = styled.h3`
  font-size: 20px;
  color: #2d5a27;
  line-height: 1.4;
  margin-bottom: 15px;
`;

const BlogExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background: #e9df59;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #d8cd4a;
  }
`;

/* ===== YELLOW FOOTER BAR ===== */
const YellowFooter = styled.footer`
  width: 100%;
  background: #e9df59;
  padding: 25px 0;
  margin-top: 80px;
`;

const YellowFooterContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
  color: #374736;
  font-weight: 600;
  font-size: 14px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavItem = styled.span`
  &:nth-child(odd) {
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2d5a27;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const ContactItem = styled.div` 
  display: flex;
  align-items: center;
  gap: 10px;
  color: #374736;
  font-size: 14px;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 18px;
    height: 18px;
  }
`;

// Additional sections (Vegetables hero, etc.) would continue similarly...

export default function Home3() {
  const products = [
    { image: Corn, name: "Corn", price: "$45.00", oldPrice: null, highlighted: false },
    { image: Tomato, name: "Tomato", price: "$16.00", oldPrice: "$18.00", highlighted: false },
    { image: Cabbage, name: "Cabbage", price: "$18.00", oldPrice: "$20.00", highlighted: false },
    { image: Kiwi, name: "Kiwi", price: "$2.00", oldPrice: "$3.00", highlighted: true },
  ];

  const yellowProducts = [
    { image: Cabbage, name: "Cabbage", price: "$18.00", oldPrice: "$20.00" },
    { image: Tomato, name: "Tomato", price: "$18.00", oldPrice: "$20.00" },
    { image: Carrot, name: "Carrot", price: "$10.00", oldPrice: "$11.05" },
    { image: Kiwi2, name: "Kiwi", price: "$2.00", oldPrice: "$3.00" },
    { image: PurpleCabbage, name: "Purple Cabbage", price: "$55.00", oldPrice: "$65.00" },
    { image: Brinjal, name: "Brinjal", price: "$16.00", oldPrice: "$18.00" },
    { image: Banana, name: "Banana", price: "$40.00", oldPrice: "$45.00" },
    { image: Watermelon, name: "Watermelon", price: "$25.00", oldPrice: "$30.00" },
  ];

  const partners = [
    OrganicRiceIcon,
    FarmIcon,
    FarmFreshIcon,
    FoodIcon,
    EcoProduct,
    TractorIcon
  ];

  const blogPosts = [
    { image: WhatTechnology, category: "FOOD CROPS", title: "What technology is used in vertical farming?", date: "March 28, 2024" },
    { image: WhichType, category: "ORGANIC FARM", title: "Which type of farming is more prevalent today?", date: "March 28, 2024" },
    { image: TheFarmer, category: "FARMING TIPS", title: "The Farmers Sentiment Darkens Hopes Fade", date: "March 28, 2024" },
  ];

  return (
    <>
      <Header />
      <BigContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroImageWrapper>
            <MainBg src={BgImage} alt="Background" />
            <SecondaryBg src={BgImage2} alt="Secondary Background" />
            <HeroContent>
              <HeroBadge>Let's Eat Healthier</HeroBadge>
              <HeroTitle>Respect Nature, Gain Benefits</HeroTitle>
              <HeroButton>
                Get In Touch <FlyIcon src={FlyImg} alt="Fly" />
              </HeroButton>
            </HeroContent>
          </HeroImageWrapper>
        </HeroSection>

        {/* Section Image */}
        <SectionImageWrapper>
          <img src={Sectin} alt="Section Divider" />
        </SectionImageWrapper>

        {/* Products Section */}
        <ProductsSection>
          <SectionHeader>
            <SectionTitle>Check Our Products</SectionTitle>
            <ArrowButtons>
              <ArrowButton>‹</ArrowButton>
              <ArrowButton>›</ArrowButton>
            </ArrowButtons>
          </SectionHeader>
          <ProductsGrid>
            {products.map((product, index) => (
              <ProductCard key={index} highlighted={product.highlighted}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <StarRating>
                  <img src={StarRate} alt="Rating" />
                  <span>(5.0)</span>
                </StarRating>
                <PriceContainer>
                  {product.oldPrice && <OldPrice>{product.oldPrice}</OldPrice>}
                  <NewPrice>{product.price}</NewPrice>
                </PriceContainer>
                <AddToCartButton>🛒</AddToCartButton>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ProductsSection>

        {/* Farming Section */}
        <FarmingSection>
          <FarmingContainer>
            <FarmingImage src={FarmingSectionImg} alt="Farming" />
            <FarmingContent>
              <FarmingTitle>We're Best Agriculture & Organic Farms</FarmingTitle>
              <FarmingDescription>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
              </FarmingDescription>
              <FeaturesContainer>
                <FeatureImage src={List} alt="Feature 1" />
                <FeatureImage src={List2} alt="Feature 2" />
              </FeaturesContainer>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </FarmingContent>
          </FarmingContainer>
        </FarmingSection>

        {/* Yellow Products Section */}
        <YellowSection>
          <YellowBackground>
            <YellowHeader>
              <YellowBadge src={OurPr} alt="Our Products" />
              <YellowTitle>Products Delivered To Home</YellowTitle>
            </YellowHeader>
            <YellowContent>
              <YellowTabs>
                <YellowTab>On Sale Product</YellowTab>
                <YellowTab>Fresh Organic Fruits</YellowTab>
                <YellowTab>Featured Product</YellowTab>
              </YellowTabs>
              <YellowProductsGrid>
                {yellowProducts.map((product, index) => (
                  <YellowProductCard key={index}>
                    <YellowProductImage src={product.image} alt={product.name} />
                    <YellowProductName>{product.name}</YellowProductName>
                    <YellowPriceContainer>
                      <OldPrice>{product.oldPrice}</OldPrice>
                      <NewPrice>{product.price}</NewPrice>
                    </YellowPriceContainer>
                  </YellowProductCard>
                ))}
              </YellowProductsGrid>
            </YellowContent>
          </YellowBackground>
        </YellowSection>

        {/* Testimonials Section */}
        <TestimonialsSection>
          <TestimonialsContainer>
            <TestimonialsContent>
              <TestimonialsBadge>Testimonials</TestimonialsBadge>
              <TestimonialsTitle>
                What our clients
                <br />say about us
              </TestimonialsTitle>
              <ArrowButtons>
                <ArrowButton>‹</ArrowButton>
                <ArrowButton>›</ArrowButton>
              </ArrowButtons>
            </TestimonialsContent>
            <TestimonialCard>
              <TestimonialStars src={StarRate} alt="Rating" />
              <TestimonialQuote>
                "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!"
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar src={StepHen} alt="Stephen Welch" />
                <AuthorInfo>
                  <AuthorName>Stephen Welch</AuthorName>
                  <AuthorRole>Worker</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsContainer>
        </TestimonialsSection>

        {/* Partners Section */}
        <PartnersSection>
          <PartnersGrid>
            {partners.map((logo, index) => (
              <PartnerLogo key={index} src={logo} alt={`Partner ${index + 1}`} />
            ))}
          </PartnersGrid>
        </PartnersSection>

        {/* Blog Section */}
        <BlogSection>
          <BlogHeader>
            <BlogTitle>Latest posts & articles</BlogTitle>
            <ArrowButtons>
              <ArrowButton>‹</ArrowButton>
              <ArrowButton>›</ArrowButton>
            </ArrowButtons>
          </BlogHeader>
          <BlogGrid>
            {blogPosts.map((post, index) => (
              <BlogCard key={index}>
                <BlogImage src={post.image} alt={post.title} />
                <BlogContent>
                  <BlogCategory>{post.category}</BlogCategory>
                  <BlogMeta>
                    <span>{post.date}</span>
                    <span>Admin</span>
                  </BlogMeta>
                  <BlogPostTitle>{post.title}</BlogPostTitle>
                  <BlogExcerpt>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                  </BlogExcerpt>
                  <ReadMoreButton>→</ReadMoreButton>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </BlogSection>

        {/* Yellow Footer */}
        <YellowFooter>
          <YellowFooterContainer>
            <FooterNav>
              <NavItem>FARMERS</NavItem>
              <NavItem>•</NavItem>
              <NavItem>ORGANIC</NavItem>
              <NavItem>•</NavItem>
              <NavItem>FOODS</NavItem>
              <NavItem>•</NavItem>
              <NavItem>PRODUCT</NavItem>
            </FooterNav>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <img src={TelIcon} alt="Phone" />
                </ContactIcon>
                <span>+1(212) 255-511</span>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <img src={MailIcon} alt="Email" />
                </ContactIcon>
                <span>noreply@pbminfotech.com</span>
              </ContactItem>
            </ContactInfo>
          </YellowFooterContainer>
        </YellowFooter>
      </BigContainer>
      <Footer />
    </>
  );
}