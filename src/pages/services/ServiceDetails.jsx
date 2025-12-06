import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgroundImg from "./serviceDetailsPng/background.png";

const ServiceDetailsCtn = styled.div`
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
const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

/* ===== LEFT CONTENT ===== */
const LeftContent = styled.div``;

const ServiceTitle = styled.h1`
  font-size: 42px;
  color: #2d5a27;
  font-weight: 700;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 16px;
    color: #2d5a27;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const WhySection = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #2d5a27;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const WhyDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  text-align: center;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 20px;
    color: #2d5a27;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto 15px;
`;

const ModernSection = styled.div`
  margin-bottom: 50px;
`;

const ModernPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PointItem = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h4 {
    font-size: 16px;
    color: #2d5a27;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

const FaqSection = styled.div``;

const FaqItem = styled.div`
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 18px;
    color: #2d5a27;
    margin-bottom: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
  }
`;

const QuestionNumber = styled.span`
  color: #4CAF50;
  font-weight: 700;
`;

/* ===== RIGHT SIDEBAR ===== */
const Sidebar = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  height: fit-content;
  
  @media (max-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 22px;
  color: #2d5a27;
  margin-bottom: 25px;
  font-weight: 700;
  text-align: center;
`;

const ContactButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #45a049;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  
  h4 {
    font-size: 18px;
    color: #2d5a27;
    margin-bottom: 15px;
    font-weight: 600;
  }
  
  p {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

const ServiceList = styled.div`
  margin-bottom: 30px;
  
  h4 {
    font-size: 18px;
    color: #2d5a27;
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

const ServiceListItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: #666;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DownloadButton = styled.a`
  display: block;
  width: 100%;
  padding: 15px;
  background: white;
  color: #4CAF50;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #4CAF50;
    color: white;
  }
`;

export default function ServiceDetails() {
    const services = [
        "CARAMON PRODUCTS",
        "CHILI ELEVELATIONS",
        "PRESENTECIPITALS",
        "BLUE PRODUCTION",
        "PRODUCT SERVICES",
        "MICHAEL CURRYSS",
        "WINTERING SOLUTIONS",
        "ORIGINAL VECTORIALS"
    ];

    const steps = [
        {
            number: "01",
            title: "Schedule Your Experience",
            description: "Consequat knowledge design method has been constructed as a reliable means video code temporibus."
        },
        {
            number: "02",
            title: "Get Professional Advice",
            description: "Consequat a conceptually integrated vision on commercial world, our team takes code temporibus."
        },
        {
            number: "03",
            title: "Meet Our Expert People",
            description: "Consequat conceptually integrated vision on commercial world, our team takes code temporibus."
        }
    ];

    const modernPoints = [
        {
            title: "Main objective: putting crops as your form of its land."
        },
        {
            title: "Locally services: what is represented by the service?"
        },
        {
            title: "How 'learned' about and how did it start during meal?"
        },
        {
            title: "Main the contribution: make the next journey."
        }
    ];

    const faqs = [
        {
            number: "01",
            question: "What is Agricultural Biotechnology?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        },
        {
            number: "02",
            question: "Can the products be applied during rainy season?",
            answer: ""
        },
        {
            number: "03",
            question: "What vegetables can I grow in my hothouse?",
            answer: ""
        }
    ];

    const sidebarServices = [
        "MARKET CONCEPTS",
        "FARMING PRODUCTS",
        "SQL FERTILIZATION",
        "FRESH VEGETABLES",
        "DARK PRODUCTION",
        "PRODUCT SUPPLIES",
        "NATURAL CARROTS",
        "NUTRITION SOLUTIONS",
        "ORGANIC VEGETABLES"
    ];

    return (
        <>
            <Header />
            <ServiceDetailsCtn>
                {/* Banner Section */}
                <Banner>
                    <img src={BackgroundImg} alt="Service Details Background" />
                    <BannerOverlay>
                        <BannerTitle>Harvest Concepts</BannerTitle>
                        <Breadcrumb>
                            <span>AGENNO</span>
                            <span>›</span>
                            <span>SERVICES</span>
                            <span>›</span>
                            <span>FERTILIZER</span>
                            <span>›</span>
                            <span className="active">HARVEST CONCEPTS</span>
                        </Breadcrumb>
                    </BannerOverlay>
                </Banner>

                <MainContent>
                    {/* Left Content */}
                    <LeftContent>
                        <ServiceTitle>Harvest Concepts</ServiceTitle>
                        
                        <ServiceDescription>
                            Professional & modern, a theme designed to help your business stand out from the rest.
                        </ServiceDescription>
                        
                        {/* Services Grid */}
                        <ServicesGrid>
                            {services.map((service, index) => (
                                <ServiceItem key={index}>
                                    <h3>{service}</h3>
                                </ServiceItem>
                            ))}
                        </ServicesGrid>
                        
                        {/* Why Choose Our Services */}
                        <WhySection>
                            <SectionTitle>Why Choose Our Services</SectionTitle>
                            <WhyDescription>
                                Agriculture, with its allied sectors, is unquestionably the largest livelihood provider in India, 
                                more so in the vast areas agriculture, in terms of food security, rural employment, and sustainable 
                                technologies such as soil are essential for holistic rural development.
                            </WhyDescription>
                            <WhyDescription>
                                During the initial years of introduction of the modern crop varieties, micronutrient deficiency 
                                disorders were discovered as an obstacle to obtain higher yields. Sustainable management of natural 
                                resources for achieving food, nutritional, environmental and livelihood security in the country.
                            </WhyDescription>
                        </WhySection>
                        
                        {/* Steps Grid */}
                        <StepsGrid>
                            {steps.map((step, index) => (
                                <StepCard key={index}>
                                    <StepNumber>{step.number}</StepNumber>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </StepCard>
                            ))}
                        </StepsGrid>
                        
                        {/* Modern Technique Work Points */}
                        <ModernSection>
                            <SectionTitle>Modern Technique Work Points</SectionTitle>
                            <WhyDescription>
                                To plan, coordinate and monitor R & D programmes for sustainable agricultural production and 
                                resource conservation and to serve as knowledge repository in the field of natural resource 
                                management speaking the was out horrible for domestic position.
                            </WhyDescription>
                            <ModernPoints>
                                {modernPoints.map((point, index) => (
                                    <PointItem key={index}>
                                        <h4>{point.title}</h4>
                                    </PointItem>
                                ))}
                            </ModernPoints>
                        </ModernSection>
                        
                        {/* FAQ Section */}
                        <FaqSection>
                            <SectionTitle>Frequently asked questions</SectionTitle>
                            <WhyDescription>
                                They offer adaptability, high nutritional value, and can yield higher yields with minimal 
                                agronomical inputs, continued at up to zealously necessary breakfast is motionless she and 
                                literature farmers in dry and rainfed semi-arid regions.
                            </WhyDescription>
                            
                            {faqs.map((faq, index) => (
                                <FaqItem key={index}>
                                    <h3>
                                        <QuestionNumber>{faq.number}.</QuestionNumber>
                                        {faq.question}
                                    </h3>
                                    {faq.answer && <p>{faq.answer}</p>}
                                </FaqItem>
                            ))}
                        </FaqSection>
                    </LeftContent>
                    
                    {/* Right Sidebar */}
                    <Sidebar>
                        <SidebarTitle>Our Service</SidebarTitle>
                        
                        <ServiceList>
                            <h4>All Services</h4>
                            {sidebarServices.map((service, index) => (
                                <ServiceListItem key={index}>{service}</ServiceListItem>
                            ))}
                        </ServiceList>
                        
                        <ContactButton>Contact Us Now</ContactButton>
                        
                        <ContactInfo>
                            <h4>Our Address</h4>
                            <p>08 Westbury SPA New York</p>
                            <p>11015, United States</p>
                        </ContactInfo>
                        
                        <DownloadButton href="#">
                            DOWNLOAD PDF FILE
                        </DownloadButton>
                    </Sidebar>
                </MainContent>
            </ServiceDetailsCtn>
            <Footer />
        </>
    );
}