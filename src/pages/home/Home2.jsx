import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FarmingImagee from "../../pages/home/home2Png/farmerGirl.png";
import TheFarmer from "../../pages/home/home2Png/farmerOldMan.png";
import WhatTechnology from "../../pages/home/home3Png/whatTechnology.png";
import WhichType from "../../pages/home/home3Png/whichType.png";
import BgImageMain from "../../pages/home/home2Png/background.png";
import BgPattern from "../../pages/home/home3Png/NewBg2.png";
import Tractor from "../../pages/home/home3Png/TractorSmall.png";
import TheFarmerr from "../../pages/home/home3Png/theFarmer.png";
import Soil from "../../pages/home/home2Png/soil.png";
import Dorichi from "../../pages/home/home2Png/Dorichi.jpg";
import Girl from "../../pages/home/home2Png/2farmer.png";
import Mans from "../../pages/home/home2Png/Daladagilar.jpg";
import Agriculture from "../../pages/home/home2Png/AgricultureMat.png";
import Carrot from "../../pages/home/home2Png/carrot.png";
import List from "../../pages/home/home2Png/List.png";
import OtOradigan from "../../pages/home/home2Png/OtOradigan.png";
import Traktor from "../../pages/home/home2Png/Traktor3.png";
import Milk from "../../pages/home/home2Png/Milk.png";
import Ecology from "../../pages/home/home2Png/Ecology.png";
import Bugdoy from "../../pages/home/home2Png/Bugdoy.png";
import Carla from "../../pages/home/home2Png/Carla.png";
import Jacob from "../../pages/home/home2Png/Jacob.png";
import Paula from "../../pages/home/home2Png/Paula.png";
import Clara from "../../pages/home/home2Png/Clara.jpg";
import organicRiceIcon from "../home/home3Png/organicRiceIcon.png";
import farmIcon from "../home/home3Png/farmIcon.png";
import freshFarmIcon from "../home/home3Png/freshFarmIcon.png";
import foodIcon from "../home/home3Png/foodIcon.png";
import ecoProduct from "../home/home3Png/ecoProduct.png";
import traktorIcon from "../home/home3Png/traktorIcon.png";
import FermerVegetable from "../../pages/home/home2Png/FermerVegetable.png";
import TelIcon from "../../pages/home/home3Png/telephoneIcon.png";
import MailIcon from "../../pages/home/home3Png/messageIcon.png";
const Hero = styled.section`
    height: 72vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80');
    background-size: cover;
    background-position: center;
    border-radius: 30px;
    width:1460px;
    margin-left:17px;
`;

const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35));
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
    max-width: 980px;
    padding: 40px 20px;
`;

const Badge = styled.div`
    display: inline-block;
    background: rgba(255,255,255,0.12);
    color: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 0.6px;
    margin-bottom: 18px;
`;

const Title = styled.h1`
    font-size: 4rem;
    line-height: 1.02;
    margin: 8px 0;
    font-weight: 700;
    font-family: "Signika", sans-serif;
    text-shadow: 0 6px 20px rgba(0,0,0,0.45);
`;

const Subtitle = styled.h2`
    width: 864px;
    height: auto;
    margin: 8px 0 22px 0;
    font-weight: 500;
    font-family: "Signika", sans-serif;
    color: rgba(255,255,255,0.95);
`;

const CTA = styled.a`
    display: inline-block;
    background: #fff;
    color: #1a1a1a;
    padding: 12px 26px;
    font-family: "Signika", sans-serif;
    border-radius: 28px;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(0,0,0,0.2);
`;

const BigContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    background: rgba(0,0,0,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;
`;

const AboutWrapper = styled.section`
    max-width: 1500px;
    width:1500px;
    margin: 40px auto 80px auto;
    padding: 24px;
    height:900px;
    flex-direction:column;
    background-image: url(${BgPattern});
    display:flex;
    justify-content:center;
    align-items:center;
    background-position: center;
    background-color:rgba(237, 221, 94, 1);
`;

const TopStrip = styled.div`
    width: 100%;
    padding: 18px 0;
`;

const TopInner = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left:110px;
`;

const Avatars = styled.div`
    display:flex;
    gap:6px;
    align-items:center;
`;

const Avatar = styled.img`
    width:34px;
    height:34px;
    border-radius:50%;
    object-fit:cover;
    border:2px solid rgba(0,0,0,0.06);
`;

const ContactText = styled.div`
    font-size:14px;
    font-family:"Signika", sans-serif;
    font-weight: 500;
    color:#3a3a2e;
`;

const CenterMarker = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:0 0 80px;
`;

const DownCircle = styled.div`
    width:72px;
    height:72px;
    border-radius:50%;
    margin-left:50px;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
    color:#31432a;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
`;

const RightGroup = styled.div`
    display:flex;
    align-items:center;
    margin-right:110px;
    gap:12px;
`;

const RightText = styled.div`
    color:#31432a;
    font-family:"Signika", sans-serif;  
    font-weight: 500;
    font-size:14px;
    max-width:420px;
`;

const Thumb = styled.img`
    width:78px;
    height:54px;
    object-fit:cover;
    border-radius:10px;
    box-shadow:0 6px 18px rgba(0,0,0,0.08);
`;

const AboutInner = styled.div`
    background: #fff;
    border-radius: 18px;
    padding: 36px;
    display: flex;
    width:1200px;
    gap: 32px;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const LeftImage = styled.img`
    width: 52%;
    border-radius: 18px;
    object-fit: cover;
`;

const RightContent = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const TopSmall = styled.img`
    width: 420px;
    height: 210px;
    margin-right:100px;
    object-fit: cover;
    border-radius: 12px;
    align-self: flex-end;
`;

const AboutTitle = styled.h3`
    font-size: 22px;
    color: #31432a;
    margin: 6px 0;
`;

const AboutText = styled.p`
    color: #727a6a;
    line-height: 1.6;
    margin-bottom: 8px;
`;

const Features = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 8px;
`;

const FeatureColumn = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const FeatureItem = styled.li`
    color: #6b6f61;
    position: relative;
    padding-left: 22px;
    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 10px;
        height: 10px;
        background: #f6d859;
        border-radius: 50%;
    }
`;

const KnowMore = styled.a`
    display: inline-block;
    margin-top: 18px;
    background: #5b8c51;
    color: #fff;
    padding: 10px 18px;
    border-radius: 22px;
    text-decoration: none;
    width: fit-content;
`;

/* ------------------ Services Section ------------------ */
const ServicesSection = styled.section`
    width: 100%;
    padding: 80px 20px 120px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ServicesInner = styled.div`
    max-width: 1400px;
    width: 100%;
    margin-top:100px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const ServicesHeader = styled.div`
    max-width: 1200px;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:18px;
    margin-bottom: 8px;
`;

const ServiceBadge = styled.div`
    display:inline-block;
    background:#fff;
    color: #5b8c51;
    padding:8px 16px;
    border-radius:20px;
    font-weight:600;
    font-family:"Signika", sans-serif;
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
`;

const ServicesTitle = styled.h2`
    font-size: 44px;
    color: #31432a;
    margin: 0;
    font-weight: 700;
    text-align: center;
    font-family: "Signika", sans-serif;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    width: 100%;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

const ServiceCard = styled.div`
    background: rgba(0,0,0,0.02);
    border-radius: 18px;
    height:300px;
    padding: 30px 24px;
    display:flex;
    flex-direction:column;
    gap:18px;
    min-height:180px;
    border: 1px solid rgba(91,140,81,0.12);
    position: relative;
    color: #31432a;
`;

const FeaturedServiceCard = styled(ServiceCard)`
    background: #fff;
    border: none;
    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
`;

const CardIcon = styled.div`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f6d859;
    display:flex;
    align-items:center;
    justify-content:center;
    color: #31432a;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
`;

const CardTitle = styled.h4`
    margin: 0;
    font-size: 18px;
    color: rgba(64, 74, 61, 1);
    font-weight: 500;
    font-family: "Signika", sans-serif;
`;

const CardDesc = styled.p`
    margin: 0;
    color: rgba(102, 102, 102, 1);
    font-size: 13px;
    line-height: 1.6;
    margin-top:130px;
`;

/* ------------------ Farmers Section ------------------ */
const FarmersSection = styled.section`
    width: 100%;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    background:rgba(0, 0, 0, 1);
`;

const FarmersInner = styled.div`
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const FarmersHeader = styled.div`
    text-align: center;
    max-width: 800px;
`;

const FarmersTitle = styled.h2`
    font-size: 44px;
    color: #31432a;
    margin: 20px 0 10px 0;
    font-weight: 700;
    font-family: "Signika", sans-serif;
`;

const FarmersSubtitle = styled.p`
    color: #727a6a;
    font-size: 16px;
    line-height: 1.6;
`;

const FarmersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FarmerCard = styled.div`
    background: #000000;
    border-radius: 18px;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-10px);
    }
`;

const LogosSection = styled.section`
  max-width: 1200px;
  margin: 20px auto 60px;
  padding: 18px 16px;
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  padding: 18px 28px;
  border-radius: 14px;
`;

const LogoItem = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
`;

const FarmerImage = styled.img`
    width: 240px;
    height: auto;
    border-radius: 30px;
    object-fit: cover;
    margin-bottom: 20px;
    border: 4px solid #f6d859;
`;

const FarmerRole = styled.div`
    font-size: 12px;
    color: #5b8c51;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 8px;
    font-family: "Signika", sans-serif;
`;

const FarmerName = styled.h3`
    font-size: 20px;
    color: #31432a;
    margin: 0 0 15px 0;
    font-weight: 600;
    font-family: "Signika", sans-serif;
`;

const FarmerDescription = styled.p`
    color: #727a6a;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
`;

/* ------------------ Promo Banner Section ------------------ */
const PromoSection = styled.section`
    width: 100%;
    display: flex;
    height:300px;
    justify-content: center;
    padding: 28px 20px;
    position: relative;
    margin-top: 32px;
`;

const PromoBackground = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${Bugdoy});
    background-size: cover;
    background-position: center;
    opacity: 1;
`;

const PromoOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25));
`;

const PromoInner = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1400px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 28px 40px;
    border-radius: 12px;
    color: #fff;
`;

const PromoIcon = styled.div`
    min-width: 84px;
    min-height: 84px;
    border-radius: 50%;
    background: #f6d859;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

const PromoTitle = styled.h3`
    margin: 0;
    font-size: 45px;
    font-weight: 500;
    color: #fff;
    line-height: 1.08;
    font-family: "Signika", sans-serif;
`;

const PromoSpacer = styled.div`
    flex: 1 1 auto;
`;

const PromoButton = styled.a`
    display: inline-block;
    background: rgba(255,255,255,0.95);
    color: #1a1a1a;
    padding: 12px 22px;
    border-radius: 28px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
`;

/* ------------------ Process / Steps Section ------------------ */
const ProcessSection = styled.section`
    width: 100%;
    padding: 80px 20px 120px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(91,140,81,1);
    color: #fff;
`;

const ProcessInner = styled.div`
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

const ProcessImage = styled.img`
    width: 500px;
    margin-left:100px;
    border-radius: 12px;
    height:auto;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
`;

const StepsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const StepItem = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
`;

const StepNumberOutline = styled.div`
    min-width: 120px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 72px;
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 3px rgba(255,255,255,0.95);
    line-height: 1;
`;

const StepContent = styled.div`
    display:flex;
    flex-direction:column;
    gap:6px;
`;

const StepTitle = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
`;

const StepText = styled.div`
    color: rgba(255,255,255,0.9);
    font-size: 13px;
    max-width: 420px;
`;

const StepsIntro = styled.p`
    color: rgba(255,255,255,0.95);
    font-size: 16px;
    line-height: 1.6;
    max-width: 520px;
    margin-top:50px;
`;

const ContainerForImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ForAgrImg = styled.img`
    width: 500px;
    margin-left:100px;
    height: auto;
    margin-bottom:30px;
`;

/* ------------------ Quote Section ------------------ */
const QuoteSection = styled.section`
    width: 100%;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    background: #fff;
`;

const QuoteInner = styled.div`
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const QuoteLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const QuoteBadge = styled.div`
    display: inline-block;
    background: #f6d859;
    color: #31432a;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    font-family: "Signika", sans-serif;
    width: fit-content;
`;

const QuoteTitle = styled.h2`
    font-size: 48px;
    color: #31432a;
    margin: 0;
    font-weight: 700;
    font-family: "Signika", sans-serif;
    line-height: 1.1;
`;

const QuoteSubtitle = styled.h3`
    font-size: 32px;
    color: #5b8c51;
    margin: 0;
    font-weight: 600;
    font-family: "Signika", sans-serif;
`;

const QuoteText = styled.p`
    color: #727a6a;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
`;

const FarmerImageLarge = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const QuoteRight = styled.div`
    background: #f8f9f5;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
`;

const FormTitle = styled.h3`
    font-size: 28px;
    color: #31432a;
    margin: 0 0 30px 0;
    font-weight: 600;
    font-family: "Signika", sans-serif;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FormLabel = styled.label`
    font-size: 14px;
    color: #31432a;
    font-weight: 500;
    font-family: "Signika", sans-serif;
`;

const FormInput = styled.input`
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-family: "Signika", sans-serif;
    background: #fff;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #5b8c51;
    }
`;

const FormTextarea = styled.textarea`
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid #ddd;
    font-size: 16px;
    font-family: "Signika", sans-serif;
    background: #fff;
    min-height: 120px;
    resize: vertical;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #5b8c51;
    }
`;

const SubmitButton = styled.button`
    background: #5b8c51;
    color: #fff;
    padding: 16px 32px;
    border-radius: 12px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    font-family: "Signika", sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;

    &:hover {
        background: #4a7a40;
    }
`;



const BlogSection = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 40px auto 120px;
  padding-left: 15px;
  padding-right: 15px;
`;

const BlogTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const BlogHeading = styled.h2`
  font-size: 48px;
  color: #374736;
  margin: 0;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const BlogCard = styled.div`
  border-radius: 24px;
  overflow: hidden;


`;


const FooterYellowWrapper = styled.footer`
  width: 100%;
  background: #e9df59;
  padding: 16px 0;
  /* margin-top: 100px; */
`;


const ContactText1 = styled.div``;



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

const BlogImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
`;
const ArrowButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const BlogBody = styled.div`
  padding: 22px 24px 30px;
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
`;

const BlogExcerpt = styled.p`
  color: #6b756b;
  font-size: 15px;
  margin: 0 0 12px;
`;

const ReadBtn = styled.button`
  background: #e9df59;
  border: none;
  padding: 10px 12px;
  border-radius: 20px;
  cursor: pointer;
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
`;

export default function Home2() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form yuborish logikasi
        console.log("Form submitted");
    };

    return (
        <BigContainer>
            <Header />
            <Hero>
                <Overlay />
                <Content>
                    <Badge>BENEFICIAL FOR HEALTH</Badge>
                    <Title>Experience</Title>
                    <Subtitle>The Power of Nature</Subtitle>
                    <CTA href="/contact">Contact Us</CTA>
                </Content>
            </Hero>
            
            <AboutWrapper>
                <TopStrip>
                <TopInner>
                    <LeftGroup>
                        <Avatars>
                            <Avatar src={FarmingImagee} alt="a" />
                            <Avatar src={TheFarmer} alt="b" />
                        </Avatars>
                        <ContactText>
                            Any questions? Reach us at<br/>
                             <strong>966 355 965 57</strong> - Toll free
                        </ContactText>
                    </LeftGroup>

                    <CenterMarker>
                        <DownCircle>↓</DownCircle>
                    </CenterMarker>

                    <RightGroup>
                        <RightText>Agriculture Matters <br/> to the Future of Development</RightText>
                        <Thumb src={Tractor} alt="video thumb" />
                    </RightGroup>
                </TopInner>
            </TopStrip>
                <AboutInner>
                    <LeftImage src={TheFarmer} alt="the farmer" />
                    <RightContent>
                        <TopSmall src={FarmingImagee} alt="small" />
                        <AboutTitle>We're Committed to Caring.</AboutTitle>
                        <AboutText>
                            Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to consumers.
                        </AboutText>

                        <Features>
                            <FeatureColumn>
                                <FeatureItem>Gourmet Mushrooms</FeatureItem>
                                <FeatureItem>Natural Healthy Products</FeatureItem>
                                <FeatureItem>Lavender Farming</FeatureItem>
                            </FeatureColumn>
                            <FeatureColumn>
                                <FeatureItem>Best Quality Standards</FeatureItem>
                                <FeatureItem>Fertilizer Distribution</FeatureItem>
                                <FeatureItem>Organic Fertilizer</FeatureItem>
                            </FeatureColumn>
                        </Features>

                        <KnowMore href="/about">Know More ↗</KnowMore>
                    </RightContent>
                </AboutInner>
            </AboutWrapper>
            
            {/* Quote Section */}
          
            
            <ProcessSection>
                <ProcessInner>
                    <ContainerForImg>
                    <ForAgrImg src={Agriculture} alt="agriculture" />
                    <div>
                        <ProcessImage src={Mans} alt="process" />
                    </div>
                    </ContainerForImg>

                    <StepsWrap>
                          <StepsIntro>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected humour, or randomised words
                        which don't look even.
                    </StepsIntro>
                        <StepItem>
                            <StepNumberOutline>01</StepNumberOutline>
                            <StepContent>
                                <StepTitle>Schedule Your Experience</StepTitle>
                                <StepText>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</StepText>
                            </StepContent>
                        </StepItem>

                        <StepItem>
                            <StepNumberOutline>02</StepNumberOutline>
                            <StepContent>
                                <StepTitle>Get Professional Advice</StepTitle>
                                <StepText>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</StepText>
                            </StepContent>
                        </StepItem>

                        <StepItem>
                            <StepNumberOutline>03</StepNumberOutline>
                            <StepContent>
                                <StepTitle>Meet Our Expert Farmer</StepTitle>
                                <StepText>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</StepText>
                            </StepContent>
                        </StepItem>

                        <StepItem>
                            <StepNumberOutline>04</StepNumberOutline>
                            <StepContent>
                                <StepTitle>Now Get A Best Products</StepTitle>
                                <StepText>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</StepText>
                            </StepContent>
                        </StepItem>
                    </StepsWrap>
                </ProcessInner>
            </ProcessSection>


              <ServicesSection>
                <ServicesInner>
                    <ServicesHeader>
                        <ServiceBadge>We Trust In Nature</ServiceBadge>
                        <ServicesTitle>Anyone Can Make Eco-Friendly Products From Scratch</ServicesTitle>
                    </ServicesHeader>

                    <ServicesGrid>
                        <ServiceCard>
                            <CardIcon>
                                <img src={Ecology} alt="ecology" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Agriculture Products</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </ServiceCard>

                        <FeaturedServiceCard>
                            <CardIcon>
                                <img src={Traktor} alt="tractor" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Professional Farmers</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </FeaturedServiceCard>

                        <ServiceCard>
                            <CardIcon>
                                <img src={Carrot} alt="carrot" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Fresh Vegetables</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </ServiceCard>

                        <ServiceCard>
                            <CardIcon>
                                <img src={Milk} alt="milk" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Dairy Products</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </ServiceCard>

                        <ServiceCard>
                            <CardIcon>
                                <img src={List} alt="list" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Quality Products</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </ServiceCard>

                        <ServiceCard>
                            <CardIcon>
                                <img src={OtOradigan} alt="equipment" style={{width: '28px', height: '28px'}} />
                            </CardIcon>
                            <CardTitle>Modern Equipment</CardTitle>
                            <CardDesc>There are many variations of passages of lorem ipsum available but the majority have suffered alteration.</CardDesc>
                        </ServiceCard>
                    </ServicesGrid>

                </ServicesInner>
            </ServicesSection>
            
                <PromoSection>
                    <PromoBackground />
                    <PromoOverlay />
                    <PromoInner>
                        <PromoIcon>
                            <img src={Ecology} alt="icon" style={{width:44, height:44}} />
                        </PromoIcon>

                        <PromoTitle>We're popular leader in <br/>agriculture market globally</PromoTitle>

                        <PromoSpacer />

                        <PromoButton href="/services">Discover More ↗</PromoButton>
                    </PromoInner>
                </PromoSection>

                  <FarmersSection>
                <FarmersInner>
                    <FarmersHeader>
                        <ServicesTitle>Meet the Farmers</ServicesTitle>
                        <FarmersSubtitle>
                            Our dedicated team of professionals who work tirelessly to bring you the best organic products.
                        </FarmersSubtitle>
                    </FarmersHeader>
                    
                    <FarmersGrid>
                        <FarmerCard>
                            <FarmerImage src={Jacob} alt="CEO" />
                            <FarmerRole>CEO DENNEN</FarmerRole>
                            <FarmerName>Jacob Mersin</FarmerName>
                            <FarmerDescription>
                                Leading our farm with over 20 years of experience in organic agriculture.
                            </FarmerDescription>
                        </FarmerCard>
                        
                        <FarmerCard>
                            <FarmerImage src={Clara} alt="Supervisor" />
                            <FarmerRole>SUPERVISOR</FarmerRole>
                            <FarmerName>Clara Henry</FarmerName>
                            <FarmerDescription>
                                Ensures all farming practices meet our strict organic standards.
                            </FarmerDescription>
                        </FarmerCard>
                        
                        <FarmerCard>
                            <FarmerImage src={Paula} alt="Manager" />
                            <FarmerRole>MANAGER</FarmerRole>
                            <FarmerName>Paula Den</FarmerName>
                            <FarmerDescription>
                                Manages daily operations and coordinates our distribution network.
                            </FarmerDescription>
                        </FarmerCard>
                        
                        <FarmerCard>
                            <FarmerImage src={Carla} alt="Marketing" />
                            <FarmerRole>MARKETING</FarmerRole>
                            <FarmerName>Carla Hall</FarmerName>
                            <FarmerDescription>
                                Connects our products with communities who value organic living.
                            </FarmerDescription>
                        </FarmerCard>
                    </FarmersGrid>
                </FarmersInner>
            </FarmersSection>



            
                  <LogosSection>
                    <LogosContainer>
                      <LogoItem>
                        <img src={organicRiceIcon} alt="organic rice" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
            
                      <LogoItem>
                        <img src={farmIcon} alt="farm" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
            
                      <LogoItem>
                        <img src={freshFarmIcon} alt="farm fresh" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
            
                      <LogoItem>
                        <img src={foodIcon} alt="food" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
            
                      <LogoItem>
                        <img src={ecoProduct} alt="eco product" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
            
                      <LogoItem>
                        <img src={traktorIcon} alt="tractor" style={{maxWidth: '100%', maxHeight: '100%'}} />
                      </LogoItem>
                    </LogosContainer>
                  </LogosSection>


                    <QuoteSection>
                <QuoteInner>
                    <QuoteLeft>
                        <QuoteBadge>Founded in 1996</QuoteBadge>
                        <QuoteTitle>Free Quote</QuoteTitle>
                        <QuoteSubtitle>Get a free quote</QuoteSubtitle>
                        <QuoteText>
                            Our experienced team is ready to provide you with a personalized quote for all your agricultural needs. 
                            Contact us today and discover how we can help you achieve your farming goals.
                        </QuoteText>
                        <FarmerImageLarge src={FermerVegetable} alt="Farmer with vegetables" />
                    </QuoteLeft>
                    
                    <QuoteRight>
                        <FormTitle>Send Message</FormTitle>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <FormLabel>Your Name</FormLabel>
                                <FormInput type="text" placeholder="Enter your full name" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Phone Number</FormLabel>
                                <FormInput type="tel" placeholder="Enter your phone number" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Email Address</FormLabel>
                                <FormInput type="email" placeholder="Enter your email address" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Subject</FormLabel>
                                <FormInput type="text" placeholder="Enter subject of your message" required />
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Message</FormLabel>
                                <FormTextarea placeholder="Enter your message here..." required />
                            </FormGroup>
                            
                            <SubmitButton type="submit">Send Message</SubmitButton>
                        </Form>
                    </QuoteRight>
                </QuoteInner>
            </QuoteSection>


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
                        <BlogImg src={WhatTechnology} alt="post 1" />
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
                        <BlogImg src={WhichType} alt="post 2" />
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
                        <BlogImg src={TheFarmerr} alt="post 3" />
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
                                                              <img src={TelIcon} alt="phone" style={{width:18}} />
                                                            </IconCircle>
                                                            <ContactText1>+1(212) 255-511</ContactText1>
                                                          </ContactItem>
                                              
                                                          <ContactItem>
                                                            <IconCircle>
                                                              <img src={MailIcon} alt="mail" style={{width:18}} />
                                                            </IconCircle>
                                                            <ContactText1>noreply@pbminfotech.com</ContactText1>
                                                          </ContactItem>
                                                        </ContactGroup>
                                                      </FooterYellowContainer>
                                                    </FooterYellowWrapper>


                                                    <Footer/>
        </BigContainer>
    );
}