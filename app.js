import * as THREE from "./modules/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement)

const box = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color:0x00ff00})
const mesh = new THREE.Mesh(box, mat);
scene.add(mesh);
camera.position.z = 5;

animate();

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mesh.rotation.y += 0.01;
}

