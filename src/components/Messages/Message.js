import React, { useState } from "react";
import ReceiverMessage from "../../partials/messages/ReceiverMessage";
import SenderMessage from "../../partials/messages/SenderMessage";
import UserModal from "../Modal";

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid;
};

const Message = ({ message, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      {isOwnMessage(message, user) ? (
        <SenderMessage message={message} imgPrev={() => setOpen(!open)} />
      ) : (
        <ReceiverMessage message={message} imgPrev={() => setOpen(!open)} />
      )}

      <UserModal
        open={open}
        closeModal={() => setOpen(false)}
        img={message.image}
      />
    </React.Fragment>
  );
};

export default Message;
