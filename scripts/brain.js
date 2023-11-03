import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';

document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('theBrain');
    var renderer = new THREE.WebGLRenderer({ canvas: canvas });

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

    camera.position.z = 5;

    const loader = new GLTFLoader();
    loader.load(
        'thebrain.gltf',
        (gltf) => {
            // called when the resource is loaded
            scene.add(gltf.scene);
        },
        (xhr) => {
            // called while loading is progressing
            console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
        },
        (error) => {
            // called when loading has errors
            console.error('An error happened', error);
        }
    );

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});
