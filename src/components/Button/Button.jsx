import React,{Fragment} from 'react';
import classes from  './Button.module.css'

const Button = () => {
  return (
    <Fragment>
      <div className={classes.container}>
      <button className={classes.btn}>
        Next Quote
      </button>
      </div>
      
    </Fragment>
  )
}

export default Button