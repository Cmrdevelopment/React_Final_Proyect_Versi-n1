import { useState, useEffect } from "react";
import "./MovilDevList2.css";
import CardMovilDev from "../CardMovilDev/CardMovildev";
import { mobilDev_getAll } from "../../service/App_mobilDev.service";

const MovilDevList = () => {
  const [movilDevList, setMovilDevList] = useState([]);

  useEffect(() => {
    mobilDev_getAll().then((movilDev) => setMovilDevList(movilDev));
  }, []);

  return <>{showMovilDevs(movilDevList)}</>;
};

const showMovilDevs = (movilDevList) => {
  return (
    <div className="movilDevsContainer">{movilDevList.map(showMovilDev)}</div>
  );
};

const showMovilDev = (movilDev) => (
  <CardMovilDev key={movilDev.id} movilDev={movilDev} />
);

export default MovilDevList;
