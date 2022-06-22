import React from "react";
import { Grid, Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class VideoCommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      comment: '',
      commentList: [],
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
    // 
    if(this.state.isValid) {
      let commentsArray = [...this.state.commentList];
      // >> Adding new comment
      commentsArray.push({
                          "name": this.state.name,
                          "comment": this.state.comment
                        })
      this.handleFormReset();
      this.setState({
        commentList: commentsArray,    
      },
      () => this.props.handleUpdateComments(this.state.commentList));
    }
  }
  
  render() {
    const { name, comment } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <>
            <TextField 
              id="outlined-size-small"
              label="Name"
              type="text"
              name="name"
              size="small"
              value={name}
              onChange={this.handleNameChange}
            />
          </>
          <>
            <TextField 
              id="outlined-size-small"
              label="Comment"
              type="text"
              name="comment"
              size="small"
              value={comment}
              onChange={this.handleCommentChange}
            />
          </>
          <Button 
              variant="contained"
              color="error"
              onClick={this.handleSubmit}
            >
            Submit
          </Button>
        </form>
      </>
    );
  }
}

export default VideoCommentForm;