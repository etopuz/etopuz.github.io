import * as THREE from "../modules/three.module.js";

const
    fov = 75,
    aspect = innerWidth / innerHeight,
    near = 0.1,
    far = 1000;


export const
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far),
    material = new THREE.MeshNormalMaterial( { flatShading:true} ),
    renderer = new THREE.WebGLRenderer({antialias: true});


setScene();

function setScene(){
    camera.position.z = 15;
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    document.body.appendChild(renderer.domElement);
}

