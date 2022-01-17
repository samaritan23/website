import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@mui/styles';
import NextDocument, { DocumentContext } from 'next/document';
import { FC, Fragment } from 'react';

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const materialUiSheets = new MaterialUiServerStyleSheets();
		const originalRenderPage = ctx.renderPage;
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App: FC) => (props) => materialUiSheets.collect(<App {...props} />),
			});
		const initialProps = await NextDocument.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [
				<Fragment key="styles">
					{initialProps.styles}
					{materialUiSheets.getStyleElement()}
				</Fragment>,
			],
		};
	}
}
