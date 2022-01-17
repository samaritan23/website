import type { BannerDataType } from '@/types/index';

import { Container, Paper, Typography, Grid, Link, Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => ({
	mainFeaturedPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.15)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
}));

export default function Banner(props: BannerPropsType) {
	const { classes } = useStyles();
	const { title, link, eye_catcher, image } = props;

	return (
		<Container maxWidth="lg" style={{ marginTop: '1.5rem' }}>
			<Paper
				className={classes.mainFeaturedPost}
				style={{ backgroundImage: `url(${image.url})` }}>
				<div className={classes.overlay} />
				<Grid container>
					<Grid item md={6}>
						<div className={classes.mainFeaturedPostContent}>
							<Typography component="h1" variant="h2" color="inherit" gutterBottom>
								{title}
							</Typography>
							<Typography variant="h5" color="inherit" paragraph>
								{eye_catcher}
							</Typography>
							<Link variant="subtitle1" href={link} target="_blank" rel="noopener">
								Find More About This Here
							</Link>
						</div>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}
type BannerPropsType = Omit<BannerDataType, 'id'>;
