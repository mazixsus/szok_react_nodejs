import "./App.css";
import { useEffect, useState } from "react";

import { URL_SERVER } from "./api/config";
import { UserListRow } from "./components/usersPanel/userListRow";
import { NavBar } from "./components/navigationBar/navBar";
import { UsersList } from "./components/usersPanel/usersList";
import getUsers from "./api/getUsers.js";
import { MainPage } from "./components/mainPage/mainPage";
import { Route, Routes } from "react-router-dom";
import { UserDetails } from "./components/usersPanel/userDetails";

function App() {
  return (
    <>
      <NavBar />
      <div className="content jumbotron justify-center mt-4 mx-4 bg-dark mb-0 text-white">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
