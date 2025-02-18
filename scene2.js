import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( -5, 0, 0 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Draw Planet
const planetColor = new THREE.LineBasicMaterial( { color: 0xe69966 } );
const planet = new THREE.SphereGeometry( 1, 32, 16 ); 
const sphere = new THREE.Mesh( planet, planetColor ); 
scene.add( sphere );

// Draw Car
const cars = [];

let x = new THREE.Vector3(1,0,0);
const topmat = new THREE.MeshBasicMaterial( {color: 0x00ffff} );
const colors = [0x0000ff, 0xff0000, 0x00ff00, 0xffff00, 0xffffff];
for (let i=0; i<5; i++) {
	const carTop = new THREE.BoxGeometry( 0.25, 0.18, 0.18 );
	const carBtm = new THREE.BoxGeometry( 0.1, 0.2, 0.4 );
	const carmat = new THREE.MeshBasicMaterial( {color: colors[i]} );
	const carTopCube = new THREE.Mesh( carTop, topmat ); 
	const carCube = new THREE.Mesh( carBtm, carmat );
	scene.add( carCube );
	scene.add( carTopCube );

	const rot = Math.random()*6.283;
	carCube.rotation.x = rot;
	carTopCube.rotation.x = rot;

	let a = new THREE.Vector3(0,1,0).applyAxisAngle(x, rot);
	let b = new THREE.Vector3(-1,0,0);

	let car = {
		a:a,
		b:b,
		top:carTopCube,
		btm:carCube,
		speed: Math.random()/40 + 0.01
	}	
	cars.push(car);
}


function animate() {

	for (let i=0; i<5; i++) {
		cars[i].top.rotateOnWorldAxis(cars[i].a, cars[i].speed);
		cars[i].btm.rotateOnWorldAxis(cars[i].a, cars[i].speed);
		cars[i].b.applyAxisAngle(cars[i].a, cars[i].speed);
		cars[i].top.position.x = cars[i].b.x;
		cars[i].top.position.y = cars[i].b.y;
		cars[i].top.position.z = cars[i].b.z;
		cars[i].btm.position.x = cars[i].b.x;
		cars[i].btm.position.y = cars[i].b.y;
		cars[i].btm.position.z = cars[i].b.z;
	}
 	renderer.render( scene, camera );
	for( let i=0; i<5; i++) {
		cars[i].top.position.x = 0;
		cars[i].top.position.y = 0;
		cars[i].top.position.z = 0;
		cars[i].btm.position.x = 0;
		cars[i].btm.position.y = 0;
		cars[i].btm.position.z = 0;
	}
}

renderer.setAnimationLoop( animate );