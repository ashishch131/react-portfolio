import "./portfolioList.css";

const PortfolioList = ({item, setSelected, id, active}) => {
  return (
      <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=> setSelected(id)}>
          {item}
    </li>
  )
}

export default PortfolioList