import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

// Import Pages


import Home1 from "../pages/home/Home1";
import Home2 from "../pages/home/Home2";
import Home3 from "../pages/home/Home3";
import About from "../pages/pages/AboutUs";
import OurHistory from "../pages/pages/OurHistory";
import Team from "../pages/pages/OurTeamMember";
import Faq from "../pages/pages/FAQ";
import Services from "../pages/services/Services";
import Blog from "../pages/blog/Blog";
import ContactUs from "../pages/contactUs/ContactUs";








const MainRoutes = () => {
  return (
    <Routes>
     <Route path={ROUTES.HOME1} element={<Home1 />} />
     <Route path={ROUTES.HOME2} element={<Home2 />} />
     <Route path={ROUTES.HOME3} element={<Home3 />} />
     <Route path={ROUTES.ABOUT} element={<About />} />
     <Route path={ROUTES.HISTORY} element={<OurHistory />} />
     <Route path={ROUTES.TEAM} element={<Team />} />
     <Route path={ROUTES.FAQ} element={<Faq />} />
    <Route path={ROUTES.SERVICES} element={<Services />} />
    <Route path={ROUTES.BLOG} element={<Blog />} />
    <Route path={ROUTES.CONTACT} element={<ContactUs />} />












      

    </Routes>
  );
};

export default MainRoutes;
