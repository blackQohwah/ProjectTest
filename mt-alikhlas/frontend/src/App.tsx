import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './header/Header';
import { NavMenu } from './header/NavMenu';
import { CircleLoader } from 'react-spinners';
import { LoremText } from './Lorem';
import { ProgressBar } from './progressBar/ProgressBar';
import { ProgressNav } from './progressBar/ProgressNav';
import { Hero } from './hero/Hero';
import { DividerAbout } from './divider/DividerAbout';
import { DividerQandA } from './divider/DividerQandA';
import { About } from './about/About';
import { HeaderWithRouter as HeaderQandA } from './questionAndAsk/HeaderQanA';
import { AskPage } from './questionAndAsk/AskPage';
import { HomePage } from './questionAndAsk/HomePage';
import { SearchPage } from './questionAndAsk/SearchPage';
import { QuestionPage } from './questionAndAsk/QuestionPage';
import { SignInPage } from './questionAndAsk/SignInPage';
import { SignOutPage } from './questionAndAsk/SignOutPage';
import { NotFoundPage } from './questionAndAsk/NotFoundPage';
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@emotion/react';
import { AuthProvider } from './questionAndAsk/Auth';

function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   }, []);
   return (
      <div>
         {loading ? (
            <div
               css={css`
                  text-align: center;
                  justify-content: center;
                  display: flex;
                  width: 100%;
                  height: 100vh;
                  align-items: center;
               `}
            >
               <CircleLoader size={100} color={'#08913c'} loading={loading} />
            </div>
         ) : (
            <AuthProvider>
               <BrowserRouter>
                  <div className="App">
                     <ProgressNav />
                     <ProgressBar />
                     <Header>
                        <NavMenu />
                     </Header>
                     <Hero />
                     <DividerAbout>
                        <ProgressNav />
                     </DividerAbout>
                     <LoremText />
                     <About />
                     <LoremText />
                     {/* <DividerQandA>
                        <ProgressNav />
                     </DividerQandA> */}
                     <HeaderQandA />
                     <Switch>
                        <Redirect from="/index.html" to="/" />
                        <Route exact path="/" component={HomePage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/ask">
                           <AskPage />
                        </Route>
                        <Route
                           path="/questions/:questionId"
                           component={QuestionPage}
                        />
                        <Route
                           path="/signin"
                           render={() => <SignInPage action="signin" />}
                        />
                        <Route
                           path="/signin-callback"
                           render={() => (
                              <SignInPage action="signin-callback" />
                           )}
                        />
                        <Route
                           path="/signout"
                           render={() => <SignOutPage action="signout" />}
                        />
                        <Route
                           path="/signout-callback"
                           render={() => (
                              <SignOutPage action="signout-callback" />
                           )}
                        />
                        <Route
                           path="/questions/:questionId"
                           component={QuestionPage}
                        />
                        <Route component={NotFoundPage} />
                     </Switch>
                     <LoremText />
                  </div>
               </BrowserRouter>
            </AuthProvider>
         )}
      </div>
   );
}

export default App;
