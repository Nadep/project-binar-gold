import React from 'react'
// import { useHistory } from 'react-router-dom'
import './style.css'
import carImg from '../Hero/carImg.png'



function Hero() {
    // const { push } = useHistory()
    const pathName = window.location.href

    return (
        <div id="hero-section" class="bg-light-purpple">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 pe-5 align-self-center">
                        <br></br>
                        <br></br>
                        <h1> Sewa dan Rental Mobil Terbaik di kawasan Bandar Lampung, style </h1><br />
                        <h6>Selamat datang di Binar Car Rental, Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h6>
                        <br />
{
                         <button OnClick={() => ('/cari-mobil')} type="button" className='btn btn-success mt-'>
                            <a>Mulai Sewa Mobil</a>
                        </button>
}

                    </div>
                </div>
                <div class="col-lg-7 right-hero"> </div>
                <div class="car-style">
                </div>

                <img class="car img-fluid" src={carImg} alt="car" style={{ width: "60%"}} />
            </div>
        </div>
    )
}

export default Hero