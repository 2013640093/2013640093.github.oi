function setup(){
	escena= new THREE.Scene();
	camara= new THREE.PrespectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
camara.position.z=5;
renderer= new THREE.WebGLRRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
malla= new.THREE.Mesh(new new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
escena.add(malla);
}
function loop(){
requestAnimationFrame(loop);
malla.rotation.x += 0.01;
malla.rotation.y += 0.01;
renderer.renderer(escena,camara);
}

setup();
loop();
