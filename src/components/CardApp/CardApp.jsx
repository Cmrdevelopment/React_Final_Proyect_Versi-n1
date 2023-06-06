import "./CardApp.css";

export const CardApp = ({ app }) => (
  <div className="appInfo">
    <div className="appData">
      <p>AppName: {app.appName}</p>
      <p>Category: {app.category}</p>
      <p>CodeLanguages: {app.codeLanguages}</p>
      <p>AppSize: {app.appSize}</p>
    </div>
  </div>
);

export default CardApp;
