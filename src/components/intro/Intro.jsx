import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ['Developer', 'Designer'],
    });
  }, []);

  return (
    <div id="intro" className="intro">
      <div className="introLeft">
        <div className="introImgContainer">
          <img
            src="https://cdn.dribbble.com/userupload/3075502/file/original-e45d64f17d751c023f241dea1837c995.jpg?resize=752x564"
            alt=""
          />
        </div>
      </div>
      <div className="introRight">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ashish Chauhan</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <i class="fa-solid fa-angle-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Intro;
