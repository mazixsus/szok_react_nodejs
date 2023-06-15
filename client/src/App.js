import "./App.css";
import { useEffect, useState } from "react";

// import data from './api/getUsers.js'
import { URL_SERVER } from "./api/config";
import { UserListRow } from "./components/userListRow";
// import getUsers from './api/getUsers.js';

function App() {
  const { users, getUsers } = useState(1);

  useEffect(() => {
    // const data = fetch(`${URL_SERVER}/users`)
    const data = fetch(`${URL_SERVER}/users`, {
      method: "GET",
    }).then((response) => response.json());
    getUsers(2);
    // console.log(data.users);
  }, []);

  // useEffect(() => getUsers ,[])

  return (
    <div className="App bg-secondary">
      <div style={{ overflowX: "auto" }}>
        <table id="articles" className="table">
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Id</th>
              <th style={{ width: "20%" }}>Imię</th>
              <th style={{ width: "20%" }}>Nazwisko</th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user) => {
                    <UserListRow user={user}/>
                  })} */}
            {users}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
