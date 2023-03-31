import React from 'react'


const Home = () => {

  try {
    (async () => {
      const apicall = await fetch(`...`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify({}),
      })
      let data = await apicall.json()
      data = Array.from(data)
      setData(li.concat(data))
    })();
  } catch (error) {

  }
  return (
    <div className='df home'>
      <div className='container h_main df'>
        <form className="d-flex">
          <input className="form-control  s_input" type="search" placeholder="Search for Crops..." aria-label="Search" />
          <button type="submit" className="btn btn-dark s_button">Search</button>
        </form>
      </div>
      <div className='hr'></div>
      <div className='df'>
        <h1>Services</h1>

      </div>
    </div>

  )
}

export default Home