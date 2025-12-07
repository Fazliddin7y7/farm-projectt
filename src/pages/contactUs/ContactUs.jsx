import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// background image for hero
import TheFarmer from "../blog/blogPng/BgImg.jpg";
import Mail from "../blog/blogPng/Mail.png";
import Location from "../blog/blogPng/Location.png";
import Phone from "../blog/blogPng/PhoneCall.png";
import FarmerGirl from "../blog/blogPng/FarmerGirl.jpg";
import organicRiceIcon from "../home/home3Png/organicRiceIcon.png";
import farmIcon from "../home/home3Png/farmIcon.png";
import freshFarmIcon from "../home/home3Png/freshFarmIcon.png";
import foodIcon from "../home/home3Png/foodIcon.png";
import ecoProduct from "../home/home3Png/ecoProduct.png";
import traktorIcon from "../home/home3Png/traktorIcon.png";
import Map from "../blog/blogPng/Map.png";
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
     background-image: url(${TheFarmer});
     background-size: cover;
     background-position: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  color: white;
`;

const Breadcrumb = styled.div`
  font-size: 13px;
  color: rgba(255,255,255,0.9);
  font-family: "Signika", sans-serif;
  margin-bottom: 8px;
  font-weight: 500;
`;

const PageTitle = styled.h1`
  font-family: "Signika", sans-serif;
  font-size: 44px;
  margin: 0;
  font-weight: 500;
  margin-top:240px;
  color: #fff;
`;

/* Contact cards section (replaces posts grid) */
const ContactCardsSection = styled.section`
  max-width: 1200px;
  margin: 20px auto 60px;
  margin-top: 300px;
  padding: 0 16px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;

const ContactCard = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 28px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
`;

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #f0d14b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #27492a;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 20px;
  color: #27492a;
  margin-left: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  background: #eee;
  margin: 12px 0 18px 0;
`;

const CardText = styled.div`
  color: #6b756b;
  font-size: 14px;
  line-height: 1.8;
`;

const SmallRound = styled.div`
  position: absolute;
  right: -12px;
  bottom: -12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
  color: #27492a;
`;

/* Contact form section (image left, form right) */
const ContactFormSection = styled.section`
  max-width: 1200px;
  margin: 40px auto 80px;
  margin-top:150px;
  padding: 0 16px;
  height: 520px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeftImage = styled.div`
  width: 100%;
  border-radius: 18px;
  /* overflow: hidden; */
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  height: 550px;
  background-image: url(${FarmerGirl});
  background-size: cover;
  background-position: center;
`;

const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SmallBadge = styled.div`
  display: inline-block;
  background: #eef6ea;
  color: #6b886e;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
  width: fit-content;
`;

const FormTitle = styled.h2`
  font-family: "Signika", sans-serif;
  font-size: 44px;
  font-weight: 500;
  margin: 6px 0 0 0;
  color: #27492a;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  background: #fff;
  font-size: 14px;
  color: #4b5b4b;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  min-height: 140px;
  resize: vertical;
  font-size: 14px;
  color: #4b5b4b;
`;

const SubmitButton = styled.button`
  background: #5a9454;
  color: #fff;
  border: none;
  padding: 12px 26px;
  border-radius: 30px;
  font-size: 15px;
  width: fit-content;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(90,148,84,0.18);
`;

/* Logos / partners row */
const LogosSection = styled.section`
  max-width: 1200px;
  margin: 20px auto 60px;
  padding: 18px 16px;
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 18px 28px;
  border-radius: 14px;
`;

const LogoItem = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
`;

/* Full-width map image that covers screen width, height auto */
const MapWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MapImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
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

const IconCircle1 = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;





const contactCards = [
  {
    icon: <img style={{fontSize: "12px"}} src={Mail} alt="Mail" />,
    title: "Mail us 24/7",
    lines: ["pbminfo@admin.com", "pbmadmin@info.com"],
  },
  {
    icon: <img style={{fontSize: "12px"}} src={Phone} alt="Phone" /> ,
    title: "Call us 24/7",
    lines: ["Phone : (+55) 654 - 545 - 5418", "Mobile : (+01) 654 - 545 - 1235"],
  },
  {
    icon: <img style={{fontSize: "12px"}} src={Location} alt="Location" /> ,
    title: "Our Locations",
    lines: ["4821 Ride Top, Anch St, Alaska", "997998, USA main city."],
  },
];

export default function ContactUs() {
  return (
    <>
      <Header />

      <HeroSection>
        <HeroBg />
        <HeroContent>
          <PageTitle>Contact Us</PageTitle>
          <Breadcrumb>AGRIMO &nbsp;&gt;&nbsp; CONTACT US</Breadcrumb>
        </HeroContent>
      </HeroSection>

      <ContactCardsSection>
        <CardsGrid>
          {contactCards.map((c, i) => (
            <ContactCard key={i}>
              <CardHeader>
                <IconCircle>{c.icon}</IconCircle>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>

              <Hr />

              <CardText>
                {c.lines.map((l, idx) => (
                  <div key={idx}>{l}</div>
                ))}
              </CardText>

              <SmallRound>↗</SmallRound>
            </ContactCard>
          ))}
        </CardsGrid>
      </ContactCardsSection>

      <ContactFormSection>
        <FormGrid>
          <LeftImage />

          <RightForm>
            <SmallBadge>Get To Contact Us</SmallBadge>
            <FormTitle>Have a any Questions? 
              <br/>
              Get in Touch!</FormTitle>

            <InputRow>
              <Input type="text" placeholder="Your Name" />
              <Input type="text" placeholder="Phone Number" />
            </InputRow>

            <InputRow>
              <Input type="email" placeholder="Email Address" />
              <Input type="text" placeholder="Subject" />
            </InputRow>

            <Textarea placeholder="Write Message"></Textarea>

            <div>
              <SubmitButton>Send Massage ↗</SubmitButton>
            </div>
          </RightForm>
        </FormGrid>
      </ContactFormSection>

     

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

      <MapWrapper>
        <MapImg src={Map} alt="map" />
      </MapWrapper>

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
                                                <IconCircle1>
                                                  <img src={TelIcon} alt="phone" style={{width:18}} />
                                                </IconCircle1>
                                                <ContactText>+1(212) 255-511</ContactText>
                                              </ContactItem>
                                  
                                              <ContactItem>
                                                <IconCircle1>
                                                  <img src={MailIcon} alt="mail" style={{width:18}} />
                                                </IconCircle1>
                                                <ContactText>noreply@pbminfotech.com</ContactText>
                                              </ContactItem>
                                            </ContactGroup>
                                          </FooterYellowContainer>
                                        </FooterYellowWrapper>

      <Footer />
    </>
  );
}
