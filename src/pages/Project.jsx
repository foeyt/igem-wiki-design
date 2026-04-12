import React from "react";
import PageBanner from "../components/PageBanner";
import SideNav from "../components/SideNav";
import "../styles/pageWithSideNav.css"

function Project() {
  const navItems = [
    {id: "overview" , label: "Overview"},
    {id: "design" , label: "Design"},
    {id: "experiment" , label: "Experiment"},
    {id: "result" , label: "Result"},
  ];


  return (
  <>
    <PageBanner
      tag="Project Page"
      title="Project"
      subtitle="This page will introduce the core design and workflow of our project."
    />
    <div className="page-with-sidenav">
      <SideNav title="TABLE OF CONTENTS" items={navItems} />
    
      <main className="page-main-content">
        <section id="overview" className="content-block">
          <h2>Overview</h2>
          <p>这里写 Overview 内容。</p>
        </section>

        <section id="design" className="content-block">
            <h2>Design</h2>
            <p>这里写 Design 内容。</p>
        </section>

        <section id="experiment" className="content-block">
          <h2>Experiment</h2>
          <p>这里写 Experiment 内容。</p>
        </section>

        <section id="result" className="content-block">
          <h2>Result</h2>
          <p>这里写 Result 内容。</p>
        </section>
      </main>
    
    </div>

  </>  
  );
}

export default Project;