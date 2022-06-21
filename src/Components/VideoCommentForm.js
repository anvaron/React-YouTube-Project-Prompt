import React from "react";

class VideoCommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      comment: '',
      commentList: [],//this.props.comments,
      isValid: false,
    };
  }

  handleNameChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        name: value,
        isValid: true,
      });
    }
  };

  handleCommentChange = (event) => {
    const { value } = event.target;
    if (value !== ''){
      this.setState({
        comment: value,
        isValid: true,
      });
    }
  };

  handleFormReset = () => {
    this.setState({
      name: '',
      comment: '',
      isValid: false,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // >> Checking field validations
    if(this.state.isValid) {
      let commentsArray = [...this.state.commentList];
      const newComment = {};

      // >> Validating if there are any previous comments 
      // if(this.state.commentList.length > 0) {
      //   commentList = [...this.state.commentList]
      // }
      commentsArray.push({
                          "name": this.state.name,
                          "comment": this.state.comment
                        })
      //console.log(newComment)
      //commentsArray.push(newComment);
      //console.log(commentList)

      this.setState({
        commentList: commentsArray,    
      }, () => this.props.handleUpdateComments(this.state.commentList)
      , () => this.handleFormReset());
    }
    //console.log(this.state.commentList)
    
  }
  
  render() {
    const { name, comment } = this.state;
    const { updateCommentHandler } = this.props;

    return (
      <form onSubmit={this.handleSubmit} >
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
          // onClick={() => {
          //   updateCommentHandler(name, comment);
          //   //this.clearInput();
          // }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default VideoCommentForm;