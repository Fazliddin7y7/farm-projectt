
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgroundImg from "./portfolio2Png/background.png";
// Rasmlar - o'zingizning fayllaringiz bilan almashtiring
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

/* ===== HERO SECTION ===== */
const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroTitle = styled.h2`
  font-size: 42px;
  color: #2d5a27;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const CategoryTag = styled.span`
  padding: 8px 20px;
  background: #e8f5e9;
  color: #4CAF50;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  
  &:nth-child(2) {
    background: #ffecb3;
    color: #FF9800;
  }
  
  &:nth-child(3) {
    background: #e3f2fd;
    color: #2196F3;
  }
  
  &:nth-child(4) {
    background: #f3e5f5;
    color: #9C27B0;
  }
`;

/* ===== PORTFOLIO GRID ===== */
const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 600px;
    margin: 0 auto 50px auto;
  }
`;

const PortfolioItem = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const PortfolioImage = styled.div`
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PortfolioContent = styled.div`
  padding: 30px;
`;

const PortfolioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PortfolioCategory = styled.span`
  padding: 6px 15px;
  background: ${props => props.color === 'gold' ? '#FFD700' : 
                       props.color === 'bridge' ? '#4CAF50' : 
                       props.color === 'gla' ? '#2196F3' : '#e0e0e0'};
  color: ${props => props.color === 'gold' ? '#333' : 'white'};
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PortfolioTitle = styled.h3`
  font-size: 24px;
  color: #2d5a27;
  margin-bottom: 15px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const PortfolioDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const PortfolioMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  
  strong {
    color: #2d5a27;
  }
`;

const PortfolioFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const FeatureTag = styled.span`
  padding: 5px 12px;
  background: #f5f5f5;
  color: #666;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
`;

/* ===== PROJECT DETAILS ===== */
const ProjectDetails = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const DetailsTitle = styled.h3`
  font-size: 28px;
  color: #2d5a27;
  margin-bottom: 25px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  h4 {
    font-size: 18px;
    color: #4CAF50;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  p {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }
`;

export default function PortfolioGrid2() {
  const portfolioItems = [
    {
      id: 1,
      image: Portfolio1,
      title: "Gold List",
      category: "gold",
      description: "Professional & modern, a theme designed to help your business stand out from the rest.",
      features: ["Design", "Style", "Extract"],
      meta: [
        { label: "Value", value: "+1" },
        { label: "Target", value: "Window Utility" },
        { label: "Follow", value: "Target Chart" }
      ]
    },
    {
      id: 2,
      image: Portfolio2,
      title: "Bridging List",
      category: "bridge",
      description: "Modern agricultural solutions for sustainable farming practices and increased productivity.",
      features: ["Sustainability", "Technology", "Efficiency"],
      meta: [
        { label: "Value", value: "+2" },
        { label: "Target", value: "Eco System" },
        { label: "Follow", value: "Growth Chart" }
      ]
    },
    {
      id: 3,
      image: Portfolio3,
      title: "GLA MEN",
      category: "gla",
      description: "Advanced greenhouse management system for optimal plant growth and climate control.",
      features: ["Automation", "Control", "Monitoring"],
      meta: [
        { label: "Office Body", value: "75.5cm/9th" },
        { label: "Luxus", value: "1500m" }
      ]
    },
    {
      id: 4,
      image: Portfolio4,
      title: "Organic Farm",
      category: "green",
      description: "Sustainable organic farming project with modern technology and traditional methods.",
      features: ["Organic", "Sustainable", "Traditional"],
      meta: [
        { label: "Area", value: "50 Hectares" },
        { label: "Yield", value: "+15%" },
        { label: "Quality", value: "Premium" }
      ]
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
            <BannerTitle>Portfolio Grid 2</BannerTitle>
            <Breadcrumb>
              <span>AGENNO</span>
              <span>›</span>
              <span className="active">PORTFOLIO GRID 2</span>
            </Breadcrumb>
          </BannerOverlay>
        </Banner>

        <ContentWrapper>
          {/* Hero Section */}
          <HeroSection>
            <HeroTitle>Portfolio Grid Col 2</HeroTitle>
            <HeroSubtitle>
              Professional & modern, a theme designed to help your business stand out from the rest.
            </HeroSubtitle>
            <Categories>
              <CategoryTag>Gold List</CategoryTag>
              <CategoryTag>Bridging List</CategoryTag>
              <CategoryTag>GLA MEN</CategoryTag>
              <CategoryTag>Style</CategoryTag>
            </Categories>
          </HeroSection>

          {/* Portfolio Grid - 2 Columns */}
          <PortfolioGrid>
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.id}>
                <PortfolioImage>
                  <img src={item.image} alt={item.title} />
                </PortfolioImage>
                <PortfolioContent>
                  <PortfolioHeader>
                    <PortfolioCategory color={item.category}>
                      {item.category === 'gold' ? 'Premium' : 
                       item.category === 'bridge' ? 'Bridge' : 
                       item.category === 'gla' ? 'GLA' : 'Standard'}
                    </PortfolioCategory>
                  </PortfolioHeader>
                  
                  <PortfolioTitle>{item.title}</PortfolioTitle>
                  <PortfolioDescription>{item.description}</PortfolioDescription>
                  
                  <PortfolioMeta>
                    {item.meta.map((meta, index) => (
                      <MetaItem key={index}>
                        <strong>{meta.label}:</strong> {meta.value}
                      </MetaItem>
                    ))}
                  </PortfolioMeta>
                  
                  <PortfolioFeatures>
                    {item.features.map((feature, index) => (
                      <FeatureTag key={index}>{feature}</FeatureTag>
                    ))}
                  </PortfolioFeatures>
                </PortfolioContent>
              </PortfolioItem>
            ))}
          </PortfolioGrid>

          {/* Project Details Section */}
          <ProjectDetails>
            <DetailsTitle>Project Details & Specifications</DetailsTitle>
            <DetailsGrid>
              <DetailItem>
                <h4>Design Excellence</h4>
                <p>Modern and professional design that helps your business stand out with clean aesthetics.</p>
              </DetailItem>
              <DetailItem>
                <h4>Target Optimization</h4>
                <p>Strategic targeting with utility windows and follow-up chart systems for maximum efficiency.</p>
              </DetailItem>
              <DetailItem>
                <h4>Advanced Features</h4>
                <p>Extract capabilities, style variations, and premium design elements for versatile use.</p>
              </DetailItem>
            </DetailsGrid>
          </ProjectDetails>
        </ContentWrapper>
      </PortfolioCtn>
      <Footer />
    </>
  );
}