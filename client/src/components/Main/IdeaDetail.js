import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./IdeaDetail.module.css";
import retrieveideasdetails from "../../utils/retrieveideasdetails.json";

const IdeaDetail = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    const fetchIdea = () => {
      //   const response = await fetch(retrieveideasdetails);
      //   const json = await response.json();
      //   const allIdeas = json.data?.cards[1]?.card?.info || [];
      const allIdeas = retrieveideasdetails || [];
      const selectedIdea = allIdeas.find((idea) => idea.id.toString() === id);
      setIdea(selectedIdea);
    };

    fetchIdea();
  }, [id]);
  if (!idea) return <div>Loading...</div>;
  return (
    <div className={styles.ideaDetail}>
      {Object.entries(idea).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value !== null ? value.toString() : "N/A"}
        </div>
      ))}
    </div>
  );
};

export default IdeaDetail;
