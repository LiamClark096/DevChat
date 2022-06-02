import React from "react";
import moment from "moment";
import "./receiverMessage.css";

const ReceiverMessage = ({ message, imgPrev = () => {} }) => {
  const isImage = (message) => {
    return (
      message.hasOwnProperty("image") && !message.hasOwnProperty("content")
    );
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
  return (
    <div className="receivermessage">
      <span>
        {message.user.name} ({timeFromNow(message.timestamp)})
      </span>
      {isImage(message) ? (
        <img
          src={message.image}
          className="message__image"
          onClick={() => imgPrev()}
        />
      ) : (
        <p>{generate(message.content)}</p>
      )}
    </div>
  );
};

export default ReceiverMessage;
