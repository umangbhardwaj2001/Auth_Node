import React from "react";

import styles from "./Main.module.scss";

import IdeaCard from "./IdeaCard";

import { useState, useEffect, useContext } from "react";

import retrieveideasdetails from "../../utils/retrieveideasdetails.json";

import MainLoad from "./MainLoad";

// import { retrieveideasdetails } from "../../utils/constant";

async function fetchData() {
  const response = await fetch(retrieveideasdetails);

  const json = await response.json();

  return json.data?.cards[1]?.card?.info;
}

function Main() {
  // oldskool

  const [data, setData] = useState(retrieveideasdetails);

  useEffect(() => {
    console.log("AfterMain", data);

    // setData(fetchData());
  }, []);

  //  const data = use(fetchData)

  if (data.length == 0) return <MainLoad />;

  return (
    <div className={`done ${styles.ideaContainer}`}>
      {data.map((ideaInfo) => {
        console.log("Main_Map", ideaInfo.ownerName);

        return <IdeaCard key={ideaInfo.id} APIresponse={ideaInfo} />;
      })}
    </div>
  );
}

export default Main;
