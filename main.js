import * as THREE from 'three';
import {gsap} from "gsap";
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const group = new THREE.Group();

const box1 = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshBasicMaterial({color: "white"})
);
const axesHelper = new THREE.AxesHelper(5);

group.add(box1);
scene.add(group);
scene.add(axesHelper)

const size = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 6;
scene.add(camera);

const canvas = document.querySelector(".main");

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(size.width, size.height)

// gsap.to(group.position, {x: -3, duration: 1, delay: 2})

const animation = () => {
    // camera.position.y = Math.sin(clock.getElapsedTime());
    // camera.position.x = Math.cos(clock.getElapsedTime());
    // camera.lookAt(group.position)

    controls.update()
    renderer.render(scene, camera);
    window.requestAnimationFrame(animation)
}
animation()



