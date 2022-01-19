import React from 'react'
import "./Loading.scss"
import { Image } from 'react-bootstrap'

function Loading() {
  return(
      <div className="loading">
        <div className="loading__box-icon">
            <Image src="assets/images/loading.svg" className="img-fluid" />
            <Image src="assets/images/loading-icon-logo.svg" className="img-fluid loading__icon" />
        </div>
      </div>
  )
}

export default Loading;
