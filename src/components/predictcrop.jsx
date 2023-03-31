import React from 'react'

const Predictcrop = () => {
    return (
        <div className="body3">
            <form action="/get_soil_info" method="post">
                <div class="form3">
                    <div class="head3">
                        <div class="tittle3">
                            <h2>Form</h2>
                        </div>
                        <div class="subhead3">
                            <h3>Enter your soil conditions</h3>
                        </div>
                    </div>
                    <div class="content3">
                        <div class="group3"> Crop you want to grow <input type="text" name="label" placeholder="Enter crop name"
                            id="label" required /></div>
                        <div class="a">
                            <div class="group3">Nitrogen <input type="number" name="N" id="N" required /></div>
                            <div class="group3">Phosphorous<input type="number" name="P" id="P" required /></div>
                        </div>
                        <div class="b">
                            <div class="group3">Potassium <input type="number" name="K" id="K" required /></div>
                            <div class="group3">Temperature (in C)<input type="number" name="temperature" id="temperature"
                                required /></div>
                        </div>
                        <div class="c">
                            <div class="group3">Humidity <input type="number" name="humidity" id="humidity" required /></div>
                            <div class="group3">Rainfall <input type="number" name="rainfall" id="rainfall" required /></div>
                        </div>
                        <div class="group3"></div>ph level <input type="number" name="ph" id="ph" required />
                    </div>

                    <div class="button3">
                        <button type="submit" class="btn btn-dark">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Predictcrop