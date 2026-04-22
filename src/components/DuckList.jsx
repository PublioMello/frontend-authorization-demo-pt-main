import DuckCard from "./DuckCard";
import data from "../utils/data";
import "./styles/DuckList.css";

function DuckList() {
  const { ducks } = data;
  return (
    <div className="duck-list">
      {ducks.map((duck) => {
        return <DuckCard duck={duck} key={duck.id} />;
      })}
    </div>
  );
}

export default DuckList;
