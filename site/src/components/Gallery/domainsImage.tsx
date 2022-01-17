import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
	root: {
		marginTop: theme.spacing(10),
		marginBottom: 0,
		display: 'flex',
		position: 'absolute',
		[theme.breakpoints.down(0)]: {
			display: 'none',
		},
	},
	cardWrapper: {
		zIndex: 1,
	},
	card: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: theme.palette.warning.main,
		padding: theme.spacing(8, 3),
	},
	cardContent: {
		maxWidth: 400,
	},
}));

export default function Domains() {
	const { classes } = useStyles();
	return (
		<Container className={classes.root}>
			<Grid container>
				<Grid item className={classes.cardWrapper}>
					<div className={classes.card}>
						<div className={classes.cardContent}>
							<Typography variant="h5" component="h2" gutterBottom>
								Fill something here like the domains
							</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
