import React from "react";
import styles from "./Main.module.css";
import IdeaCard from "./IdeaCard";
import { useState, useEffect, useContext } from "react";
// import retrieveideasdetails from "../../utils/retrieveideasdetails.json";
import apiClient from "../../utils/apiClient";
import MainLoad from "./MainLoad";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(retrieveideasdetails);
      // const json = await response.json();
      // const fetchedData = json || [];
      // const fetchedData = retrieveideasdetails || [];
      // setData(fetchedData);

      const response = await apiClient.get("/idea");
      const json = (await response.data) || [];
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
