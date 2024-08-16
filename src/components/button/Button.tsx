import React from "react";

interface Button extends React.ButtonHTMLAttributes<HTMLElement> {
	className?: string;
	loading?: boolean;
	type?: "submit" | "button";
	isHidden?: boolean;
  typeButton?:number,
}

const Button = ({
	className,
	loading = true,
	type,
	children,
	onClick,
  typeButton=1,
}: Button) => {
	return (
		<button
			className={`border-2 px-6 py-2 text-normal box-border transitionMain 
        ${className} ${typeButton === 1 ? "text-white bg-black":" text-black bg-white"}`
      }
			type={type}
			onClick={onClick}
		>
			{loading ? `${children}` : ""}
		</button>
	);
};

export default Button;
