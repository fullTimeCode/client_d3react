import PropTypes from 'prop-types'
import { ChangeEvent } from 'react'

type Setter = number | ((newValue: number) => void)
interface InputFormProps {
  styleNames: string
  height: number
  radius: number
  volume: number
  setHeight: Setter
  setRadius: Setter
  setVolume: Setter
}

type Events = {
  e: ChangeEvent
}

const InputForm = ({ styleNames, height, setHeight, radius, setRadius, volume, setVolume }: InputFormProps) => {
  const calculateVolume = (h, r) => {
    console.log('values in calculateVolume', h, r)

    const a = Math.PI * Math.pow(r, 2)
    const v = a * h
    setVolume(v.toFixed(2))
  }
  function handleSubmit(e: Events) {
    e.preventDefault()
    calculateVolume(height, radius)
  }

  function handleClear(e) {
    setHeight(0.0)
    setRadius(0.0)
  }

  const handleHeightChange = (e: Events) => {
    console.log(e.target.value)
    setHeight(parseFloat(e.target.value))
  }

  const handleRadiusChange = (e) => {
    console.log(e.target.value)
    setRadius(parseFloat(e.target.value))
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`bg-transparent p-4 ${styleNames}`}>
        <fieldset>
          <legend className='border-emerald-200 border-spacing-1'>Cylinder Dimensions</legend>
          <div className='inputs grid gap-1 p-2'>
            <label
              htmlFor='cylinder-height'
              className='capitalize'>
              height
            </label>
            <input
              value={height}
              onChange={handleHeightChange}
              type='number'
              id='cylinder-height'
              className='px-2 py-1 bg-emerald-700 text-white rounded-md'
            />
            <label
              htmlFor='cylinder-radius'
              className='capitalize'>
              radius
            </label>
            <input
              value={radius}
              onChange={handleRadiusChange}
              type='number'
              id='cylinder-radius'
              className='px-2 py-1 bg-emerald-700 text-white rounded-md'
            />
          </div>
        </fieldset>
        <br />
        <div className='btn-group flex justify-around'>
          <button
            type='submit'
            className='bg-green-600 px-3 py-1 border-0 text-white ml-2 rounded-md text-2xl font-thin'>
            Calculate Volume
          </button>
          <button
            onClick={handleClear}
            type='reset'
            className='bg-orange-400 px-3 py-1 border-0 text-white ml-2 rounded-md text-2xl font-thin'>
            Clear
          </button>
        </div>
      </form>
      <br />
      <div className='px-3 py-1'>
        Volume of the cylinder is <span className='vol-result text-orange-400 text-2xl'>{volume}</span>
      </div>
    </>
  )
}

InputForm.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default InputForm
