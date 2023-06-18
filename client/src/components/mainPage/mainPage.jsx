import { MainPageListRow } from "./mainPageListRow";
import mainPageOptions from "../../definitions/navOptions.json";;

export const MainPage = () => {
  return (
    <div className="mt-0">
      <div className="h1 pb-3">Wybierz działanie</div>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Nr</th>
              <th style={{ width: "15%" }}>Moduł</th>
              <th style={{ width: "75%" }}></th>
            </tr>
          </thead>
          <tbody>
            {mainPageOptions.navOptions.map((listRow, i) => (
              <MainPageListRow key={i} listRow={listRow} rowNumber={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
