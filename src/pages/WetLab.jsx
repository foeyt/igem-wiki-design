import React from "react";
import PageBanner from "../components/PageBanner";
import SideNav from "../components/SideNav";
import "../styles/pageWithSideNav.css";

function WetLab() {
  const navItems = [
    { id: "part1", label: "Part1" },
    { id: "part2", label: "Part2" },
    { id: "part3", label: "Part3" },
    { id: "part4", label: "Part4" },
    { id: "part5", label: "Part5" },
  ];

  return (
    <>
      <PageBanner
        tag="Project Page"
        title="Wet Lab"
        subtitle="This page will present our experimental design and wet lab workflow."
      />
      <div className="page-with-sidenav">
        <SideNav title="TABLE OF CONTENTS" items={navItems} />

        <main className="page-main-content">
          <section id="part1" className="content-block">
            <h2>Part1</h2>
            <p>这里写 Part1 的内容。</p>
          </section>
          
          <section id="part2" className="content-block">
            <h2>Part2</h2>
            <section>这里写 Part2 的内容。</section>
          </section>

          <section id="part3" className="content-block">
            <h2>Part3</h2>
            <section>这里写 Part3 的内容。</section>
          </section>

          <section id="part4" className="content-block">
            <h2>Part4</h2>
            <section>这里写 Part4 的内容。</section>
          </section>

          <section id="part5" className="content-block">
            <h2>Part5</h2>
            <section>这里写 Part5 的内容。</section>
          </section>
        </main>
      
      </div>

    </>
  );
}

export default WetLab;