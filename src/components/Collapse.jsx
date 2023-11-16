import { useState } from "react";
import imgVectorDown from "../assets/images/Vector_down.png";

const Collapse = ({ title, description }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`collapse ${isCollapsed ? "" : "collapse--active"}`}>
        <div className="collapse__header" onClick={toggleCollapse}>
          <p className="collapse__title">{title}</p>
          <img
            className="collapse__icon"
            src={imgVectorDown}
            alt="Flèche vers le bas"
          />
        </div>
        <div className="collapse__content">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Collapse;
