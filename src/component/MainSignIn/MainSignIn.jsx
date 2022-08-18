import React from "react";
import './styles.scss';
import MainSignInForm from "../MainSignInForm/MainSignInForm";

const MainSignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <MainSignInForm/>
      </section>
    </main>
  );
};

export default MainSignIn;
