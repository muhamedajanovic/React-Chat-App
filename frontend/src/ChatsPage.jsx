import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={"7d822339-06ba-4b80-bc6e-6a6f82068570"}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;
