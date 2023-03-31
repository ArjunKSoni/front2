import React, { useContext } from 'react'
import Authcontext from '../context/authcontext'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const { crop } = useContext(Authcontext)
    return (
        <div>
            {crop.status === "success" && <><div class="box7">
                <div class="desc7">
                    <h1>{crop.cn[0]}</h1>
                    <p>{crop.cd}</p>
                </div>
                <div class="img7"><img src={crop.ci[0]} alt="" /></div>
            </div>
                <section class="center7">
                    <div class="black17">
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
                <div class="black7">
                    <form action="/nav" method="post">
                        <div class="card7">
                            <button name="search" value={crop.cn[1]}><img src="../static/{ci[1]}" alt="" /></button>
                            <p>{crop.cn[1]}</p>
                        </div>
                    </form>
                    <form action="/nav" method="post">
                        <div class="card7">
                            <button name="search" value={crop.cn[2]}><img src="../static/{ci[2]}" alt="" /></button>
                            <p>{crop.cn[2]}</p>
                        </div>
                    </form>
                    <form action="/nav" method="post">
                        <div class="card7">
                            <button name="search" value={crop.cn[3]}><img src="../static/{ci[3]}" alt="" /></button>
                            <p>{crop.cn[3]}</p>
                        </div>
                    </form>
                </div></>}
            {crop.status === "fail" && <><div>
                <section class="body4">
                    <img src="../static/pngwing.com.png" alt="" height="200px" width="250px" />
                    <h1 class="h4">No Result Found</h1>
                    <Link to="/"><button class="button4">Continue</button></Link>
                </section>
            </div></>}
        </div>
    )
}

export default LandingPage