import React from 'react'
import web from '../components/Image/cover.png'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <>
    <section id="header" className="d-flax align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flax justify-content-center flex-column" >
                    <h1>
                        Welcome To <strong className="brand-name"> SkWeb</strong>
                    </h1>
                        <h2 className="my-3">
                            We are the team of developer making websites
                        </h2>
                        <div className="mt-3">
                            <Link to="/service" className="btn-get-started">
                                Get Started
                            </Link>
                        </div>
                        </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="img-fluid animated"   alt="webImage" />
                    </div> 
                    </div>   
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home
