import { makeStyles, Grid } from '@material-ui/core';

import styles from '@/styles/landing.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '3rem',
		marginBottom: '3rem',
		paddingLeft: '15px',
		paddingRight: '15px',
		maxWidth: '1500px',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
}));

export default function Description() {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item md={6} xs={12} className={styles.container}>
				<img src="/images/landing/logo.png" className={styles.header} />
				<p className={styles.dsc_description}>
					Google collaborates with university students who are enthusiastic about growing
					developer communities and supports them with commencing student clubs on their
					campuses. Developer Student Clubs is a program that recognizes and supports
					university students who are excited about growing developer communities that
					cultivate learning, sharing, and collaboration.
				</p>
			</Grid>
			<Grid item md={6} className={styles.introImg}>
				<img
					src="https://image.freepik.com/free-vector/modern-isometric-illustration-work-from-home_145666-793.jpg"
					className={styles.intro_image}
				/>
			</Grid>
		</Grid>
	);
}
