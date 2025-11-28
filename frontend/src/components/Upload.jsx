import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import uploadIcon from '../assets/upload-icon.png';
import { uploadFile, uploadURL } from '../api';

export default function Upload() {

  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!acceptedFiles.length) return;
    const file = acceptedFiles[0];
    try {
      setStatus("Uploading file...");
      const res = await uploadFile(file);
      setStatus(`Uploaded! ${res.text_chunks} chunks processed`);
    } catch (err) {
      setStatus(`${err.message}`);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleURLUpload = async () => {
    if (!url) return;
    try {
      setStatus("Processing URL...");
      const res = await uploadURL(url);
      setStatus(`URL processed: ${res.text_chunks} chunks`);
    } catch (err) {
      setStatus(`${err.message}`);
    }
  };


  return (
    <div className="container text-start" style={{ marginTop: "6rem", marginBottom: "6rem" }}>
      <h4>Upload Document / Link</h4>
      {/* Upload Document */}
      <div {...getRootProps()} className="bg-dark upload-border mt-4 p-4 text-center" style={{ cursor: 'pointer' }}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <div>
              <img src={uploadIcon} alt='upload-icon' style={{ width: '50px', marginBottom: '0px' }} />
              {/* <p style={{ 'color': "grey" }}>
                Drag & drop file here <p>or</p>
                <span className="px-3 py-1" style={{ color: 'white', backgroundColor: '#0c589aff' }}>
                  Select File
                </span>
              </p> */}
              <p style={{ color: "grey" }}>
                Drag & drop file here <br />
                or <br />
                <span style={{ color: 'white', backgroundColor: '#0c589aff', padding: '4px 8px' }}>
                  Select File
                </span>
              </p>

            </div>
        }
      </div>
      {/* Input Link */}
      {/* <div className="mt-4">
        <input type="text" className="bg-dark w-100 p-3" style={{ border: "1px dashed grey", color: "white" }} placeholder="https://www.youtube.com/watch?v=...or https://www.example.com//..." />
      </div> */}
      <div className="mt-4 row ">
        <div className="col-12 col-lg-11 col-md-11 col-sm-12 mb-3 "
          style={{ paddingRight: '0' }}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-dark w-100 p-3 border-end-0"
            style={{ border: "1px dashed grey", color: "white" }} placeholder="e.g.  https://www.youtube.com/watch?v=...or https://www.example.com//..."
          />
        </div>

        <div className="col-12 col-lg-1 col-md-1 col-sm-12 .span mb-3 text-start d-flex align-items-center justify-content-center " style={{ cursor: 'pointer', paddingLeft: '0' }}>
          <button
            onClick={handleURLUpload}
            className="btn-ask text-uppercase">
            Upload
          </button>
        </div>
      </div>
      {status && <p className="mt-3 text-info">{status}</p>}
    </div>
  );
}