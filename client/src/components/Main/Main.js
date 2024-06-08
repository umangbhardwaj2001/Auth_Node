import React from "react";
import styles from "./Main.module.css";
import IdeaCard from "./IdeaCard";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import MainLoad from "./MainLoad";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/api/idea");
      const json = response.data || [];
      setData(json);
    }
    fetchData();
  }, []);
  if (!data) return <MainLoad />;
  return (
    <div className={`${styles.ideaContainer}`}>
      {data.map((ideaInfo) => (
        <IdeaCard key={ideaInfo.id} APIresponse={ideaInfo} />
      ))}
    </div>
  );
}

export default Main;
