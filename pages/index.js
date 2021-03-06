import Head from "next/head";
import React from "react";
import Header from "../Components/Header/Header";
import StrongPerformer from "../Components/StrongPerformer/StrongPerformer";
import DeveloperSection from "../Components/DeveloperSection/DeveloperSection";
import RecommendedSection from "../Components/RecommendedSection/RecommendedSection";
import ChooseSection from "../Components/ChooseSection/ChooseSection";
import IntegrationsSection from "../Components/IntegrationsSection/IntegrationsSectin";
import Partners from "../Components/PartnersSection/Partners";
import Compromise from "../Components/Compromise/Compromise";
import Footer from "../Components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xponents</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <StrongPerformer />
        <ChooseSection/>
        <DeveloperSection />
        <IntegrationsSection/>
        <Compromise/>
        <Partners/>
        <RecommendedSection/>
        <Footer/>
      </main>
    </div>
  );
}
