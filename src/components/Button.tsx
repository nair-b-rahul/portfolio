import React from 'react'

type ButtonProps = {
    name: string,
    isBeam?: boolean,
    containerClass?: string
}

export default function Button({name, isBeam = false, containerClass}: ButtonProps) {
    return (
        <button className={` btn ${containerClass}`}>
            {isBeam ? <span className={"relative h-3 w-3 flex "}>
                <span className={"btn-ping "}/>
                <span className={"btn-ping_dot "}/>
            </span> : null}
            {name}
        </button>
    )
}
