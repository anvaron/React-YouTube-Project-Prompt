import React from "react";

class VideoCommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      comment: "",
    };
  }

  handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ name: value });
  };

  handleCommentChange = (event) => {
    const { value } = event.target;
    this.setState({ comment: value });
  };

  clearInput = () => {
    this.setState({
      name: "",
      comment: "",
    });
  };

  render() {
    const { name, comment } = this.state;
    const { updateCommentHandler } = this.props;

    return (
      <form  >
        <div className="form-control">
          <label htmlFor="name">Name </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comment </label>
          <input
            id="comment"
            name="comment"
            type="text"
            placeholder="..."
            value={comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <button
          onClick={() => {
            updateCommentHandler(name, comment);
            this.clearInput();
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default VideoCommentForm;