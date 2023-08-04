import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { useRef, useEffect } from 'react'

type cylinderProps = {
  styleNames: string
  cylH: number
  cylR: number
}

const Cylinder = ({ styleNames, cylH, cylR }: cylinderProps) => {
  const svgRef = useRef()
  const svgHeight = 750
  const svgWidth = 500
  const viewDistance = 150
  
  useEffect(() => {
    // d3.select('svg').remove()
    const svg = d3.select(svgRef.current).attr('width', svgHeight).attr('height', svgWidth)

    // Cylinder dimensions

    const cylinderHeight = 150 //cylH // cylDimensions.height

    const cylinderRadius = 20 //cylR // cylDimensions.radius
    const ds = 20
    const shapeColor1 = '#e0c6a0'
    const dimColor1 = 'red' //'#30a050'

    // Calculate center position for the cylinder
    const cx = svgWidth / 2 - cylinderRadius
    const cy = (svgHeight - cylinderHeight) / 2

    // Draw circle for the top view of the cylinder
    svg
      .append('circle')
      .attr('cx', cx + cylinderRadius + viewDistance)
      .attr('cy', cy + cylinderHeight / 2)
      .attr('r', cylinderRadius)
      .attr('fill', shapeColor1)

    // Draw diameter dimension on top view
    svg
      .append('line')
      .attr('x1', cx + viewDistance)
      .attr('y1', cy + 30)
      .attr('x2', cx + cylinderRadius * 2 + viewDistance)
      .attr('y2', cy + 30)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('line')
      .attr('x1', cx + viewDistance)
      .attr('y1', cy + 30)
      .attr('x2', cx + viewDistance)
      .attr('y2', cy + cylinderRadius + 25)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('line')
      .attr('x1', cx + cylinderRadius * 2 + viewDistance)
      .attr('y1', cy + 30)
      .attr('x2', cx + cylinderRadius * 2 + viewDistance)
      .attr('y2', cy + cylinderRadius + 25)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('text')
      .attr('x', cx + cylinderRadius + viewDistance - 10)
      .attr('y', cy + 25)
      .text(cylR * 2)
      .attr('fill', dimColor1)
      .attr('stroke-width', 0)

    // Draw the rectangle (cylinder body) front view
    svg
      .append('rect')
      .attr('x', cx)
      .attr('y', cy)
      .attr('width', cylinderRadius * 2)
      .attr('height', cylinderHeight)
      .attr('fill', shapeColor1)

    // Dimensions for front view
    svg
      .append('line')
      .attr('x1', cx + cylinderRadius * 2 + ds)
      .attr('y1', cy)
      .attr('x2', cx + cylinderRadius * 2 + ds)
      .attr('y2', cy + cylinderHeight)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('line')
      .attr('x1', cx + cylinderRadius * 2 + 2)
      .attr('y1', cy + 1)
      .attr('x2', cx + cylinderRadius * 2 + ds)
      .attr('y2', cy + 1)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('line')
      .attr('x1', cx + cylinderRadius * 2 + 2)
      .attr('y1', cy + cylinderHeight - 1)
      .attr('x2', cx + cylinderRadius * 2 + ds)
      .attr('y2', cy + cylinderHeight - 1)
      .attr('stroke', dimColor1)
      .attr('stroke-width', 2)
    svg
      .append('text')
      .attr('x', cx + cylinderRadius * 2 + 25)
      .attr('y', cy + cylinderHeight / 2)
      .text(cylH)
      .attr('fill', dimColor1)
      .attr('stroke-width', 0)
  }, [cylH, cylR])

  return (
    <svg
      className={`mx-auto ${styleNames}`}
      ref={svgRef}></svg>
  )
}

Cylinder.propTypes = {
  styleNames: PropTypes.string.isRequired,
}

export default Cylinder
