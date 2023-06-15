import "./App.css";
import { useEffect, useState } from "react";

import { URL_SERVER } from "./api/config";
import { UserListRow } from "./components/userListRow";
import getUsers from './api/getUsers.js';

function App() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {

    // const data = fetch(`${URL_SERVER}/users`, {
    //   method: "GET",
    // })
    // .then((response) => response.json());
    getUsers().then((response) => {
      console.log(response);
      setUsers(response.users);
    });
    // console.log(data);
    // setUsers(data);

  }, []);
  // console.log(users);
  console.log(users[0]?.id);

  return (
    <div className="App">
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
            {users.map((user) => 
                    <UserListRow user={user}/>
                  )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
