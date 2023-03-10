import "./App.css";
import Img1 from "./asset/img1.png";
import Img2 from "./asset/img2.png";
import Img3 from "./asset/img3.png";
import Logo from "./asset/logo.png";
import Thumb1 from "./asset/thumb1.png";
import Thumb2 from "./asset/thumb2.png";
import Thumb3 from "./asset/thumb3.png";
import Facebook from "./asset/facebook.png";
import Twitter from "./asset/twitter.png";
import Instagram from "./asset/instagram.png";
import { useState } from "react";
function App() {
  const [starBoxImg, setStarBoxImg] = useState(Img1);
  const [backgroundCircle, setBackgroundCircle] = useState(null);

  return (
    <div className="App">
      <section>
        <div
          className="circle"
          style={{ backgroundColor: backgroundCircle }}
        ></div>
        <header>
          <a href="#" className="logo">
            <img src={Logo} alt="logo" />
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">What's New</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </header>
        <div className="content">
          <div className="textBox">
            <h2>
              It's not just a Coffe
              <br />
              It's
              <span> Starbucks</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              dolore autem molestiae, tempore nemo quos quidem voluptatibus in
              deleniti ducimus magnam architecto iste delectus, veniam ipsam
              voluptate enim deserunt nobis odit impedit ut eos. Repella
            </p>
            <a href="#">Buy Now</a>
          </div>
          <div className="imgBox">
            {starBoxImg && (
              <img
                src={`${starBoxImg}`}
                className="starBucks"
                alt="starbucks"
              />
            )}
          </div>
        </div>
        <ul className="thumb">
          <li>
            <img
              src={Thumb1}
              alt="thumb"
              onClick={() => {
                setStarBoxImg(`${Img1}`);
                setBackgroundCircle("#017143");
              }}
            />
          </li>
          <li>
            <img
              src={Thumb2}
              alt="thumb"
              onClick={() => {
                setStarBoxImg(`${Img2}`);
                setBackgroundCircle("#eb7495");
              }}
            />
          </li>
          <li>
            <img
              src={Thumb3}
              alt="thumb"
              onClick={() => {
                setStarBoxImg(`${Img3}`);
                setBackgroundCircle("#d752b1");
              }}
            />
          </li>
        </ul>
        <ul className="sci">
          <li>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
