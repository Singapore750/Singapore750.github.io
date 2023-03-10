const renderer = new THREE.WebGLRenderer
import {OrbitControls} from '.../modules/OrbitControls.js';

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.z = 5;
camera.position.y = 2;

camera.position.set(0, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

function animate() {
box.rotation.x += 0.01;
box.rotation.y += 0.01;
renderer.render(scene, camera);
}

const orbit = new OrbitControls(camera, renderer.domElement);

renderer.setAnimationLoop(animate);
renderer.render(scene, camera);
