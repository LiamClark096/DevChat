import React, { useState } from "react";
import moment from "moment";
import { Comment, Image } from "semantic-ui-react";
import UserModal from "../Modal";

const isOwnMessage = (message, user) => {
  return message.user.id === user.uid ? "message__self" : "";
};

const isImage = (message) => {
  return message.hasOwnProperty("image") && !message.hasOwnProperty("content");
};

const timeFromNow = (timestamp) => moment(timestamp).fromNow();

const generate = (msg) => {
  var expression =
  // eslint-disable-next-line
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
  if (msg.match(regex)) {
    return (
      <a href={msg} target="_blank" rel="noopener noreferrer">
        {msg}
      </a>
    );
  }
  return msg;
};

const Message = ({ message, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Comment>
        <Comment.Avatar src={message.user.avatar} />
        <Comment.Content className={isOwnMessage(message, user)}>
          <Comment.Author as="a"  style={{ color: "white" }}>{message.user.name}</Comment.Author>
          <Comment.Metadata  style={{ color: "grey" }}>{timeFromNow(message.timestamp)}</Comment.Metadata>
          {isImage(message) ? (
            <Image
              src={message.image}
              className="message__image"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <Comment.Text  style={{ color: "white" }}>{generate(message.content)}</Comment.Text>
          )}
        </Comment.Content>
      </Comment>
      <UserModal
        open={open}
        closeModal={() => setOpen(false)}
        img={message.image}
      />
    </React.Fragment>
  );
};

export default Message;
