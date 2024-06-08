import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./IdeaDetail.module.css";
import axios from "axios";
import NotFound from "../NotFound/NotFound";

const IdeaDetail = () => {
  const { id } = useParams();
  const [received, setReceived] = useState(true);
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    const fetchIdea = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/idea");
        const json = response.data || [];
        const selectedIdea = json.find(
          (idea) => idea._id.toString() === id.toString()
        );
        if (selectedIdea) setIdea(selectedIdea);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      } finally {
        setReceived(false);
      }
    };
    fetchIdea();
  }, [id]);

  if (received) {
    return <div>Loading...</div>;
  }

  if (!idea) {
    return <NotFound />;
  }

  return (
    <div className={styles.ideaDetail}>
      {Object.entries(idea)
        .filter(([key]) => !["_id", "id", "__v"].includes(key))
        .map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value !== null ? value.toString() : "N/A"}
          </div>
        ))}
    </div>
  );
};

export default IdeaDetail;
