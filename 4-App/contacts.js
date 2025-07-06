
const readline = require('readline');
const fs = require('fs');
const validator = require('validator')

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = 'data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
};

const simpanPertanyaan = (nama, nomor, email) => {
    const cekValidasiInputan = () =>{
        let valid = true;
        if(!validator.isMobilePhone(nomor, 'id-ID')){
            console.log("nomor yang anda masukkan tidak terdaftar")
            valid = false;
        }
        if(!validator.isEmail(email)){
            console.log("email yang anda masukkan salah")
            valid = false;
        }
        return valid;
    }
    if(!cekValidasiInputan()){
        rl.close();
        return;
    }
    const contact = { nama, nomor, email };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
    console.log("Data berhasil disimpan!");
    rl.close();
}

module.exports = {tulisPertanyaan, simpanPertanyaan};