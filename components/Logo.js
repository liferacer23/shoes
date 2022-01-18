import React from 'react'
import Image from "next/image";
export default function Logo() {
    return (
        <Image src="/logo.svg" width={100} height={65} alt="logo" />
    )
}
