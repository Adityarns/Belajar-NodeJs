const { simpanPertanyaan, tulisPertanyaan } = require("./contacts");

const main = async () => {
    const nama = await tulisPertanyaan("Masukkan nama anda: ");
    const nomor = await tulisPertanyaan("Masukkan nomor anda: ");
    const email = await tulisPertanyaan("Masukkan email anda: ");
    simpanPertanyaan (nama, nomor, email)
};

main();
