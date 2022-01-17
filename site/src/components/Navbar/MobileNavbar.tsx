// import { GoogleAuthLogin } from '@/components/Navbar/AuthProvider';
import { externalUrls, internalUrls } from '@/lib/urls';
import {
	Book as BookIcon,
	Contacts as ContactsIcon,
	EmojiEvents as EmojiEventsIcon,
	Group as GroupIcon,
	Home as HomeIcon,
	Info as InfoIcon,
	LibraryBooks as LibraryBooksIcon,
	Menu as MenuIcon,
} from '@mui/icons-material';
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import NextLink from 'next/link';
import { useState } from 'react';

const backHoverStyles = {
	backgroundColor: '#d9d9d9',
	borderRadius: '0.75rem',
	transition: 'all 0.04s linear',
};

const useStyles = makeStyles()((theme) => ({
	navToggle: {
		display: 'none',
		[theme.breakpoints.down('lg')]: {
			display: 'block',
		},
	},
	backHover: {
		'&:hover': backHoverStyles,
		'&:focus': backHoverStyles,
	},
}));

export default function MobileNavbar() {
	const [navState, navToggle] = useState(false);

	const { classes } = useStyles();

	return (
		<Box>
			<IconButton onClick={() => navToggle(true)} className={classes.navToggle} size="large">
				<MenuIcon />
			</IconButton>
			<Drawer anchor="left" open={navState} onClose={() => navToggle(false)}>
				<List>
					<ListItem className={classes.backHover}>
						<Typography variant="h6" style={{ fontWeight: 'bolder' }}>
							DSC KIIT
							{/* <GoogleAuthLogin /> */}
						</Typography>
					</ListItem>

					<div className={classes.backHover}>
						<DrawerItem label="Home" icon={<HomeIcon />} link={internalUrls.home} />
					</div>
					<div className={classes.backHover}>
						<DrawerItem
							label="Projects"
							icon={<LibraryBooksIcon />}
							link={internalUrls.projects}
						/>
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Blogs" icon={<BookIcon />} link={internalUrls.blogs} />
					</div>
					<div className={classes.backHover}>
						<DrawerItem
							label="Events"
							icon={<EmojiEventsIcon />}
							link={externalUrls.events_page}
						/>
					</div>
					<div className={classes.backHover}>
						<DrawerItem label="Teams" icon={<GroupIcon />} link={internalUrls.team} />
					</div>
					<div className={classes.backHover}>
						<DrawerItem
							label="Mentors"
							icon={<ContactsIcon />}
							link={internalUrls.mentors}
						/>
					</div>
					<div className={classes.backHover}>
						<DrawerItem
							label="Contact"
							icon={<InfoIcon />}
							link={internalUrls.contactUs}
						/>
					</div>
				</List>
			</Drawer>
		</Box>
	);
}

const DrawerItem = (props: IDrawerItemProps) => {
	return (
		<NextLink href={props.link}>
			<ListItem style={{ width: '250px', cursor: 'pointer' }}>
				<ListItemIcon>{props.icon ?? <MenuIcon />}</ListItemIcon>
				<ListItemText>{props.label}</ListItemText>
			</ListItem>
		</NextLink>
	);
};

interface IDrawerItemProps {
	link: string;
	icon: any;
	label: string;
}
