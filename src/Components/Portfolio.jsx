import React from "react";
import image from "../images/group.jpg";

const imageAltText = "An Event group photo";

const projectList = [
  {
    title: "Hult Prize Campus Director Experience",
    description:
      "As a Hult Prize Campus Director, I led initiatives fostering innovation and social impact, honing leadership and project management skills while inspiring student involvement.",
    url: "https://www.skylineuniversity.ac.ae/hult-club",
  },
  {
    title: "Assembling and Programming Racebot for beginners",
    description:
      "Beginner-friendly guide for assembling and programming Racebot, offering hands-on experience in robotics",
    url: "https://drive.google.com/drive/u/0/folders/1ITzTxaYy9cQd5hu1VUCqJOWPPaffnvsp",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Canva workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "file:///C:/Users/abeer/Downloads/Neutral%20Minimalist%20Modern%20Professional%20Accountant%20Resume%20(5).pdf",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  }
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

