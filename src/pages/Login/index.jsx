import React from "react";
import LoginForm from "../../components/LoginForm";
import "../Login/Login.css"


function LoginPage() {
    return <main>
        <header>
            <h1>create an account</h1>
        </header>
        <h2>
            We always keep your name and email address private.
        </h2>
        <LoginForm/>
    </main>
}

export default LoginPage;