
//import { OrbitControls } from './node_modules/three-orbitcontrols/OrbitControls';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import * as THREE from 'three';
//import { GUI } from 'dat.gui/build/dat.gui.module'

function back(){
  window.location.href="http://localhost:4200/login"
}
let canvas, camera, scene, renderer, gui;

function createGeometry(config) {
  let geometry;
  switch (config.type) {
    case "ring":
      geometry = new THREE.RingGeometry( config.innerRadius, config.outerRadius, 64 );
      break;
    case "sphere":
      geometry = new THREE.SphereGeometry(config.radius, 64, 64);
      break;
    default:
  }
  return geometry;
}

function createMesh(data) {
  const geometry = createGeometry(data);
  const material = (data.materialType == 'basic') ? new THREE.MeshBasicMaterial({side: THREE.DoubleSide}): new THREE.MeshStandardMaterial({side: THREE.DoubleSide});
  data.texture && (material.map = new THREE.TextureLoader().load(data.texture));
  data.color && material.color.set(data.color);
  return new THREE.Mesh(geometry, material);
}

function createPlanetOrbit(orbitDistance) {
  const orbitMesh = createMesh({ type: "ring", innerRadius: orbitDistance - 1, outerRadius: orbitDistance, color: 0xc3c2c2 })
  scene.add(orbitMesh);
  orbitMesh.rotation.x = 0.5 * Math.PI;
}

function initGUI(mesh, data) {
  const params = {
    wireframe: false,
    radius: 1
  };
  const guiFolder = gui.addFolder(data.name);
  guiFolder.add(params, "wireframe").onChange((value) => {
    mesh.material.wireframe = value;
  });
  data.type == 'sphere' && guiFolder.add( params, 'radius', 1, 10 ).step( 0.01 ).onChange((value) => {
    mesh.geometry = new THREE.SphereGeometry(value*data.radius, 64, 64);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function init() {
  canvas = document.getElementById("canvas");

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(-100, 500, 500);
  scene.add(camera);

  scene.add(new THREE.AmbientLight(0x5b5b5b));

  const data = {
    sunData: {
      type: "sphere",
      materialType: 'basic',
      name: "Sun",
      radius: 150,
      color: 0xffffff,
      texture: "https://images.pexels.com/photos/4744818/pexels-photo-4744818.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      rotationSpeed: .007189
    },
    mesh: true,
    planets: [
      {
        data: {
          type: "sphere",
          name: "Mercury",
          radius: 8,
          positionX: 200,
          revolutionSpeed: 0.00479,
          rotationSpeed: .0001,
          color: 0xbcae9c,
          texture: "https://images.pexels.com/photos/6156383/pexels-photo-6156383.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        },
        mesh: true,
        object: true
      },
      {
        data: {
          type: "sphere",
          name: "Venus",
          radius: 18.8,
          positionX: 260,
          revolutionSpeed: 0.0035,
          rotationSpeed: .00006,
          color: 0xe3b886,
          texture: "https://images.pexels.com/photos/4913801/pexels-photo-4913801.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        mesh: true,
        object: true
      },
      {
        data: {
          type: "sphere",
          name: "Earth",
          radius: 20,
          positionX: 330,
          revolutionSpeed: 0.00298,
          rotationSpeed: .01574,
          texture: 'https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        mesh: true,
        object: true,
        satellites: [{
          mesh: true,
          object: true,
          data: {
            type: "sphere",
            name: "moon",
            radius: 5.2,
            color: 0xffffff,
            positionX: 40,
            tilt: 0,
            revolutionSpeed: 0.0102,
            texture: "https://images.pexels.com/photos/4951282/pexels-photo-4951282.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          }
        }]
      },
      {
        data: {
          type: "sphere",
          name: "Mars",
          radius: 10.4,
          positionX: 410,
          revolutionSpeed: 0.00241,
          rotationSpeed: .00866,
          color: 0x827566,
          texture: "https://images.pexels.com/photos/5120184/pexels-photo-5120184.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        mesh: true,
        object: true,
        satellites: [{
          mesh: true,
          object: true,
          data: {
            type: "sphere",
            name: "Phobos",
            radius: 1.2,
            color: 0xB5B2B6,
            positionX: 16,
            tilt: 0,
            revolutionSpeed: 0.02138,
          }
        },
        {
          mesh: true,
          object: true,
          data: {
            type: "sphere",
            name: "Deimos",
            radius: .8,
            color: 0xCDAE89,
            positionX: 24,
            tilt: 0,
            revolutionSpeed: 0.0135,
          }
        }]
      },
      {
        data: {
          type: "sphere",
          name: "Jupiter",
          radius: 60,
          positionX: 600,
          revolutionSpeed: 0.00131,
          rotationSpeed: .045583,
          color: 0xffffff,
          texture: "https://images.pexels.com/photos/3530105/pexels-photo-3530105.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        },
        mesh: true,
        object: true,
      },
      {
        data: {
          type: "sphere",
          materialType: 'basic',
          name: "Saturn",
          radius: 48,
          texture: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          positionX: 800,
          revolutionSpeed: 0.00097,
          rotationSpeed: .036840
        },
        mesh: true,
        object: true,
        satellites: [{
          mesh: true,
          data: {
            type: "ring",
            name: "Saturn rings",
            innerRadius: 56,
            outerRadius: 80,
            color: 0xffffff,
            texture: "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            positionX: 800,
            tilt: -0.3
          }
        }]
      },
      {
        data: {
          type: "sphere",
          name: "Uranus",
          radius: 40,
          positionX: 1000,
          revolutionSpeed: 0.00068,
          rotationSpeed: .014794,
          color: 0xD0F6F8
        },
        mesh: true,
        object: true
      },
      {
        data: {
          type: "sphere",
          name: "Neptune",
          radius: 36,
          positionX: 1200,
          revolutionSpeed: 0.00054,
          rotationSpeed: .09719,
          color: 0x344BB2
        },
        mesh: true,
        object: true,
      },
      {
        data: {
          type: "sphere",
          name: "Pluto",
          radius: 4,
          positionX: 1400,
          revolutionSpeed: 0.0004743,
          rotationSpeed: .0047,
          color: 0x41260F
        },
        mesh: true,
        object: true,
      },
    ]
  };
  gui = new dat.GUI();

  data.mesh = createMesh(data.sunData);
  scene.add(data.mesh);

  // const axesHelper = new THREE.AxesHelper( 1400 );
  // scene.add( axesHelper );
  
  const sunLight = new THREE.PointLight(0xffffff, 3, 2000);
  scene.add(sunLight);
  initGUI(data.mesh, data.sunData);
  
  if (data.planets) {
    data.planets.forEach((planet) => {
      planet.mesh = createMesh(planet.data);
      planet.object = new THREE.Object3D();
      planet.object.add(planet.mesh);
      scene.add(planet.object);
      planet.mesh.position.x = planet.data.positionX;
      planet.object.rotateY(Math.random() * 2 * Math.PI);
      initGUI(planet.mesh, planet.data);
      
      createPlanetOrbit(planet.data.positionX);
      if (planet.satellites) {
        planet.satellites.forEach((satellite) => {
          satellite.mesh = createMesh(satellite.data);
          if (satellite.object){
            satellite.object = new THREE.Object3D();
            satellite.object.add(satellite.mesh);
            planet.mesh.add(satellite.object);
          } else {
            planet.object.add(satellite.mesh);
          }
          satellite.mesh.position.x = satellite.data.positionX;
          satellite.mesh.rotation.x = satellite.data.tilt * Math.PI;
        }) 
      }
    });
  }

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const cursor = {
    x: 0,
    y: 0
  }
  
  window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX;
    cursor.y = e.clientY;
  })
  
  renderer.setAnimationLoop(() => {
    data.mesh.rotateY(data.sunData.rotationSpeed);
    if (data.planets) {
      data.planets.forEach((planet) => {
        planet.mesh.rotateY(planet.data.rotationSpeed)
        planet.object.rotateY(planet.data.revolutionSpeed);
        if(planet.satellites) {
          planet.satellites.forEach((satellite) => {
            satellite.object && satellite.object.rotateY(satellite.data.revolutionSpeed);})
        }
      })
    }
    /*cursor.x > window.innerWidth/2 && (camera.position.x -= cursor.x * 0.5 * 0.0015);
    cursor.x < window.innerWidth/2 && (camera.position.x += cursor.x * 0.5 * 0.0015);
    cursor.y > window.innerHeight/2 && (camera.position.y -= cursor.y * 0.5 * 0.0015);
    cursor.y < window.innerHeight/2 && (camera.position.y += cursor.y * 0.5 * 0.0015);*/
    renderer.render(scene, camera);
  });
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = true;

  window.addEventListener("resize", onWindowResize);
}

init();