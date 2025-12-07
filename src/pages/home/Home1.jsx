import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgroundImg from "./home1Png/background.png";
import FarmIcon from "./home1Png/tracktor.png";
import VegetableIcon from "./home1Png/fresh.png";
import ProductIcon from "./home1Png/agriculture1.png";
import GuaranteeIcon from "./home1Png/tree.png";
import EcoIcon from "./home1Png/panjara.png";
import EquipmentIcon from "./home1Png/o'tO'rgich.png";
import VegIcon from "./home1Png/o'tO'rgich.png";
import WhoImg from "./home1Png/background.png";
import Tracktor1 from "./home1Png/traktor2.png"
import Tracktor2 from "./home1Png/traktor3.png"
import Bogbon from "./home1Png/bog'bon.png";
import Corn from "./home1Png/corn.png"
import Avatar1 from "./home1Png/avatar1.png"
import Avatar2 from "./home1Png/avatar2.png"
import Avatar3 from "./home1Png/avatar3.png"

import OrganicRiceIcon from "../../pages/home/home3Png/organicRiceIcon.png";
import FarmIcon2 from "../../pages/home/home3Png/farmIcon.png";
import FarmFreshIcon from "../../pages/home/home3Png/freshFarmIcon.png";
import FoodIcon from "../../pages/home/home3Png/foodIcon.png";
import EcoProduct from "../../pages/home/home3Png/ecoProduct.png";
import TractorIcon from "../../pages/home/home3Png/traktorIcon.png";


const HomeCtn = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 70vh;
    min-height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 60vh;
    min-height: 400px;
  }
`;

const HeroBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  z-index: 2;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const HeroMainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  
  @media (max-width: 992px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #e8f5e9;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 14px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 25px;
    font-size: 0.9rem;
  }
  
  &:hover {
    background: white;
    color: #2E7D32;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 20px;
  background: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 40px 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 25px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #2E7D32;
  margin-bottom: 15px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CloseIcon = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

// ====== Who We Are Section Styles ======
const WhoWeAreSection = styled.section`
  padding: 100px 20px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

const WhoWeAreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: flex-start;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const WhoWeAreImage = styled.img`
  flex: 1;
  min-width: 300px;
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  height: 500px;
  
  @media (max-width: 992px) {
    height: 400px;
  }
  
  @media (max-width: 576px) {
    height: 300px;
  }
`;

const WhoWeAreContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const WhoWeAreTitle = styled.h2`
  font-size: 2.5rem;
  color: #2E7D32;
  margin-bottom: 25px;
  position: relative;
  padding-left: 30px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    padding-left: 25px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding-left: 20px;
  }
  
  &:before {
    content: "*";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 2rem;
    color: #ff9800;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const WhoWeAreDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1.1rem;
  
  &:first-of-type {
    font-weight: 500;
    color: #333;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    
    &:first-of-type {
      font-size: 1.1rem;
    }
  }
`;

const StatsGrid = styled.div`
  flex: 1;
  min-width: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: ${props => props.highlight ? '#2E7D32' : '#f8f9fa'};
  color: ${props => props.highlight ? 'white' : '#333'};
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 25px 15px;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${props => props.highlight ? 'white' : '#2E7D32'};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ServiceTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: ${props => props.highlight ? 'white' : '#2E7D32'};
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServiceText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: ${props => props.highlight ? 0.9 : 0.7};
  text-align: center;
`;

const ServicesSection = styled.section`
  padding: 120px 20px;
  background: #6e915f;
  background-image: url('./home1Png/wheatbg.png');
  background-size: cover;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    padding: 80px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 60px 10px;
  }
`;

const ServicesHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const ServicesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: white;
  margin-top: 10px;
  
  @media (max-width: 992px) {
    font-size: 2.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const ServiceCards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const ServiceCard2 = styled.div`
  background: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 20px;
  }
`;

const ServiceImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ServiceContent = styled.div`
  padding: 30px 25px 50px 25px;
  
  @media (max-width: 768px) {
    padding: 25px 20px 45px 20px;
  }
`;

const ServiceCategory = styled.div`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const ServiceName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #2e7d32;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const BottomBtn = styled.div`
  position: absolute;
  bottom: -18px;
  right: 20px;
  background: #f4d35e;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const ChoseCtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const ChoseCtnCard = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  text-align: center;
  
  @media (max-width: 992px) {
    width: 90%;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 40px;
  }
  
  h1 {
    text-align: center;
  }
  
  img {
    width: 100%;
  }
`;

const H1Ctn = styled.div`
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    color: #2E7D32;
    margin-bottom: 10px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`;

const Card = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  
  @media (max-width: 992px) {
    width: 300px;
    height: 350px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    min-height: 350px;
  }
  
  h1 {
    font-size: 1.5rem;
    color: #2E7D32;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  
  p {
    color: #666;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
  
  img {
    max-width: 30%;
    height: auto;
  }
`;

// ================= TESTIMONIALS STYLE =================
const TestimonialsSection = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: #f4f8f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #2E7D32;
    text-align: center;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`;

const TestimonialsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
  
  @media (max-width: 992px) {
    gap: 20px;
  }
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  width: 30%;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  transition: 0.3s;
  
  @media (max-width: 992px) {
    width: 32%;
    padding: 25px;
  }
  
  @media (max-width: 900px) {
    width: 80%;
    max-width: 500px;
  }
  
  @media (max-width: 600px) {
    width: 95%;
    padding: 20px;
  }
  
  &:hover {
    transform: translateY(-8px);
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

const Name = styled.h3`
  font-size: 20px;
  color: #2d5a27;
  margin-bottom: 5px;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Role = styled.p`
  color: #7a7a7a;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LogosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
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
  padding-left: 15px;
  padding-right: 15px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  
  @media (max-width: 480px) {
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
  
  @media (max-width: 480px) {
    width: 80px;
  }
`;

/* ===== TIMELINE SECTION STYLED COMPONENTS ===== */
const TimelineSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 80px auto;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  
  @media (max-width: 992px) {
    margin: 60px auto;
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 40px auto;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 30px auto;
  }
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const LeftTitle = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  background: #e8f5e9;
  padding: 10px 20px;
  border-radius: 20px;
  color: #4a8c3e;
  font-weight: 600;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const MainTitle2 = styled.h1`
  font-size: 36px;
  margin: 10px 0;
  color: #2d5a27;
  font-weight: 700;
  
  @media (max-width: 992px) {
    font-size: 32px;
  }
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const YearTitle = styled.h2`
  font-size: 28px;
  color: #4a8c3e;
  margin-bottom: 20px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const RightText = styled.p`
  flex: 1;
  min-width: 300px;
  font-size: 16px;
  color: #666;
  line-height: 1.7;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  margin: 50px 0;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 40px 0;
  }
  
  @media (max-width: 480px) {
    margin: 30px 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: #e0e0e0;
    z-index: -1;
  }
`;

const TimelineDots = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -11px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #4CAF50;
  border-radius: 50%;
  margin-top: -10px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #4CAF50;
    border-radius: 50%;
  }
`;

const ItemsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 40px auto 0;
  }
`;

const TimelineItem = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 18px;
  }
  
  &:hover {
    transform: translateY(-5px);
    background: #f0f7f0;
  }
`;

const ItemYear = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #2d5a27;
  margin-bottom: 15px;
  line-height: 1;
  
  @media (max-width: 992px) {
    font-size: 36px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  color: #2d5a27;
  margin-bottom: 10px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const ItemText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function Home1() {
  const timeline = [
    {
      year: "1987",
      title: "Open my Farm",
      text: "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus."
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      text: "Majority have suffered alteration in some form by injected humour culpa odio temporibus."
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      text: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit."
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      text: "Consequatur magni Corrupti ut minus! Lusto eos consectetur similique minus culpa odio temporibus."
    }
  ];

  return (
    <>
      <Header />
      <HomeCtn>
        {/* Hero Section */}
        <HeroSection>
          <HeroBackground src={BackgroundImg} alt="Farm Background" />
          <HeroOverlay />
          <HeroContent>
            <HeroMainTitle>
              Quality Trust:
              <br />
              Direct to the Farm
            </HeroMainTitle>
            <HeroSubtitle>
              Fresh from the source
            </HeroSubtitle>
            <HeroDescription>
              We all need a little space to grow. Give yourself the space you need to find your inner you.
            </HeroDescription>
            <ContactButton>
              Contact Us: <CloseIcon>✗</CloseIcon>
            </ContactButton>
          </HeroContent>
        </HeroSection>

        {/* Features Section */}
        <FeaturesSection>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon src={FarmIcon} alt="Professional Farmers" />
              <FeatureTitle>Professional Farmers</FeatureTitle>
              <FeatureText>
                Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
                <br /><br />
                Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={VegetableIcon} alt="Fresh Vegetables" />
              <FeatureTitle>Fresh Vegetables</FeatureTitle>
              <FeatureText>
                Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={ProductIcon} alt="Agriculture Products" />
              <FeatureTitle>Agriculture Products</FeatureTitle>
              <FeatureText>
                Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={GuaranteeIcon} alt="100% Guaranteed" />
              <FeatureTitle>100% Guaranteed</FeatureTitle>
              <FeatureText>
                Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.
              </FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        {/* Who We Are Section */}
        <WhoWeAreSection>
          <WhoWeAreContainer>
            <WhoWeAreImage src={WhoImg} alt="Who We Are" />
            <WhoWeAreContent>
              <WhoWeAreTitle>Who We Are</WhoWeAreTitle>
              <WhoWeAreDescription>
                Currently we are growing and selling organic food
              </WhoWeAreDescription>
              <WhoWeAreDescription>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
              </WhoWeAreDescription>

              <StatsGrid>
                <StatCard highlight>
                  <StatNumber highlight>4 35 +</StatNumber>
                  <StatLabel>Growth Tons of Harvest</StatLabel>
                </StatCard>

                <StatCard>
                  <ServiceCard>
                    <ServiceIcon src={EcoIcon} alt="Eco Farms" />
                    <ServiceTitle>Eco Farms Worldwide</ServiceTitle>
                    <ServiceText>
                      ages of lorem ipsum available majority have suffered.
                    </ServiceText>
                  </ServiceCard>
                </StatCard>

                <StatCard>
                  <ServiceCard>
                    <ServiceIcon src={EquipmentIcon} alt="Special Equipment" />
                    <ServiceTitle>Special Equipment</ServiceTitle>
                    <ServiceText>
                      ages of lorem ipsum available majority have suffered.
                    </ServiceText>
                  </ServiceCard>
                </StatCard>
              </StatsGrid>
            </WhoWeAreContent>
          </WhoWeAreContainer>
        </WhoWeAreSection>

        <ServicesSection>
          <ServicesHeader>
            <div>
              <span style={{
                padding: "6px 15px",
                background: "white",
                borderRadius: "20px",
                color: "#2e7d32",
                fontSize: "0.9rem"
              }}>
                Our Services
              </span>

              <ServicesTitle>Best Agriculture Services</ServicesTitle>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <button style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "transparent",
                border: "1px solid white",
                color: "white",
                fontSize: "16px",
                cursor: "pointer"
              }}>‹</button>

              <button style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "transparent",
                border: "1px solid white",
                color: "white",
                fontSize: "16px",
                cursor: "pointer"
              }}>›</button>
            </div>
          </ServicesHeader>

          <ServiceCards>
            <ServiceCard2>
              <ServiceImg src={Tracktor1} />
              <ServiceContent>
                <ServiceCategory>• FERTILIZER</ServiceCategory>
                <ServiceName>Harvest Concepts</ServiceName>
                <ServiceDesc>Farming and animal husbandry and discuss with farmers and scientists.</ServiceDesc>
              </ServiceContent>
              <BottomBtn>✈</BottomBtn>
            </ServiceCard2>

            <ServiceCard2>
              <ServiceImg src={Tracktor2} />
              <ServiceContent>
                <ServiceCategory>• FRUITS</ServiceCategory>
                <ServiceName>Farming Products</ServiceName>
                <ServiceDesc>Farming and animal husbandry and discuss with farmers and scientists.</ServiceDesc>
              </ServiceContent>
              <BottomBtn>✈</BottomBtn>
            </ServiceCard2>

            <ServiceCard2>
              <ServiceImg src={Bogbon} />
              <ServiceContent>
                <ServiceCategory>• FERTILIZER</ServiceCategory>
                <ServiceName>Soil Fertilization</ServiceName>
                <ServiceDesc>Farming and animal husbandry and discuss with farmers and scientists.</ServiceDesc>
              </ServiceContent>
              <BottomBtn>✈</BottomBtn>
            </ServiceCard2>
          </ServiceCards>
        </ServicesSection>

        <ChoseCtn>
          <H1Ctn>
            <h1>Choose What's Perfect</h1>
            <h1>For Your Field</h1>
          </H1Ctn>

          <ChoseCtnCard>
            <Card>
              <h1>Agriculture Products</h1>
              <p>Nullam porta enim vel tellus commodo, <br />
              eget laoreet odio ultrices.</p>
              <img src={VegetableIcon} alt="" style={{width: "30%"}}/>
            </Card>
            <Card>
              <img src={Corn} alt="" style={{width: "100%", height: "auto"}} />
            </Card>
            <Card>
              <h1>Fresh Vegetables</h1>
              <p>Nullam porta enim vel tellus commodo, <br />
              eget laoreet odio ultrices.
              </p>
              <img src={ProductIcon} alt="" style={{width: "30%"}} />
            </Card>
          </ChoseCtnCard>
        </ChoseCtn>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <TestimonialsSection>
          <h1>What Our Customers Says</h1>

          <TestimonialsWrapper>
            <TestimonialCard>
              <Avatar src={Avatar1} alt="Daniel" />
              <Name>Daniel Smith</Name>
              <Role>Organic Farmer</Role>
              <Text>
                "The quality of the organic products is simply outstanding.  
                Fresh, clean and delivered on time. Highly recommended!"
              </Text>
            </TestimonialCard>

            <TestimonialCard>
              <Avatar src={Avatar2} alt="Ameliya" />
              <Name>Ameliya Jones</Name>
              <Role>Eco Activist</Role>
              <Text>
                "I love how sustainable and eco-friendly this company is.  
                Their service and products are top notch!"
              </Text>
            </TestimonialCard>

            <TestimonialCard>
              <Avatar src={Avatar3} alt="Henry" />
              <Name>Henry Cooper</Name>
              <Role>Food Supplier</Role>
              <Text>
                "Always fresh, always high quality. Working with them is a pleasure.  
                Perfect for long-term business."
              </Text>
            </TestimonialCard>
          </TestimonialsWrapper>
        </TestimonialsSection>

        {/* Logos / partners row (under testimonials) */}
        <LogosWrapper>
          <LogosRow>
            <LogoItem src={OrganicRiceIcon} alt="organic rice" />
            <LogoItem src={FarmIcon2} alt="farm" />
            <LogoItem src={FarmFreshIcon} alt="farm fresh" />
            <LogoItem src={FoodIcon} alt="food" />
            <LogoItem src={EcoProduct} alt="eco product" />
            <LogoItem src={TractorIcon} alt="tractor" />
          </LogosRow>
        </LogosWrapper>

        <TimelineSection>
          <TopArea>
            <LeftTitle>
              <Chip>🌿 Our History</Chip>
              <MainTitle2>Start of Agriculture</MainTitle2>
              <YearTitle>1866</YearTitle>
            </LeftTitle>

            <RightText>
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even.
            </RightText>
          </TopArea>

          <TimelineBar />
          <TimelineDots>
            <Dot /> <Dot /> <Dot /> <Dot />
          </TimelineDots>

          <ItemsRow>
            {timeline.map((item, idx) => (
              <TimelineItem key={idx}>
                <ItemYear>{item.year}</ItemYear>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemText>{item.text}</ItemText>
              </TimelineItem>
            ))}
          </ItemsRow>
        </TimelineSection>
      </HomeCtn>
      <Footer />
    </>
  );
}