//Ternary operator
let tinggi = 120

const cekTinggi = tinggi > 140? "Boleh naik wahana" : "Tidak boleh naik wahana";
console.log(cekTinggi);

//Map dan Filter
const pets = [{nama: "tom", jenis: "kucing", kelas: "mamalia"}, {nama: "jerry", jenis: "tikus", kelas: "mamalia"}, {nama: "spike", jenis: "anjing", kelas: "mamalia"}, {nama: "tweety", jenis: "burung", kelas: "aves"}]

// ----MAP------
const namaHewan = pets.map(list => {
  let uppercase = list.nama.toUpperCase();
  console.log(uppercase)
})

// ----FILTER----
const kelasAves = pets.filter(list => {
  return list.kelas !== "mamalia";
})

console.log(kelasAves);