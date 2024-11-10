import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logotext from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greet = ['H', 'o', 'l', 'a', ',']
  const prefix = ['I', "'", 'm']
  const nameArray = [
    'i',
    's',
    'h',
    'o',
    'r',
    'e',
    ' ',
    'a',
    'n',
    'a',
    'n',
    'd',
    ' ',
    'v',
    'e',
    'n',
    'k',
    'a',
    't',
    'a',
    'r',
    'a',
    'j',
    'u',
    'l',
    'u',
  ]

  const jobArray = [
    'A',
    's',
    's',
    'o',
    'c',
    'i',
    'a',
    't',
    'e',
    ' ',
    'P',
    'r',
    'o',
    'j',
    'e',
    'c',
    't',
    '',
    'M',
    'a',
    'n',
    'a',
    'g',
    'e',
    'r',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            lettersClassName={letterClass}
            lettersArray={greet}
            lettersIndex={10}
          />
          <br />
          <AnimatedLetters
            lettersClassName={letterClass}
            lettersArray={prefix}
            lettersIndex={12}
          />
          <div className="namearray">
            <img src={Logotext} alt="developer" />
            <AnimatedLetters
              lettersClassName={letterClass}
              lettersArray={nameArray}
              lettersIndex={15}
            />
          </div>
          {/* <br /> */}

          <div className="roleArray">
            <AnimatedLetters
              lettersClassName={letterClass}
              lettersArray={jobArray}
              lettersIndex={22}
              fontSize={30}
            />
          </div>
        </h1>
        <div className="otherroles">
          <h2> Full Stack Developer / Public Speaker </h2>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/about" className="flat-button">
            MY JOURNEY
          </Link>
          <Link to="/portfolio" className="flat-button">
            PORTFOLIO
          </Link>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
