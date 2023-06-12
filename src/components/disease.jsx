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

      <div className="bgblack">
        {!previewUrl && <><h1>Disease Prediction</h1><div className="drop_zone df" onDragOver={handleDragOver} onDrop={handleOnDrop} onClick={() => fileInput.current.click()}>
          <p>Drag and drop image ....</p>
          <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])} /></div></>}
        {previewUrl &&
          <>
            <div className='card2'></div>
            <div className="card hei fx">
              <div className="card-block fx">
                <img src={previewUrl} alt='image' width={"300px"} height={"200px"} />
                <h1 className="card-title">Card title</h1>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
              </div>
              <div className="card-block fx">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </>
        }
      </div>
    </div>

  )
}

export default Disease