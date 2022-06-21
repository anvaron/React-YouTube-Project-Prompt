import React from 'react';
import { Grid } from '@material-ui/core';
//import '../style/video.css';

const VideoListItem = ({video , handleVideoSelect}) => {
    return (
        <Grid container spacing={2}>
					<Grid item xs={6}>
						{/* // <Item> */}
							<img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
							<div className='content'>
									<div className='header '>
										{video.snippet.title}
									</div>
							</div>
            {/* // </Item> */}
					</Grid>
        </Grid>
    )
};
export default VideoListItem;