import { IonContent, IonPage } from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container-login">
          <section className="header-login">
            <h1>Welcome Back!</h1>
          </section>
          <section className="input-container">
            <section className="input-field">
              <label>Email</label>
              <input
                name="email"
                placeholder="email here..
              "
                type="text"
              />
            </section>
            <section className="input-field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password here..
              "
              />
            </section>
          </section>
          <section>
            <button className="login-button">Login</button>
            <p>Forgot Password?</p>
          </section>
          <p>
            ALREADY HAVE AN ACCOUNT? <span>SIGN UP</span>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
