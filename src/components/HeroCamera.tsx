"use client"
import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import * as THREE from "three";

export default function HeroCamera({children}: { children: React.ReactNode }) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        easing.dampE(groupRef.current.rotation, [-state.pointer.y / 6, state.pointer.x / 5, 0], 0.25, delta)
    })

    return (
        <group ref={groupRef}>{children}</group>
    )
}
