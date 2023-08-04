import PropTypes from 'prop-types'
import { Cylinder, InputForm } from '../../components'
import { useState } from 'react'

type homeProps = {
  styleNames: string
}

const Home = ({ styleNames }: homeProps) => {
  const [height, setHeight] = useState<Height | null>(10.0)
  const [radius, setRadius] = useState(1.0)
  const [volume, setVolume] = useState(0.0)
  return (
    <div className={`${styleNames}`}>
      <InputForm
        styleNames=''
        height={height}
        setHeight={setHeight}
        radius={radius}
        setRadius={setRadius}
        volume={volume}
        setVolume={setVolume}
      />
      <hr />
      <Cylinder
        styleNames='bg-transparent'
        cylH={height}
        cylR={radius}
      />
    </div>
  )
}

Home.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Home
