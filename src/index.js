import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import App from "./App";

function App() {
  return (
    <div>
      <Avatar
        name="lego"
        tagline="I am so cool"
        image="https://randomuser.me/api/portraits/lego/3.jpg"
      />

      <WorkExperience id="1" profile="John Doe">
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
        <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
      </WorkExperience>
      <WorkExperience />
      <Portfolio>
        <Project image="https://picsum.photos/id/237/200/300" />
        <Project image="https://picsum.photos/id/227/200/300" />
        <Project image="" />
      </Portfolio>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="profile">Hello I am {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
      {/*{id:"1", profile="John Doe", children: [Company, Company, Company]} */}
    </>
  );
}

function Company(props) {
  return (
    <>
      <li>
        <h2 className="work-title">
          <span className="company">{props.name}</span>
          <span className="from">{props.from_date}</span>
          <span className="until">{props.to_date}</span>
        </h2>
        <p>your mama</p>
      </li>
    </>
  );
}

function Portfolio(props) {
  return (
    <>
      <div>
        <h2>Portfolio</h2>
        <div className="portfolio">{props.children}</div>
      </div>
    </>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://randomuser.me/api/portraits/lego/5.jpg";
  } else {
    image = props.image;
  }
  return (
    <>
      <div className="">
        <img src={image} alt="" />
      </div>
      <div>
        <p>description</p>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
