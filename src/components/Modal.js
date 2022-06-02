import React from "react";
import { Modal, Button, Icon, Image } from "semantic-ui-react";

class UserModal extends React.Component {
  render() {
    const { img, open, title, closeModal } = this.props;

    return (
      <Modal basic open={open} onClose={closeModal}>
        <Modal.Header>{title || ""}</Modal.Header>
        <Modal.Content>
          <Image src={img} className="img_prev"/>
          <Button className="previewCloseBtn" color="red" inverted onClick={closeModal}>
            <Icon name="remove" />
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}

export default UserModal;
