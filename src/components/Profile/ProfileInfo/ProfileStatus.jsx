import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateEditMode}>{this.props.status || "No Status"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={(e) => {
                this.setState({
                  status: e.currentTarget.value,
                });
              }}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;