import { IonThumbnail } from "@ionic/react";
import "./ChatContainer.css";

interface ContainerProps {
  name: string;
  chat: string;
}

const ChatContainer: React.FC<ContainerProps> = ({ name, chat }) => {
  return (
    <div className="chat-card">
      <section className="chat-user-image-container">
        <img
          className="chat-user-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pVWhgXilxQ894sH6mDq-V-oDhoPLEYWUd7m-fh4f0lZIzzGeLaUEObGOsMouGlRA0XM&usqp=CAU"
        />
      </section>
      <section className="chat-content">
        <strong>{name}</strong>
        <p>{chat}</p>
      </section>
      <section className="chat-info">
        <p className="time">20.00</p>
        <p className="unread">1</p>
      </section>
    </div>
  );
};

export default ChatContainer;
