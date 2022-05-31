import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

// import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import _firebase from "../firebase";
import { Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// prettier-ignore
function App({ currentUser, currentChannel, isPrivateChannel, userPosts, secondaryColor }){
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  _firebase.fetchToken(setTokenFound);

  _firebase.onMessageListener().then(payload => {
    setNotification({title: payload.notification.title, body: payload.notification.body})
    setShow(true);
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  const onShowNotificationClicked = () => {
    setNotification({title: "Notification", body: "This is a test notification"})
    setShow(true);
  }

 return ( 
   <React.Fragment>
     <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
          minWidth: 200
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification.title}</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
 <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
    {/* <ColorPanel
      key={currentUser && currentUser.name}
      currentUser={currentUser}
    /> */}
    <SidePanel
      key={currentUser && currentUser.uid}
      currentUser={currentUser}
      primaryColor={"#120e28"}
    />

    <Grid.Column>
      <Messages
        key={currentChannel && currentChannel.id}
        currentChannel={currentChannel}
        currentUser={currentUser}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel
        key={currentChannel && currentChannel.name}
        userPosts={userPosts}
        currentChannel={currentChannel}
        isPrivateChannel={isPrivateChannel}
      />
    </Grid.Column>
  </Grid>
  <Button onClick={() => onShowNotificationClicked()}>Show Toast</Button>
   </React.Fragment>
  )

  }

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStateToProps)(App);
