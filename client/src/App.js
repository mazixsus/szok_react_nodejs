import "./App.css";
import { useEffect, useState } from "react";

import { URL_SERVER } from "./api/config";
import { UserListRow } from "./components/userListRow";
import { NavBar } from "./components/navigationBar/navBar";
import getUsers from './api/getUsers.js';

function App() {
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    getUsers().then(response => setUsers(response.users));
  }, []);

  return (
    <>
      <NavBar/>
      <div className="App content jumbotron justify-center mt-4 mx-4 bg-dark mb-0 text-white">
        <div className="row pb-4 mt-0">
          <div className="h1 col-md">
                  Użytkownicy
          </div>
          <div className="col-md">
                  <a href="" className="btn btn-primary pull-right">Wyświetl aktywnych
                      użytkowników</a>
          </div>
        </div>
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
                <UserListRow key={user.id} user={user}/>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
