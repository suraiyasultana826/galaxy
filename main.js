
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../galaxy/img/stars.jpg';
import sunTexture from '../galaxy/img/sun.jpg';
import mercuryTexture from '../galaxy/img/mercury.jpg';
import venusTexture from '../galaxy/img/venus.jpg';
import earthTexture from '../galaxy/img/earth.jpg';
import marsTexture from '../galaxy/img/mars.jpg';
import jupiterTexture from '../galaxy/img/jupiter.jpg';
import saturnTexture from '../galaxy/img/saturn.jpg';
import saturnRingTexture from '../galaxy/img/saturn ring.png';
import uranusTexture from '../galaxy/img/uranus.jpg';
import uranusRingTexture from '../galaxy/img/uranus ring.png';
import neptuneTexture from '../galaxy/img/neptune.jpg';
import plutoTexture from '../galaxy/img/pluto.jpg';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const textureLoader = new THREE.TextureLoader();

const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
});

const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);


const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30);
const mercuryMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(mercuryTexture)
});

const mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
sun.add(mercury);
mercury.position.x = 28;


 function animate(){
    sun.rotateY(0.004);
    renderer.render(scene, camera);
 }

 renderer.setAnimationLoop(animate);

 window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
 });
