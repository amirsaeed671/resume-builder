import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <div className="mt-12">
            <button onClick={props.onClick} className="bg-purple-600 rounded-full text-white text-2xl py-3 px-6 focus:outline-none shadow-lg">{props.text}</button>
        </div>
    )
}

export default Button;