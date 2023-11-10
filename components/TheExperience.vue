<script setup>
import * as THREE from 'three'
// import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let renderer
let controls

const experience = ref(null)

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value)

const bgColor = new THREE.Color('#E1F0C2')

const scene = new THREE.Scene()

scene.fog = new THREE.Fog(bgColor, 0.1, 75)
scene.background = bgColor

const camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 1000)
camera.position.set(0, 2, 4)

scene.add(camera)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const { load } = useGLTFModel()

// const glfLoader = new GLTFLoader()
// const url = 'nuxty/nuxty.gltf'
// let model = ''
// glfLoader.load(url, (resolve, reject) => {

//   console.log(resolve)
//   model = resolve.scene
//   scene.add(model)

// })

const model = await load('nuxty/nuxty.gltf')
scene.add(model)


function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
}

function updateRenderer() {
  renderer.setSize(width.value, height.value)
  renderer.render(scene, camera)
}

function setRenderer() {
  if (experience.value) {
    renderer = new THREE.WebGLRenderer({ canvas: experience.value, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    updateRenderer()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
})

onMounted(() => {
  setRenderer()
  loop()
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
</script>
<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>