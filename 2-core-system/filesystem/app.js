// menulis dan membaca data di file
// const fs = require('fs');
// console.log(fs);


// MENULIS SECARA SYNCHRONUS
// try{
//     fs.writeFileSync('anjay/ea.txt', "Halo dek ini synchronus");
// } catch(e){
//     console.log(e);
// }

// MENULIS SECARA ASYNCHRONUS
// fs.writeFile('ui.txt', "Halo dek ini asynchronus", (e) => {
//     console.log(e);
// });


// MEMBACA ISI SYNCHRONUS
// const data = fs.readFileSync('data/ea.txt', 'utf-8');
// console.log(data);

//  MEMBACA ISI AYNCHRONUS
// fs.readFile('data/ui.txt','utf-8', (e, data)=>{
//     if(e) throw e;
//     console.log(data);
// })


// membuat prompt pertanyaan di cmd
// const readline = require('readline');
// const rl = readline.createInterface ({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda: ', (nama)=>{
//     rl.question('Masukkan nomor anda: ', (nomor)=>{
//         fs.writeFile('ai.txt', `${nama}, ${nomor}`, (e)=>{
//             console.log(e);
//         })
//         console.log(`terima kasih ${nama} dengan nomor ${nomor}`)
//         rl.close();
//     })
// })


// rl.question('Masukkan nama anda: ', (nama)=>{
//     rl.question('Masukkan nomor anda: ', (nomor)=>{
//         fs.writeFile('ai.txt', `${nama}, ${nomor}`, (e)=>{
//             console.log(e);
//         })
//         console.log(`terima kasih ${nama} dengan nomor ${nomor}`)
//         rl.close();
//     })
// })

const readline = require('readline');
const fs = require('fs');

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

const main = async () => {
    const nama = await tulisPertanyaan("Masukkan nama anda: ");
    const nomor = await tulisPertanyaan("Masukkan nomor anda: ");
    const email = await tulisPertanyaan("Masukkan email anda: ");
    
    const contact = { nama, nomor, email };
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    contacts.push(contact);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));
    console.log("Data berhasil disimpan!");

    rl.close();
};

main();
