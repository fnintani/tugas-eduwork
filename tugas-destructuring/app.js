/////////Array destructuring////////

const beverages = ["milkshake", "thai tea", "cafe latte", "mineral water", "orange juice"];

const [gelas1, gelas2, gelas3, ...minumanLainnya] = beverages;
console.log(gelas1, gelas2, gelas3, minumanLainnya);

function minumanFavorit([gelas1, gelas2]) {
  const pesan = `minuman favorit tamu adalah ${gelas1} dan ${gelas2}`;
  console.log(pesan);
}

minumanFavorit(beverages);

///////Object destructuring////////

const paket = {
  jenis: "peralatan rumah tangga",
  asuransi: true,
  berat: 5,
  asal: "jakarta",
  tujuan: {
    kota: "bandung",
    kode: "40182"
  }
};

const {jenis, asuransi, berat, tujuan: { kota }, ...dataLainya} = paket;
console.log(jenis, asuransi, berat, kota, dataLainya);

function cetakResi({asuransi = false, berat, tujuan: { kota }}) {
  let ongkir = 10000 * berat;
    if(asuransi) {ongkir += 2000}
  const infoResi = `Kota tujuan: ${kota}, Biaya: ${ongkir}`
  console.log(infoResi)
}

cetakResi(paket)