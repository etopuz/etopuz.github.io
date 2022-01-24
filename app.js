import * as THREE from "./modules/three.module.js";
import {camera, material, renderer, scene} from "./scripts/SceneBasics.js";

const poolSize = 120;
const bound = 30;

const geometries = [
    new THREE.DodecahedronGeometry(1, 0),
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
]


// create random meshes
let pool = [];
for(let i = 0; i < poolSize; i++){
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const mesh = new THREE.Mesh(geometry, material);
    setRandomPosition(mesh);
    pool.push(mesh);
    scene.add(mesh);
}


animate();

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    for(let i = 0; i<poolSize ; i++){
        let mesh = pool[i];

        if (mesh.position.y < -bound + mesh.position.z/4){
            scene.remove(mesh);
            mesh.position.y = bound - mesh.position.z/4;

            scene.add(mesh);
        }

        else{
            mesh.rotation.y += 0.05;
            mesh.position.y -= 0.05
        }

    }

}

function setRandomPosition(mesh){
    mesh.position.x = Math.random() * 100 - 50;

    while(mesh.position.x < 5 && mesh.position.x > -5){
        mesh.position.x = Math.random() * 100 - 50;
    }

    mesh.position.z = Math.random() * 30 - 30;
    mesh.position.y = Math.random() * 50 - 25;
}

// TODO: add buttons
// TODO: make everything responsive :)


