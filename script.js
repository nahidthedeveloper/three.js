const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: "green" });

const box = new THREE.Mesh(geometry, material);
scene.add(box);

const size = {
  width: 700,
  height: 500,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 4;
camera.position.x = 2;
scene.add(camera);

const terget = document.querySelector(".main");
const rendarer = new THREE.WebGLRenderer({canvas: terget});

rendarer.setSize(size.width, size.height)
rendarer.render(scene, camera);


