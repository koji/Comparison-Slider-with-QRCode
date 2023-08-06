import qrCode from '../../assets/qr_code.png'
import generatedQrCode from '../../assets/generated.png'
import { useState } from 'react'
export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className='w-full relative' onMouseUp={handleMouseUp}>
      <div
        className='relative w-full max-w-[500px] aspect-auto m-auto overflow-hidden select-none'
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <img alt='generated qr code' src={generatedQrCode} />
        <div
          className='absolute top-0 left-0 right-0 w-full max-w-[500px] aspect-auto m-auto overflow-hidden select-none'
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img alt='qr code' src={qrCode} />
        </div>
        <div
          className='absolute top-0 bottom-0 w-1 bg-amber-600 cursor-ew-resize max-h-[500px]'
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className='bg-amber-600 absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]' />
        </div>
      </div>
    </div>
  )
}
