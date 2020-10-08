import React from "react";
import dynamic from "next/dynamic";
const PDFComp = dynamic(() => import("components/PDFComp"), {ssr: false});

// Create Document Component
const Resume: React.FC = () => (
    <div>
        <PDFComp />
    </div>
);

export default Resume;
