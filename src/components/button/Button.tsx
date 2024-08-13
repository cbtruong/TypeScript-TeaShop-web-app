import React from "react"

interface Button extends React.ButtonHTMLAttributes<HTMLElement>{
    className?:string,
    loading?:boolean,
    type?:"submit"| "button",
    isHidden?:boolean,
}

const Button = ({className,loading=true,type,children,onClick}:Button) => {
  return (
    <button className={`border-2 px-6 py-2 text-normal box-border transitionMain ${className}`} type={type} onClick={onClick}>
      {loading ? 
      `${children}`:""
      }
    </button>
  )
}

export default Button
