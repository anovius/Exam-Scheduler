import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import FileService from '../../store/action/file.service'
import './shared.css'
import Swal from 'sweetalert2'

function Upload() {
  const [name, setName] = React.useState('Drag and drop or select file')
  const [file, setFile] = React.useState(null)
  const onDrop = useCallback(acceptedFiles => {
    setName(acceptedFiles[0].name)
    setFile(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  
  const upload = () => {
    setName('Uploading ...')
    const formData = new FormData();
    formData.append('file', file);
    const route = window.location.pathname.split('/');
    formData.append('type', route[2]);
    FileService.upload(formData).then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'File Uploaded Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      setName('Drag and drop or select file')
    })
  }

  return (
    <>
    <div {...getRootProps()} className='file-drop'>
      <input {...getInputProps()} />
      <p className='mt-3'>{name}</p>
    </div>
    <div className='d-grid gap-2 p-4'>
      { name !== 'Drag and drop or select file' && <button class="btn btn-success" type="button" onClick={upload}>Upload</button>}
    </div>
    </>
  )
}
export default Upload;