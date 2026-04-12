import React from "react";
import PageBanner from "../components/PageBanner";
import SideNav from "../components/SideNav";
import "../styles/pageWithSideNav.css";

function Team() {
  const navItems =[
    { id: "team-leaders", label: "Team Leaders" },
    { id: "team-members", label: "Team Members" },
    { id: "advisors", label: "Advisors" },
    { id: "photos", label: "Photos"},
  ]
  return (
    <>
      <PageBanner
        tag="Team Page"
        title="Team"
        subtitle="This page will introduce our members, advisors, and collaborations."
      />
      <div className="page-with-sidenav">
        <SideNav title="TABLE OF CONTENTS" items={navItems} />

        <main className="page-main-content">
          <section id="team-leaders" className="content-block">
            <h2>Team Leaders</h2>
            <p>这里是 Team Leaders</p>
          </section>

          <section id="team-members" className="content-block">
            <h2>Team Members</h2>
            <p>这里是 Team Members</p>
          </section>

          <section id="advisors" className="content-block">
            <h2>Advisors</h2>
            <p>这里是 Advisors</p>
          </section>

          <section id="photos" className="content-block">
            <h2>Photos</h2>
            <p>这里是 Photos</p>
          </section>
        </main>
        
      </div>
    </>
  );
}

export default Team;