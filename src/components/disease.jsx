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

      {!previewUrl && <><h1>Disease Prediction</h1><div className="drop_zone df" onDragOver={handleDragOver} onDrop={handleOnDrop} onClick={() => fileInput.current.click()}>
        <p>Drag and drop image ....</p>
        <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])} /></div></>}
      {previewUrl &&
        <>
          <div className='card2'></div>
          <div class="card fx">
            <div class="card-block fx">
              <h1 class="card-title">Card title</h1>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            <img src={previewUrl} alt='image' width={"300px"} height={"200px"} />
            <div class="card-block fx">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </>
      }
    </div>

  )
}

export default Disease