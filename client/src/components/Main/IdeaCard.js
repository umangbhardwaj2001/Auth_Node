import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Ideacard = (props) => {
  const { APIresponse } = props;
  const { _id, ideaName, ownerName, ownerId, reusable, ideaId } = APIresponse;
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/${_id}`);
  };
  return (
    <div className={`${styles.ideaCard}`} onClick={handleCardClick}>
      <div className={`${styles.ideaLogo}`}>
        <h3 className={styles.basicDetails}>{ideaName}</h3>
        <p className={styles.basicDetails}>{ownerName}</p>
        <h4 className={styles.hoverDetails}>{ownerId}</h4>
        <p className={styles.hoverDetails}>{reusable}</p>
        <h6 className={styles.hoverDetails}>{ideaId}</h6>
      </div>
    </div>
  );
};
export default Ideacard;
