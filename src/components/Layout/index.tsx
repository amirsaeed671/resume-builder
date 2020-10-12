import Head from "next/head";
import { ReactElement } from "react";

interface LayoutProps {
	title: string;
	children: React.ReactChild;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps): ReactElement => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			{props.children}
		</div>
	);
};

export default Layout;
