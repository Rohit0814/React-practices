import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import {Outlet} from 'react-router-dom';
import PostListProvider from "./store/post-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <PostListProvider>
      <div className="app-container">
        <div>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        </div>
        <div className="content">
          <Header />
          <Outlet />
          {/* {selectedTab==="home" ?<PostList />:<CreatePost />} */}
          <Footer />
        </div>
      </div>
      </PostListProvider>
  )
}

export default App;
