import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()
  return (
    <Html
      as='div'
      center
      className="flex justify-center items-center flex-col"
    >
      <span className='canvas-load'></span>
      <p className='font-sm/[14px] text-white font-extrabold mt-40' >{progress.toFixed(2)}% loaded</p>
    </Html>
  )
}

export default CanvasLoader