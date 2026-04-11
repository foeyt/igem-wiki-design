import React from "react";
import PageBanner from "../components/PageBanner";
import ContentSection from "../components/ContentSection";
import SideCard from "../components/SideCard";

function Description() {
  return (
    <>
      <PageBanner
        tag="Project Page"
        title="Description"
        subtitle="This page introduces the background of our soil-related project, the motivation behind it, and the core scientific problem we want to address."
      />

      <ContentSection
        title="Why Soil Matters"
        text="Soil is a living and dynamic environment. It supports agriculture, regulates ecosystems, and connects directly to sustainability and public health. Understanding soil is therefore essential for both science and society."
      >
        <SideCard
          title="Key Words"
          items={[
            "Soil health",
            "Microbial balance",
            "Agricultural sustainability",
            "Environmental resilience",
          ]}
        />
      </ContentSection>

      <ContentSection
        title="What Challenge We See"
        text="Modern soil systems face multiple pressures, including contamination, degradation, and loss of biological balance. Our project begins by asking how these challenges can be better understood and addressed through synthetic biology."
        reverse={true}
      >
        <SideCard
          title="Main Challenges"
          items={[
            "Pollution accumulation",
            "Nutrient loss",
            "Microbial imbalance",
            "Declining sustainability",
          ]}
        />
      </ContentSection>
    </>
  );
}

export default Description;