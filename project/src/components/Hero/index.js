import React from "react";
import "./style.css";
import img_car from "../Hero/img_car.png";
// import { useHistory } from "react-router-dom";

const Hero = () => {
  return (
    <div class="container-fluid padding-custom">
      <div class="row">
        <div className="col">
          <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p style={{ margin: "24px 0" }}>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>

          <a
            name=""
            id=""
            class="btn btn-primary"
            style={{ background: "#5CB85F", border: "none" }}
            href="/cari-mobil"
            role="button"
          >
            Mulai Sewa Mobil
          </a>
        </div>

        <div className="col">
          <div className="car-style" style={{ position: "relative" }}>
            <div className="car-img-wrapper">
              <img src={img_car} width="600px" height={"auto"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;