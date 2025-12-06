import React from "react";
import styled from "styled-components";
import HeaderHome3 from "../../components/HeaderHome3";
import Footer from "../../components/Footer";

const PageCtn = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export default function ContactUs() {
  return (
    <>
      <HeaderHome3 />
      <PageCtn>
        <h1>Contact Us</h1>
        <p>If you reached this page, routing is working correctly.</p>
      </PageCtn>
      <Footer />
    </>
  );
}
