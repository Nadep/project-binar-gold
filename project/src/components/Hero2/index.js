import React from "react";
import "./style.css";
// import { useHistory } from "react-router-dom";
import MbaImg from "./img_service.png";
import checkIcon from "./check.svg";

const servicesList = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Layanan Airport Transfer / Drop In Out",
];

const Hero2 = () => {
  return (
    <div
      style={{
        marginTop: "6em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginRight: "-50px",
          flex: 1,
          width: "400px",
          height: "auto",
          textAlign: "center",
        }}
      >
        <img src={MbaImg} width="400px" height={"auto"} />
      </div>
      <div style={{ flex: 1 }}>
        <h4>Best Car Rental for any kind of trip in (Lokasimu)!</h4>
        <p style={{margin:"2em 0"}}>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>

        <div>
          {servicesList.map((val, idx) => (
            <div key={idx}>
              <img style={{ display: "inline" }} src={checkIcon} />
              <p style={{ display: "inline" }}>{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;