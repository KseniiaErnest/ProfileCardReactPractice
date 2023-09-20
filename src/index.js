import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Me.jpg" alt="Kseniia Ernest" />;
}

function Intro() {
  return (
    <div>
      <h1>Kseniia Ernest</h1>
      <p>Some text goes here</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="⭐" color="red" />
      <Skill skill="JavaScript" emoji="🤩" color="Green" />
      <Skill skill="Node.js+Express.js" emoji="😎" color="Pink" />
      <Skill skill="React" emoji="🎇" color="Crimson" />
      <Skill skill="MongoDB" emoji="😁" color="Lime" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
