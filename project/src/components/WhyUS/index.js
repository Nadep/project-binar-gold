import "./style.css";
import React from "react";
import icon24h from "./assets/icon_24hrs.svg";
import iconComplete from "./assets/icon_complete.svg";
import iconPrice from "./assets/icon_price.svg";
import iconProfessional from "./assets/icon_professional.svg";

const whyUsData = [
  {
    icon: iconComplete,
    title: "Mobil Lengkap",
    desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: iconPrice,
    title: "Harga Murah",
    desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: icon24h,
    title: "Layanan 24 Jam",
    desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: iconProfessional,
    title: "Sopir Profesional",
    desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

function WhyUs() {
  return (
    <div style={{ margin: "8em" }}>
      <div id="why-us-1" className="why-us">Why Us?</div>
      <div id="why-us-2" className="why-question">Mengapa harus pilih Binar Car Rental?</div>

      <div style={{ display: "flex", gap: "5em" }}>
        {whyUsData.map(({ icon, title, desc }, idx) => (
          <div class="card" key={idx} style={{ flex: 1 }}>
            <img
              width={"32px"}
              height="32px"
              class="card-img-top"
              src={icon}
              alt=""
            />
            <div class="card-body">
              <h4 class="card-title">{title}</h4>
              <p class="card-text">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;