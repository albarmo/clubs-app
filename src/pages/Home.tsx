import { IonPage, IonIcon, IonList } from "@ionic/react";
import { layersOutline, search, star, settings } from "ionicons/icons";
import ChatContainer from "../components/ChatContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <section className="home-header">
        <section className="header-title">
          <IonIcon size="small" src={layersOutline} /> <h4>Messages</h4>
        </section>
        <section className="header-icon">
          <IonIcon size="small" src={search} />
          <IonIcon size="small" src={star} />
          <IonIcon size="small" src={settings} />
        </section>
      </section>
      <section className="chat-list">
        <ChatContainer name="Albar" chat="Hello can we talk now ?" />
        <ChatContainer name="Alyaa" chat="Hello can we talk now ?" />
        <ChatContainer name="Ambon" chat="Hello can we talk now ?" />
        <ChatContainer name="Ijang" chat="Hello can we talk now ?" />
        <ChatContainer name="Mame" chat="Hello can we talk now ?" />
        <ChatContainer name="Dugong" chat="Hello can we talk now ?" />
        <ChatContainer name="alber" chat="Hello can we talk now ?" />
        <ChatContainer name="alber" chat="Hello can we talk now ?" />
        <ChatContainer name="alber" chat="Hello can we talk now ?" />
        <ChatContainer name="alber" chat="Hello can we talk now ?" />
      </section>
    </IonPage>
  );
};

export default Home;
