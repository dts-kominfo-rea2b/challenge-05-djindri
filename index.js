const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
//const sorter = (names, sortNames) => {
  //const list = [];
  //let display = sortNames(names);
  
  //for (let a = 0; a < display.length; a++) {
   // b = a + 1 + "." + display[a];
    //list.push(b);
 // }

  //return list;
//}
const sorter = (names, sortType) => {
  const sortData = sortType(names);
  const sortNames = [];
  for (let i = 0; i < sortData.length; i++) {
    sortNames[i] = `${i + 1}. ${sortData[i]}`;
  }
  return sortNames;
};
  

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
//const sortAscending = (names) => {
  //let c = names.sort((a, b) => (a > b ? 1 : -1));
  //return c;
//};
const sortAscending = (names) => names.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
//const sortDescending = (names) => {
  //let d = names.sort((a, b) => (a > b ? -1 : 1));
  //return d;
//};
const sortDescending= (names) => names.reverse();

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
