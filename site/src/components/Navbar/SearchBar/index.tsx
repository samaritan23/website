import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useState } from 'react';
import Results from './ResultsContainer';

const useStyles = makeStyles()((theme: Theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.grey[100],
		'&:hover': {
			backgroundColor: theme.palette.grey[200],
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export default function SearchBar() {
	const { classes } = useStyles();
	const [searchText, setSearchText] = useState('');

	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={(e) => setSearchText(e.target.value)}
				value={searchText}
			/>
			<Results searchText={searchText} />
		</div>
	);
}
