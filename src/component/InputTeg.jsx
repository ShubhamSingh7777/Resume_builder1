import React from 'react'
import styles from '../styles/Input.module.css'
const InputTeg = ({laber , ...props}) => {
  return (
    <>
        <div className={styles.ContainerInput}>
            {laber ? <laber >{laber}</laber> : ""}
            <input type="text" {...props} />
        </div>
    </>
  )
}

export default InputTeg