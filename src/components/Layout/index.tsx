import React from "react";
import Head from "next/head";

interface LayoutProps {
    title: string;
    children: React.ReactChild
}

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {props.children}
        </div>
    )
} 

export default Layout;
