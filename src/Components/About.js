import React from "react";
import { Container, Box } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Divider from '@mui/material/Divider';
import logo from "../images/youtube-logo-2431.svg"

import "../styles/About.css";

function About() {

	function TabPanel(props) {
		const { children, value, index, ...other } = props;
	
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
	
	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};
	
	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}

	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<Container maxWidth="md">
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/about"
          aria-current="page"
        >
          About
        </Link>
      </Breadcrumbs>
			<div className="header">
				<h1>Youtube React App</h1>
				<Link className="logo" to="/">
					<img width="200rem" src={logo} alt="Youtube Logo" />
        </Link>
				<p>The Youtube React Project was designed to assess the React skills we have gained during this module. Besides to practice and strengthen one of the most important soft skills like teamwork, collaboration and creativity.</p>
			</div>
			
			<Box className="team-info">
				<Box sx={{ width: '100%' }}>
					<h2>Team Members</h2>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab label="Oscar A Varon" {...a11yProps(0)} />
							<Tab label="Charlie Moran" {...a11yProps(1)} />
							<Tab label="Juan Bowers" {...a11yProps(2)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						My name is Oscar. I’m a Software Engineer with a passion for building software.
					</TabPanel>
					<TabPanel value={value} index={1}>
						My name is Charlie Moran. I’m a Software Engineer with a passion for building software.
					</TabPanel>
					<TabPanel value={value} index={2}>
						My name is Juan. I’m a Software Engineer with a passion for building software.
					</TabPanel>
				</Box>
				<Box sx={{ width: '100%' }} className="team-liks" >
					<h2>GitHub Links</h2>
					<List sx={{ width: '100%', bgcolor: "#FFF"}}>
						<ListItem key="0"> 
							<ListItemAvatar>
								<Avatar>
									<ImageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText 
								primary="Project Manager" 
								secondary={
									<a target="blank" href="https://github.com/anvaron">Oscar's GitHub</a>
								} />
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem key="1"> 
							<ListItemAvatar>
								<Avatar>
									<ImageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText 
								primary="Software Engineer" 
								secondary={
									<a target="blank" href="https://github.com/CharlieMoran">Charlie's GitHub</a>
								} />
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem key="2"> 
							<ListItemAvatar>
								<Avatar>
									<ImageIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText 
								primary="Software Engineer" 
								secondary={
									<a target="blank" href="https://github.com/bowersjuan">Juan's GitHub</a>
								} />
						</ListItem>
						<Divider variant="inset" component="li" />
					</List>
				</Box>
			</Box>
		</Container>
	);
}
export default About;