import React from "react";
import styles from "./Main.module.css";
import IdeaCard from "./IdeaCard";
import { useState, useEffect, useContext } from "react";
import retrieveideasdetails from "../../utils/retrieveideasdetails.json";
import MainLoad from "./MainLoad";
// import { retrieveideasdetails } from "../../utils/constant";

function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchData() {
      // const response = await fetch(retrieveideasdetails);
      // const json = await response.json();
      // const fetchedData = json.data?.cards[1]?.card?.info || [];
      const fetchedData = retrieveideasdetails || [];
      setData(fetchedData);
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
