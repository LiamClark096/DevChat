import React from "react";

import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";

class SidePanel extends React.Component {
  render() {
    const { currentUser, primaryColor, mobileView } = this.props;

    return (
      <React.Fragment>
        {mobileView ? (
          <div className="mobile-menu">
            <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
            <DirectMessages currentUser={currentUser} />
          </div>
        ) : (
          <aside className="sideBar">
            <UserPanel primaryColor={primaryColor} currentUser={currentUser} />
            <Starred currentUser={currentUser} />
            <Channels currentUser={currentUser} />
            <DirectMessages currentUser={currentUser} />
          </aside>
        )}
      </React.Fragment>
    );
  }
}

export default SidePanel;
