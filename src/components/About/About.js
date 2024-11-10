// import React from 'react'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headingArr = ['M', 'Y', ' ', 'J', 'O', 'U', 'R', 'N', 'E', 'Y']

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1 className="aboutmetext">
          <AnimatedLetters
            lettersClassName={letterClass}
            lettersArray={headingArr}
            lettersIndex={15}
          />
        </h1>

        <div className="vertical">
          <div className="scrollable-timeline">
            <VerticalTimeline className="verticalTimeline" lineColor="#ffd700">
              {/* Ariveguru - Associate Project Manager */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work delhi"
                date="October,2023 - October,2024"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                  // marginLeft: '10px',
                }}
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Ariveguru Technnology Solutions Pvt Ltd,Bengaluru,Karnataka
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  Associate Project Manager
                </h3>
              </VerticalTimelineElement>

              {/* Ariveguru - Frontend Developer */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work delhi"
                date="Febrauray,2023 - October,2023"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                }}
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Ariveguru Technnology Solutions Pvt Ltd,Bengaluru,Karnataka
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  Frontend Developer
                </h3>
              </VerticalTimelineElement>

              {/* ADPUSHUP */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work delhi"
                date="May,2022 - Sep,2022"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                }}
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Adpushup,New Delhi
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  Full stack developer Intern
                </h3>
              </VerticalTimelineElement>

              {/* Buisness and UPSC Preparation */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work freelance"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                }}
                date="2018 - 2022"
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  Buisness / Pedagogy Freelancer / UPSC CSE Preparation
                </h3>
                <br />
                <h3 className="vertical-timeline-element-subtitle">
                  <strong>Buisness</strong> : pharmaceutical wholesale
                  distribution
                  <br />
                  <strong>UPSC CSE</strong> Preparation, Gave 3 Attempts
                </h3>
              </VerticalTimelineElement>

              {/* WIPRO */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work wipro"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                }}
                date="2016 - 2018"
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  WIPRO Technnologies
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  {' '}
                  Project Engineer{' '}
                </h3>
              </VerticalTimelineElement>

              {/* EDUCATION */}
              <VerticalTimelineElement
                className="vertical-timeline-element--education college"
                contentStyle={{
                  background: '#115173',
                  color: '#ffd700',
                  height: 'auto',
                }}
                date="2012 - 2016"
                iconStyle={{
                  background: '#115173',
                  color: '#ffd700',
                }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title">
                  SRM Valliammai Engineering college
                </h3>
                <h3 className="vertical-timeline-element-subtitle">
                  Chennai,TN,India
                </h3>

                <h3 className="vertical-timeline-element-subtitle">
                  B.Tech Information Technology
                </h3>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
