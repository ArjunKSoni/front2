import React from 'react'
import { Link } from 'react-router-dom'

const Page_not_found = () => {
    return (
        <div>
            <section class="body4">
                <img src="../static/pngwing.com.png" alt="" height="200px" width="250px" />
                <h1 class="h4">No Result Found</h1>
                <Link to="/"><button class="button4">Continue</button></Link>
            </section>
        </div>
    )
}

export default Page_not_found