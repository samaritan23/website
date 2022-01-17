import DiscordSection from '@/components/Layout/DiscordSection';
import { createTheme } from '@mui/material/styles';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Navbar';
import PaperParticles from '@/components/Particles/Papers';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import Head from 'next/head';
import type { ReactNode } from 'react';

declare module '@mui/material/styles' {
	//   eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends Theme {}
}

interface IProps {
	children: ReactNode;
	pageName: string;
}

const theme = createTheme({
	typography: {
		fontFamily: ['Montserrat', 'Roboto'].join(','),
	},
});

export default function Layout({ children, pageName }: IProps) {
	return (
		<>
			<Head key="layout">
				<title>DSC KIIT | {pageName.toUpperCase()}</title>
				<Favicons />
				<link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
			</Head>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Navbar />
					{children}
					<DiscordSection />
					<div style={{ position: 'relative' }}>
						<PaperParticles />
						<Footer />
					</div>
				</ThemeProvider>
			</StyledEngineProvider>
		</>
	);
}

function Favicons() {
	return (
		<>
			<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" href="/favicons/favicon.png" />
		</>
	);
}
