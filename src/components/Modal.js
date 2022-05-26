import React from "react";
import { Modal, Button, Icon, Image } from "semantic-ui-react";

class UserModal extends React.Component {
  render() {
    const { img, open, closeModal } = this.props;

    return (
      <Modal basic open={open} onClose={closeModal}>
        <Modal.Header>Előnézet</Modal.Header>
        <Modal.Content>
          <Image src={img} className="img_prev"/>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Bezár
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default UserModal;
