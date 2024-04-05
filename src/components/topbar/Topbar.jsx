
import "./topbar.scss";

const Topbar = ({openMenu, setOpenMenu}) => {

  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="topWrap">
        <div className="topLeft">
          <a href="#intro" className="logo">
            Ashish Chauhan
          </a>
          <div className="leftItems">
            <div className="topLeftItem">
              <i className="fa-solid fa-user"></i>
              <span className="number">91-9315843216</span>
            </div>
            <div className="topLeftItem">
              <i className="fa-solid fa-envelope"></i>
              <span className="number">chauhanashish1511@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="topRight">
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
