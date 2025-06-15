import "./App.css";
import Footer from "./COMPONENTS/LAYOUT/home/Footer";
import ContextProvider from "./COMPONENTS/UI/context/ContextProvider";
import { Route, Link, useLocation } from "wouter";
import Home from "./COMPONENTS/LAYOUT/home/Home";
import Search from "./COMPONENTS/LAYOUT/search/Search";
import Post from "./COMPONENTS/LAYOUT/post/Post";
import Likes from "./COMPONENTS/LAYOUT/Likes/Likes";
import Profile from "./COMPONENTS/LAYOUT/profile/Profile";
import Settings from "./COMPONENTS/LAYOUT/profile/Settings";
import ParamProfile from "./COMPONENTS/UI/ParamProfile";
import AppSetting from "./COMPONENTS/LAYOUT/profile/AppSetting";

function App() {
  const [location] = useLocation();
  return (
    <ContextProvider>
      <div className="flex h-screen flex-col w-screen bg-white relative ">
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/post" component={Post} />
        <Route path="/profile" component={Profile} />
        <Route path="/home/:id">
          {(param) => <ParamProfile id={param.id} />}
        </Route>
        <Route path="/search/:id">
          {(param) => <ParamProfile id={param.id} />}
        </Route>
        <Route path="/likes" component={Likes} />
        <Route path="/setting" component={Settings} />
        {location === "/setting" ? "" : <Footer />}
      </div>
    </ContextProvider>
  );
}

export default App;
