import "./menu.css";

const Menu = ({openMenu, setOpenMenu}) => {
    return <div className={"menu " + (openMenu && "active")}>
        <ul>
            <li onClick={()=>setOpenMenu(!openMenu)}>
                <a href="#intro">Home</a>
            </li >
            <li onClick={()=>setOpenMenu(!openMenu)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setOpenMenu(!openMenu)}>
                <a href="#work">Work</a>
            </li>
            <li onClick={()=>setOpenMenu(!openMenu)}>
                <a href="#testimonial">Testimonial</a>
            </li>
            <li onClick={()=>setOpenMenu(!openMenu)}>
                <a href="#contact">Contact</a>
            </li>
      </ul>
  </div>;
};

export default Menu;
