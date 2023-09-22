import './App.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,OrbitControls} from '@react-three/drei'
import Sunflower from "./Components/Scene"
import CanvasLoader from './Components/Loader'

function App() {
  return (
    <div style={{width:"100%",height:"90vh"}}>
      <Canvas camera={{zoom:1, position:[1000,1500,5],fov:100,far:3000}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader/>}>
          <Sunflower />
          <Environment preset="park" background blur={0.1} />
          <OrbitControls/>
        </Suspense> 
      </Canvas>
      <p>by Alexss</p>
    </div>
  )
}

export default App
