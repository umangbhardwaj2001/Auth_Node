import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Ideacard = (props) => {
  const { APIresponse } = props;
  const { id, ideaName, ownerName, ownerId, reusable, ideaId } = APIresponse;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div className={`${styles.ideaCard}`}>
      <div className={`${styles.ideaLogo}`} onClick={handleCardClick}>
        <h3>{ideaName}</h3>
        <p>{ownerName}</p>
        <h4>{ownerId}</h4>
        <p>{reusable}</p>
        <h6>{ideaId}</h6>
      </div>
    </div>
  );
};
export default Ideacard;
