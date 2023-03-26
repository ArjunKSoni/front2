import React, { useState, useEffect, useRef } from 'react'

const Disease = () => {
  let s1 = []
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState(s1)
  useEffect(() => {
    (async () => {

      try {
        const apicall = await fetch(`adj`, {
          method: 'POST',
          headers: {
          }, body: JSON.stringify({}),
        })
        let data = await apicall.json()
        data = Array.from(data)
        setDisease(s1.concat(data))
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  const fileInput = useRef(null);
  const handleDragOver = event => {
    event.preventDefault();
  };
  const [previewUrl, setPreviewUrl] = useState("");
  const handleOnDrop = event => {
    event.preventDefault();
    event.stopPropagation();
    let imageFile = event.dataTransfer.files[0];
  }; const handleFile = file => {
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  }
  return (
    <div className="wrapper img_drop df">
      <h1>Disease Prediction</h1>
      {!previewUrl && <div className="drop_zone df" onDragOver={handleDragOver} onDrop={handleOnDrop} onClick={() => fileInput.current.click()}>
        <p>Drag and drop image ....</p>
        <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])} /></div>}
      {previewUrl && <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={previewUrl} alt='image' id='img' width={"200px"} height={"200px"} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Disease