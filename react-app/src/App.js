import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllPosts from "./components/AllPosts";
import SinglePost from "./components/SinglePost"
import SplashPage from "./components/SplashPage";
import CreatePost from "./components/CreatePost";
import Search from "./components/search";
import Footer from "./components/Footer";
import NotFound from "./components/PageNotFound";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/posts">
            <AllPosts />
          </Route>
          <Route exact path="/create">
            <CreatePost />
          </Route>
          <Route path="/posts/:postId">
            <SinglePost />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/profile'>
            <UserProfile />
          </Route>
          <Route to='/'>
            <NotFound />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
