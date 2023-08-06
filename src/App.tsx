import './App.css'
import { Slider } from './components/Slider'

function App() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-bold underline'>
        QR Code with StableDiffusion + ControleNet
      </h1>
      <Slider />
    </main>
  )
}

export default App
