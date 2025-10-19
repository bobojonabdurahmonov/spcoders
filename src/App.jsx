import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import bgImage from "./assets/mainbackground.png";
import logo from "./assets/logo.png";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Auth from "./components/Auth";
import Home from "./Home";

function App() {
  const [authType, setAuthType] = useState(null);
  const sliderRef = useRef(null);
  const [enteredPlatform, setEnteredPlatform] = useState(false);

  function changetoRegisterorLogin(type) {
    setAuthType(type);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const getStatus = () => {
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Status:", data.status);
      })
      .catch(() => console.log("error"));
  };

  useEffect(() => {
    getStatus();

    fetch("http://127.0.0.1:8000/check-session/", {
      // method: "GET",
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.authenticated) {
          setEnteredPlatform(true);
        }
        });
  }, []);

  const trynow = () => {
    setEnteredPlatform(true);
    console.log("Moved to MainPage")
  };

  return (
    <>
      {enteredPlatform ? (
        <Home />
      ) : authType ? (
        <Auth type={authType === "login" ? "login" : "register"} onSuccess={() => setEnteredPlatform(true)} />
      ) : (
        <div
          className="main-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <header className="entrynav">
            <img
              src={logo}
              width={260}
              height={120}
              className="logo"
              alt="SpCode"
            />
            <ul className="nav-links">
              <li onClick={() => goToSlide(0)}>Home</li>
              <li onClick={() => goToSlide(1)}>Community</li>
              <li onClick={() => goToSlide(2)}>Services</li>
              <li onClick={() => goToSlide(3)}>About</li>
            </ul>
            <div className="nav-buttons">
              <button
                className="btn"
                onClick={() => changetoRegisterorLogin("register")}
              >
                Register
              </button>
              <button
                className="btn-outline"
                onClick={() => changetoRegisterorLogin("login")}
              >
                SignIn
              </button>
              <button className="btn-outline" onClick={trynow}>
                Try NOW
              </button>
            </div>
          </header>

          {/* ✅ SLIDER START */}
          <Slider ref={sliderRef} {...settings}>
            {/* HOME PAGE */}
            <div className="slide-page">
              <div className="middlenav">
                <h2>
                  MAKING YOUR <b style={{ color: "#00bfff" }}>CODING</b> WAY WITH{" "}
                  <b style={{ color: "#00bfff" }}>CHATTING</b> AND SHARING WITH
                  OTHERS
                </h2>
                <h1>TO GET STARTED,</h1>
                <h1>CLICK SIGNIN OR REGISTER</h1>
                <span>
                  <button onClick={() => changetoRegisterorLogin("register")}>
                    REGISTER
                  </button>
                </span>
              </div>

              <section className="hero">
                <h2 className="hero-title">
                  IMPROVE YOUR <span>CODE</span>, SHARE YOUR{" "}
                  <span>PROJECTS</span> WITH EVERYONE.
                </h2>
                <p className="hero-subtitle">Social App for Connect CODERS.</p>
              </section>
            </div>

            {/* COMMUNITY PAGE */}
            <div className="slide-page">
              <section className="page-section">
                <h1 className="community-text">
                  COMMUNITY OF <span>SPCODERS</span>
                </h1>
                <div className="aboutblock">
                  <ul>
                    <li>
                      <h1>2025</h1>
                      <h2>MANUFACTURED</h2>
                    </li>
                    <li>
                      <h1>BEST CHOICE</h1>
                      <h2>IN CODERS</h2>
                    </li>
                    <li>
                      <h1>1000000+</h1>
                      <h2>Users</h2>
                    </li>
                  </ul>
                </div>
                <h1 className="hero-title">
                  JOIN OUR <span>COMMUNITY</span> OF DEVELOPERS.
                </h1>
                <p className="hero-subtitle">
                  Share your thoughts, get feedback, and grow together.
                </p>
                <a href="https://t.me/spcodersceo" target="_blank"><button className="btn">Explore Community</button></a>
              </section>
            </div>

            {/* SERVICES PAGE */}
            <div className="slide-page">
              <section className="page-section">
                <h1 className="hero-title">
                  DISCOVER OUR <span>SERVICES</span>
                </h1>
                <p className="hero-subtitle">
                  We build tools and experiences that empower developers
                  worldwide.
                </p>

                <div className="services-block">
                  <div className="service-card">
                    <i className="fa-solid fa-cloud-upload-alt service-icon"></i>
                    <h2>Project Hosting</h2>
                    <p>
                      Upload and showcase your coding projects directly on
                      SpCoders. Manage versions, share updates, and gain feedback
                      from real developers.
                    </p>
                  </div>

                  <div className="service-card">
                    <i className="fa-solid fa-comments service-icon"></i>
                    <h2>Developer Chat</h2>
                    <p>
                      Connect instantly with programmers around the world.
                      Discuss ideas, fix bugs together, and make new coder
                      friends.
                    </p>
                  </div>

                  <div className="service-card">
                    <i className="fa-solid fa-ranking-star service-icon"></i>
                    <h2>Ranking & Achievements</h2>
                    <p>
                      Get recognized for your contributions! Earn ranks, badges,
                      and community trust through your activity and projects.
                    </p>
                  </div>
                </div>

                <div className="social-buttons">
                  <a href="https://www.instagram.com/bbvv_vv11">
                    <button className="btn">
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "black" }}
                      ></i>
                    </button>
                  </a>
                  <a href="https://www.github.com/bobojonabdurahmonov">
                    <button className="btn-outline">
                      <i className="fa-brands fa-github"></i>
                    </button>
                  </a>
                  <a href="https://www.youtube.com/@TechWithBeejay">
                    <button className="btn">
                      <i
                        className="fa-brands fa-youtube"
                        style={{ color: "black" }}
                      ></i>
                    </button>
                  </a>
                </div>
              </section>
            </div>

            {/* ABOUT PAGE */}
            <div className="slide-page">
              <section className="page-section">
                <div className="aboutblock">
                  <p>
                   SpCoders is a modern online community created for passionate developers around the world.
                  Our mission is to connect coders, designers, and tech enthusiasts in one inspiring space.
                  We believe that collaboration is the key to innovation and growth in the tech industry.
                  On SpCoders, developers can share their projects, ideas, and creative achievements freely.
                  It is a place where coding meets creativity, and learning never stops.
                  Every feature is designed to make communication between coders easier and more enjoyable.
                  You can showcase your work, exchange feedback, and gain recognition from the community.
                  We aim to build not just a website, but a supportive network for every skill level.
                  From beginners to professionals, everyone finds value and motivation here.
                  Our clean design and user-friendly interface make collaboration seamless and fun.
                  SpCoders celebrates teamwork, creativity, and the spirit of problem-solving.
                  We are proud to provide a safe and encouraging environment for all users.
                  Every project uploaded on SpCoders represents hard work, vision, and dedication.
                  We constantly improve the platform to meet the needs of the growing developer world.
                  Our goal is to make SpCoders the best choice for coders everywhere.
                  It’s not just a site — it’s a global movement of passionate programmers.
                  We bring together talent, innovation, and inspiration in one digital home.
                  At SpCoders, every line of code tells a story of learning and achievement.
                  Together, we’re shaping the future of technology and creativity.
                  Join SpCoders today — where coders connect, create, and grow together.
                  </p>
                </div>
                <h1 className="hero-title">
                  ABOUT <span>SPCODE</span>
                </h1>
                <p className="hero-subtitle">
                  A platform built for coders to connect, share, and inspire.
                </p>
              </section>
            </div>
          </Slider>
          {/* ✅ SLIDER END */}
        </div>
      )}
    </>
  );
}

export default App;
