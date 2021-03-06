import React, { ReactElement } from "react";
import Head from "next/head";

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
				<meta name="author" content="Amir Ali" />
				<meta
					name="description"
					content="Build your resume fast and free"
				/>
				<meta
					name="keywords"
					content="resume, cv, next, job, resume-builder, build"
				/>
				<meta name="application-name" content="resume-builder" />
			</Head>
			{props.children}
		</div>
	);
};

export default Layout;
