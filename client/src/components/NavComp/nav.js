import PropTypes from 'prop-types'
import React from 'react'
import styleable from 'react-styleable'

import css from './nav.module.css'

function getPrevClassName(props) {
  return props.hasPrevious ? css.prev : css.prevHidden
}

function getNextClassName(props) {
  return props.hasNext ? css.next : css.nextHidden
}

function Nav(props) {
  return (
    <div className={css.root}>
      <button className={getPrevClassName(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={getNextClassName(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
}

export default styleable(css)(Nav)