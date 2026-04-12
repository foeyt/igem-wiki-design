import React from "react";
import PageBanner from "../components/PageBanner";
import ContentSection from "../components/ContentSection";
import SideCard from "../components/SideCard";
import SideNav from "../components/SideNav";
import "../styles/pageWithSideNav.css";

function Description() {
  const navItems = [
    { id: "introduction", label: "Introduction" },
    { id: "background", label: "Background" },
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "future", label: "Future" },
  ];

  return (
    <>
      <PageBanner
        tag="Project Page"
        title="Description"
        subtitle="This page introduces the background of our soil-related project, the motivation behind it, and the core scientific problem we want to address."
      />

      <div className="page-with-sidenav">
        <SideNav title="TABLE OF CONTENTS" items={navItems} />

        <main className="page-main-content">
          <section id="introduction" className="content-block">
            <h2>Introduction</h2>
            <p>这里写 Introduction 内容。</p>
          </section>

          <section id="background" className="content-block">
            <h2>Background</h2>
            <p>这里写 Background 内容。</p>
          </section>

          <section id="problem" className="content-block">
            <h2>Problem</h2>
            <p>这里写 Problem 内容。</p>
          </section>

          <section id="solution" className="content-block">
            <h2>Solution</h2>
            <p>这里写 Solution 内容。</p>
          </section>

          <section id="future" className="content-block">
            <h2>Future</h2>
            <p>这里写 Future 内容。</p>
          </section>
        </main>
      </div>

      

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