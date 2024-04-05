import { useState } from "react";
import "./work.scss";

const Work = () => {
  const [slide, setSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: <i class="fa-solid fa-mobile-screen-button" ></i>,
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: <i class="fa-solid fa-globe"></i>,
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: <i class="fa-solid fa-chalkboard"></i>,
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleMove = (way) => {
    way === "left" ? setSlide(slide > 0 ? slide - 1 : 2) : 
      setSlide(slide < data.length - 1 ? slide + 1 : 0)
  }
  return (
    <div id="work" className="work">
      <div className="slider" style={{transform: `translateX(-${slide * 100}vw)`}}>
        {data.map((item) => (
          
      
        <div className="container">
          <div className="item">
            <div className="left">
             {item.icon}
              <h2 className="title">{item.title} </h2>
              <p className="desc">{item.desc} </p>
              <span className="project">Projects</span>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
          </div>
            ))}
      </div>
      <img src="assetz/arrow.png" alt="" className="arrow left" onClick={()=>handleMove("left")} />
      <img src="assetz/arrow.png" alt=""className="arrow right" onClick={()=>handleMove()}/>
    </div>
  )
}

export default Work