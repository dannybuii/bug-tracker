import React, { Component } from "react";
import {
  Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Modal from "react-modal";
import { connect } from "react-redux";
import { createBug } from "../../actions/bugActions";
// import { addItem } from '../actions/ItemActions';
// import PropTypes from 'prop-types';
Modal.setAppElement("#root");

class CreateModal extends Component {
  state = {
    modal: false,
    name: "",
  };

  // static propTypes = {
  //     isAuthenticated: PropTypes.bool
  // }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createBug(this.state);
    // const newItem = {
    //     name: this.state.name
    // }

    // // Add item via addItem action
    // this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginRight: "1rem" }}
          className="btn btn-small waves-effect waves-light hoverable blue accent-3"
          onClick={this.toggle}
        >
          Create
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="create">Create</Label>
                <Input
                  type="text"
                  name="name"
                  id="create"
                  placeholder="Create"
                  onChange={this.onChange}
                />
                <Button
                  // color="dark"
                  style={{ marginTop: "2rem" }}
                  block
                >
                  Create
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBug: (bug) => dispatch(createBug(bug)),
  };
};

const mapStateToProps = (state) => ({
  item: state.item,
});

// export default connect(mapStateToProps, { addItem })(CreateModal);
export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);
