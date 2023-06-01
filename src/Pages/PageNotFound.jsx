import React from 'react'
import { useEffect } from 'react'
import '../Styles/PageNotFound.css'

function PageNotFound() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='not-found'>
        <h2>Uh, oh! Page Not Found (404)</h2>
        <p>We couldn't find the page you were looking for, that's all we know.</p>
    </div>
  )
}

export default PageNotFound