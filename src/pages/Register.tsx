import { IonContent, IonPage } from "@ionic/react";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container-register">
          <section className="header-register">
            <h1>Create Your Account</h1>
          </section>
          <section className="input-container">
            <section className="input-field">
              <input
                name="email"
                placeholder="username..
              "
                type="text"
              />
            </section>
            <section className="input-field">
              <input
                name="email"
                placeholder="email..
              "
                type="text"
              />
            </section>
            <section className="input-field">
              <input
                name="password"
                type="password"
                placeholder="password..
              "
              />
            </section>
          </section>
          <section>
            <button className="register-button">Register</button>
            <p>
              ALREADY HAVE AN ACCOUNT? <span>Login</span>
            </p>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
