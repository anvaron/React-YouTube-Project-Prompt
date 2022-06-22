import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';

function VideoCommentList(props) {

  const getCommentsByVideo = (e) => {
    //
    if(e.commentList.length !== 0) {
      return (e.commentList).map((comment, index) => 
      // <ListItem alignItems="flex-start" key={index}> 
      //   <ListItemText
      //     primary={comment['name']}
      //     secondary={
      //       <React.Fragment>
      //         <Typography
      //           sx={{ display: 'inline' }}
      //           component="span"
      //           variant="body2"
      //           color="text.primary"
      //         >
      //           {comment['comment']}
      //         </Typography>
      //       </React.Fragment>
      //     }
      //   />
      // </ListItem>
      <>
        <h2>Last Comments</h2>
        <ListItem key={index}> 
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={comment['name']} secondary={comment['comment']} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
      );
      
    }
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {getCommentsByVideo(props.comment)}
    </List>
  )
}

export default VideoCommentList;