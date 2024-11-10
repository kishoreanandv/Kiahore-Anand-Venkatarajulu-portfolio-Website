import React from 'react'
import './AnimatedLetters.scss'

const AnimatedLetters = ({
  lettersClassName,
  lettersArray,
  lettersIndex,
  fontSize,
}) => {
  return (
    <span>
      {lettersArray.map((letter, index) => (
        <span
          key={letter + index}
          className={`${lettersClassName} _${index + lettersIndex}`}
          style={{ fontSize }} // Apply font size from props
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
