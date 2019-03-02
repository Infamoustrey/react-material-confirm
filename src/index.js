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
  }

  open() {
    this.setState({ open: true });
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
      cancelText,
      confirmText,
      activator,
      activatorText
    } = this.props;
    return (
      <React.Fragment>
        {activator ? (
          <React.Fragment onClick={this.open}>{activator}</React.Fragment>
        ) : (
          <Button variant="contained" color="primary">
            {activatorText ? activatorText : "Confirm"}
          </Button>
        )}
        <Dialog>
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
