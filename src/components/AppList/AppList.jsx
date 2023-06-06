import { useState, useEffect } from "react";
import { app_getAll } from "../../service/App_service";
import "./AppList.css";
import CardApp from "../CardApp/CardApp";

const AppList = () => {
  const [appList, setAppList] = useState([]);
  useEffect(() => {
    app_getAll().then((app) => setAppList(app));
  }, []);

  return <>{showApps(appList)}</>;
};

const showApps = (appList) => {
  console.log("showApps -> appList: ", appList);

  return <div className="appsContainer">{appList.map(showApp)}</div>;
};

const showApp = (app) => <CardApp key={app.id} app={app} />;

export default AppList;
