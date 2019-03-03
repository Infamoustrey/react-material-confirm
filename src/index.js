import React, { Component } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

class ReactMaterialConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.open = this.open.bind(this);
    this.cancel = this.cancel.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  cancel() {
    this.setState({ open: false }, this.props.onCancel());
  }

  confirm() {
    this.setState({ open: false }, this.props.onConfirm());
  }

  render() {
    let {
      title,
      message,
      cancelText,
      confirmText,
      activator,
      activatorText
    } = this.props;
    let { open } = this.state;
    return (
      <React.Fragment>
        {activator ? (
          <span onClick={this.open}>{activator}</span>
        ) : (
          <Button variant="contained" color="primary">
            {activatorText ? activatorText : "Confirm"}
          </Button>
        )}
        <Dialog open={open} onClose={this.close}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" variant="text" onClick={this.cancel}>
              {cancelText ? cancelText : "Cancel"}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.confirm}
            >
              {confirmText ? confirmText : "Confirm"}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ReactMaterialConfirm;
