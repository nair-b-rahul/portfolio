'use client';

import {useGLTF, useTexture} from '@react-three/drei';

import {Mesh, Object3D} from 'three'; // Importing necessary types

// Define the type for the props
interface HackerRoomProps {
    scale: [number, number, number];
    position: [number, number, number]; // Defining position as a tuple of numbers
    rotation: [number, number, number]; // Defining rotation as a tuple of numbers
}

// Type guard to check if the node is a Mesh
function isMesh(node: Object3D | undefined): node is Mesh {
    return (node as Mesh).isMesh !== undefined;
}
const HackerRoom = (props: HackerRoomProps) => {

    // Load GLTF model
    const { nodes, materials } = useGLTF('/models/hacker-room.glb');

    // Load textures
    const monitortxt = useTexture('textures/desk/monitor.png');
    const screenTxt = useTexture('textures/desk/screen.png');


    return (
        <group {...props} dispose={null}>

            {/* Check if the node is a Mesh before accessing geometry */}
            {isMesh(nodes.screen_screens_0) && (
                <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
                    <meshMatcapMaterial map={screenTxt} />
                </mesh>
            )}
            {isMesh(nodes.screen_glass_glass_0) && (
                <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
            )}
            {isMesh(nodes.table_table_mat_0_1) && (
                <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_2) && (
                <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
                    <meshMatcapMaterial map={monitortxt} />
                </mesh>
            )}
            {isMesh(nodes.table_table_mat_0_3) && (
                <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_4) && (
                <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_5) && (
                <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_6) && (
                <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_7) && (
                <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_8) && (
                <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
                    <meshMatcapMaterial map={monitortxt} />
                </mesh>
            )}
            {isMesh(nodes.table_table_mat_0_9) && (
                <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_10) && (
                <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_11) && (
                <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
            )}
            {isMesh(nodes.table_table_mat_0_12) && (
                <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
            )}
        </group>
    );
}

useGLTF.preload('/models/hacker-room.glb');

export default HackerRoom;
