import React, { useContext, useState } from "react";
import "./styles.css";
import { UserProvider, UserContext, UserDispatchContext } from "./UserProvider";

function Profile() {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);
  const [username, setUsername] = useState(userDetails.username);

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserDetails({ username });
  }

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleChange}
        />
        <input type="submit" value="Update username" />
      </form>
    </div>
  );
}

function TopNav() {
  const userDetails = useContext(UserContext);

  return (
    <div className="topNav">
      <div className="avatar" />
      <p>{userDetails.username}</p>
    </div>
  );
}

function Page() {
  return (
    <div className="pages">
      <Profile />
    </div>
  );
}

function Main() {
  return (
    <div className="dashboardContent">
      <UserProvider>
        <TopNav />
        <Page />
      </UserProvider>
    </div>
  );
}

function SideNav() {
  return (
    <div className="sideNav">
      <h1 className="title">Demo</h1>
      <p>Home</p>
      <p>Profile</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <SideNav />
      <Main />
    </div>
  );
}

export default function App() {
  return <Dashboard />;
}
