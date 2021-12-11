import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './shared.css'

function Upload() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-drop'>
      <input {...getInputProps()} />
      <p className='mt-3'>Drag and drop or select file</p>
    </div>
  )
}
export default Upload;