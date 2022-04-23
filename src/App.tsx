import { useReducer, useRef } from "react";
import "./App.scss";
import HeaderMain from "./Components/header/HeaderMain";
import { reducer, INITIAL_STATE } from "./store/reducer";
import heroCarousel3 from "./assets/img/hero-carousel/hero-carousel-3.svg";
import { WEBSITE_NAME } from "./Components/utils/WebConstants";
import FooterMain from "./Components/footer/FooterMain";
function App() {
  const [globalState, dispatch] = useReducer(reducer, INITIAL_STATE);
  const scrollTop: any = useRef();

  onscroll = () => {
    console.log(`scroll-top`);
    if (scrollTop) {
      if (window.scrollY > 100) {
        scrollTop.current.classList.add("active");
      } else {
      }
      scrollTop.current.classList.remove("active");
    }
  };
  return (
    <>
      <HeaderMain scrollTop={scrollTop} />

      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <img src={heroCarousel3} className="img-fluid animated" />
          <h2>
            Welcome to <span>{WEBSITE_NAME}</span>
          </h2>
          <p>
            Et voluptate esse accusantium accusamus natus reiciendis quidem
            voluptates similique aut.
          </p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>
      <FooterMain />
      <a
        ref={scrollTop}
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
