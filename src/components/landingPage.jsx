import React, { useContext, useState } from 'react'
import Authcontext from '../context/authcontext'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const { crop, search } = useContext(Authcontext)
    const [sea, setSearch] = useState([])
    const handleOnclick1 = (e) => {
        // e.preventDefault()
        setSearch(crop.cn[1])
        search(crop.cn[1])
    }
    const handleOnclick2 = (e) => {
        // e.preventDefault()
        setSearch(crop.cn[2])
        search(crop.cn[2])
    }
    const handleOnclick3 = (e) => {
        // e.preventDefault()
        setSearch(crop.cn[3])
        search(crop.cn[3])
    }
    return (
        <>
            <div className='lpMain'>
                {crop.status === "success" && <><div className="box7">
                    <div className="desc7">
                        <h1>{crop.cn[0]}</h1>
                        <p>{crop.cd}</p>
                    </div>
                    <div className="img7"><img src={crop.ci[0]} alt="" /></div>
                </div>
                    <section className="center7">
                        <div className="black17">
                            <div id="body7">
                                <h2>Nitrogen</h2><br />
                                <p>{crop.crop[1]}</p>
                            </div>
                            <div id="body7">
                                <h2>Phosphorus</h2><br />
                                <p>{crop.crop[2]}</p>
                            </div>
                            <div id="body7">
                                <h2>Potassium</h2><br />
                                <p>{crop.crop[3]}</p>
                            </div>
                            <div id="body7">
                                <h2>Temperature</h2><br />
                                <p>{crop.crop[4]}</p>
                            </div>
                            <div id="body7">
                                <h2>Humidity</h2><br />
                                <p>{crop.crop[5]}</p>
                            </div>
                            <div id="body7">
                                <h2>Ph</h2><br />
                                <p>{crop.crop[6]}</p>
                            </div>
                            <div id="body7">
                                <h2>Rainfall</h2><br />
                                <p>{crop.crop[7]}</p>
                            </div>
                        </div>
                    </section>
                    <div className="black7">
                        <form >
                            <div className="card7">
                                <Link to={"/landingPage"}><button onClick={handleOnclick1} name="search" value={crop.cn[1]}><img src={crop.ci[1]} alt="" /></button></Link>
                                <p>{crop.cn[1]}</p>
                            </div>
                        </form>
                        <form >
                            <div className="card7">
                                <Link to={"/landingPage"}><button onClick={handleOnclick2} name="search" value={crop.cn[2]}><img src={crop.ci[2]} alt="" /></button></Link>
                                <p>{crop.cn[2]}</p>
                            </div>
                        </form>
                        <form >
                            <div className="card7">
                                <Link to={"/landingPage"}><button onClick={handleOnclick3} name="search" value={crop.cn[3]}><img src={crop.ci[3]} alt="" /></button></Link>
                                <p>{crop.cn[3]}</p>
                            </div>
                        </form>
                    </div></>}
                {crop.status === "fail" && <><div>
                    <section className="body4">
                        <img src="../static/pngwing.com.png" alt="" height="200px" width="250px" />
                        <h1 className="h4">No Result Found</h1>
                        <Link to="/"><button className="button4">Continue</button></Link>
                    </section>
                </div></>}
            </div>
        </>
    )
}

export default LandingPage