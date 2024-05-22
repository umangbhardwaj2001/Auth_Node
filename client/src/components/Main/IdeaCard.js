import styles from "./Main.module.scss";
const Ideacard = (props) => {
  const { APIresponse } = props;
  const { ideaName, ownerName, ownerId, reusable, ideaId } = APIresponse;
  return (
    <div className={`${styles.ideacard}`}>
      <div className={`${styles.ideaLogo}`}>
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
