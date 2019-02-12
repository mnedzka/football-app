import React, { Component } from "react";
import { firebase } from "../../firebase";
import FileUploader from "react-firebase-file-uploader";
import CircularProgress from "@material-ui/core/CircularProgress";

class Fileuploader extends Component {
  state = {
    name: "",
    isUploading: false,
    fileURL: ""
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      });
    }

    return null;
  }

  handleUploadStart = () => {
    this.setState({
      isUploading: true
    });
  };
  handleUploadError = () => {
    this.setState({
      isUploading: false
    });
  };
  handleUploadSuccess = filename => {
    this.setState({
      name: filename,
      isUploading: false
    });

    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          fileURL: url
        });
      });
  };

  render() {
    const { isUploading, fileURL, name } = this.state;
    const { tag, dir } = this.props;
    return (
      <div>
        {!fileURL && (
          <div>
            <div className="label_inputs">{tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref(dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        )}
        {isUploading && (
          <div
            className="progress"
            style={{ textAlign: "center", margin: "30px 0" }}
          >
            <CircularProgress style={{ color: "#98c6e9" }} thickness={7} />
          </div>
        )}

        {fileURL && (
          <div className="image_upload_container">
            <img style={{ width: "100%" }} src={fileURL} alt={name} />
            <div className="remove" onClick={() => this.uploadAgain()}>
              Remove
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Fileuploader;
