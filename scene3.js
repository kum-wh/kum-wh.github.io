import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js'
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const cam = new THREE.Vector3(2, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Import Texture
const texLoader = new THREE.TextureLoader();
const brickTex = texLoader.load('images/brick.jpg');
const brickMat = new THREE.MeshBasicMaterial( { map: brickTex } );
const ceilTex = texLoader.load('images/ceiling.jpg');
ceilTex.wrapS = THREE.RepeatWrapping;
ceilTex.wrapT = THREE.RepeatWrapping;
ceilTex.repeat.set( 4, 4 );
const ceilMat = new THREE.MeshBasicMaterial( { map: ceilTex } );
const floorTex = texLoader.load('images/floor.png');
floorTex.wrapS = THREE.RepeatWrapping;
floorTex.wrapT = THREE.RepeatWrapping;
floorTex.repeat.set( 4, 4 );
const floorMat = new THREE.MeshBasicMaterial( { map: floorTex } );
const potTex = texLoader.load('images/pot.png');

// Draw Room
const back = new THREE.BoxGeometry(1, 4, 6);
const backCube = new THREE.Mesh( back, brickMat );
backCube.translateX(-3);
const front = new THREE.BoxGeometry(1, 4, 6);
const frontCube	= new THREE.Mesh(front, brickMat);
frontCube.translateX(3);
const left = new THREE.BoxGeometry(1, 4, 6);
const leftCube = new THREE.Mesh(left, brickMat);
leftCube.translateZ(3);
leftCube.rotation.y = 1.57;
const right = new THREE.BoxGeometry(1, 4, 6);
const rightCube = new THREE.Mesh(right, brickMat);
rightCube.translateZ(-3);
rightCube.rotation.y = 1.57;
scene.add( backCube, frontCube, leftCube, rightCube );
const ceiling = new THREE.BoxGeometry(1, 6, 6);
const ceilCube = new THREE.Mesh(ceiling, ceilMat);
ceilCube.translateY(2);
ceilCube.rotation.z = 1.57;
const floor = new THREE.BoxGeometry(1, 6, 6);
const floorCube = new THREE.Mesh(floor, floorMat);
floorCube.translateY(-2);
floorCube.rotation.z = 1.57;
scene.add(ceilCube, floorCube);

// Draw Objects
const table = new THREE.BoxGeometry(1, 0.1, 2.1);
const tableMat = new THREE.MeshBasicMaterial( { color: 0x4f74a8 } );
const tableCube = new THREE.Mesh(table, tableMat);

const legMat = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const leg1 = new THREE.BoxGeometry(0.1, 1, 0.1);
const leg1Cube = new THREE.Mesh(leg1, legMat);
leg1Cube.translateX(0.4);
leg1Cube.translateY(-0.5);
leg1Cube.translateZ(0.9);
const leg2 = new THREE.BoxGeometry(0.1,1, 0.1);
const leg2Cube = new THREE.Mesh(leg2, legMat);
leg2Cube.translateX(-0.4);
leg2Cube.translateY(-0.5);
leg2Cube.translateZ(0.9);
const leg3 = new THREE.BoxGeometry(0.1,1, 0.1);
const leg3Cube = new THREE.Mesh(leg3, legMat);
leg3Cube.translateX(0.4);
leg3Cube.translateY(-0.5);
leg3Cube.translateZ(-0.9);
const leg4 = new THREE.BoxGeometry(0.1,1, 0.1);
const leg4Cube = new THREE.Mesh(leg4, legMat);
leg4Cube.translateX(-0.4);
leg4Cube.translateY(-0.5);
leg4Cube.translateZ(-0.9);
scene.add(tableCube, leg1Cube, leg2Cube, leg3Cube, leg4Cube);

const geometry = new TeapotGeometry( 0.25, 18 );
const material = new THREE.MeshBasicMaterial( { map: potTex  } );
const teapot = new THREE.Mesh( geometry, material );
teapot.translateY(0.3);
teapot.translateZ(0.4);
teapot.rotation.y = 1.3;
scene.add( teapot );

const circle = new THREE.SphereGeometry( 0.3, 32, 16 ); 
const orange = new THREE.MeshBasicMaterial( { color: 0xc4823f } ); 
const sphere = new THREE.Mesh( circle, orange ); 
sphere.translateY(0.35);
sphere.translateZ(-0.5);
scene.add( sphere );

const mirror = new Reflector(new THREE.PlaneGeometry(1, 2.1), {
	color: new THREE.Color(0x4f74a8),
	textureWidth: window.innerWidth * window.devicePixelRatio,
	textureHeight: window.innerHeight * window.devicePixelRatio,
  })
  
mirror.position.y = 0.06;
mirror.rotation.x = -1.57;
scene.add(mirror);

const y = new THREE.Vector3(0, 1, 0);

function animate() {
	
	camera.position.set( cam.x, 0.9, cam.z );
	camera.lookAt(0,0,0);
	renderer.render( scene, camera );
	cam.applyAxisAngle(y, 0.005);

}