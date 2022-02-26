import { IonPage, IonSlides, IonSlide, IonContent } from "@ionic/react";
import "./Splash.css";
import meditation from "../materials/meditation.svg";
import enjoy from "../materials/enjoy.svg";
import avatar from "../materials/avatar.svg";

const WelcomeScreen = () => {
  return (
    <div className="container">
      <section className="splash-text">
        <h1>Woaah, Welcome to the Clubs</h1>
        <p style={{ color: "white", fontSize: "14px" }}>
          Explore the app, Find some peace of mind to prepare for meditation.
        </p>
      </section>
      <img src={meditation} alt="image" />

      <p style={{ color: "white", fontSize: "14px" }}>lets start talking</p>
    </div>
  );
};

const ConnectToEvrybody = () => {
  return (
    <div className="container-white white">
      <section className="splash-text-white">
        <h1 id="logo">Chatting</h1>
      </section>
      <img src={enjoy} alt="image" />
      <section className="splash-text-white">
        <h1>Connected To Others</h1>
        <p>we love to connected your</p>
      </section>
    </div>
  );
};

const EverybodyLoveTalking = () => {
  return (
    <div className="container-white white">
      <section className="splash-text-white">
        <h1 id="logo">Hello..</h1>
      </section>
      <section className="splash-image">
        <img src={avatar} alt="image" style={{ width: "80%" }} />
      </section>
      <section className="splash-text-white">
        <h1>Everything starts with Hello</h1>
        <p>we love to connected your</p>
      </section>
      <button className="splash-button"> GET STARTED</button>
    </div>
  );
};

const Tab1: React.FC = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <WelcomeScreen />
          </IonSlide>
          <IonSlide>
            <ConnectToEvrybody />
          </IonSlide>
          <IonSlide>
            <EverybodyLoveTalking />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
