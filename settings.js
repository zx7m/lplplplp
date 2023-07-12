const chalk = require("chalk")
const fs = require("fs")
global.mess = {
    masukanusername: '🌸Halo Kakak Yang terhormat Silahkan Masukan Username/id/nick Ya kak Agar kami bisa Mencari username tersebut',
    success: '✅ TUGAS SELESAI',
    admin: '⚠️ Mohon maaf, fitur ini hanya dapat diakses oleh administrator. Jika Anda memiliki pertanyaan, silakan hubungi administrator terlebih dahulu.',
    botAdmin: '⚠️ Maaf, namun untuk menggunakan fitur ini, bot harus memiliki status sebagai administrator. Silakan lakukan konfigurasi yang diperlukan untuk mengaktifkannya.',
    premime: '🔒 Selamat datang di Fitur Spesial Premium! Menawarkan beragam keunggulan eksklusif, fitur ini membutuhkan langganan. Jika Anda tertarik, silakan ketik "Sewa" untuk mendapatkan informasi lebih lanjut.',
    owner: '⚠️ Maaf, fitur ini hanya tersedia untuk pemilik. Jika Anda memiliki hak akses sebagai pemilik, silakan nikmati keistimewaannya.',
    group: '⚠️ Fitur ini dirancang khusus untuk digunakan dalam grup. Dengan memanfaatkannya, Anda dapat memberikan pengalaman yang lebih menarik dan terkoordinasi kepada anggota grup Anda.',
    private: '⚠️ Fitur ini didedikasikan untuk obrolan pribadi. Anda dapat menggunakannya untuk berinteraksi secara intim dan pribadi dengan orang-orang terdekat Anda.',
    bot: '⚠️ Maaf, fitur ini hanya dapat diakses oleh bot. Jika Anda adalah pemilik bot, pastikan bot Anda dikonfigurasi dengan benar untuk mengaktifkan fitur ini.',
    wait: '⌛ Mohon bersabar sejenak. Proses ini sedang berjalan dan akan segera selesai.',
    linkm: '❓ Maaf, tapi saya perlu tahu di mana letak link tersebut. Mohon berikan informasi lebih lanjut.',
    endLimit: '⚠️ Maaf, Anda telah mencapai batas harian. Untuk memberikan kesempatan yang adil kepada semua pengguna, batas akan diatur ulang setiap 12 jam.',
    nsfw: '⚠️ Maaf, fitur nsfw belum diaktifkan. Silakan hubungi administrator untuk mengaktifkan fitur ini dan mengetahui lebih lanjut tentang pengaturannya.',
   denied: '✖️ AKSES DI TOLAK',
}
global.apizein = 'zenzkey_945a0b8a03c5'
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.owner = ['6282228701980']
global.ownernomer = "6282228701980" 
global.ownername = "Lenttobs"
global.botname = "Anyav7"
global.ownernumber = '6282228701980'
global.ownername = 'LENTTOBS 😁'
global.ownerNumber = ["6282228701980@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@lenttobs"
global.waduhlakokabote = ''
global.wm = "lenttobs."
global.packname = "Sticker By"
global.author = "lenttobs"
global.creator = "6282228701980@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.thum = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.log0 = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.err4r = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.thumb = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.websitex = ""
global.ytname = "YT: lenttobs" 
global.socialm = ""
global.location = "indonesia, jawatimur, lumajang" 
global.inilinkgcyawaduh = "https://chat.whatsapp.com/HYj9wu5Jrv6CHoS"
global.lgc = `https://chat.whatsapp.com/FPYkEE8JI6mFoIA4qLYz6G`
global.fprem = `https://telegra.ph/file/0e3353c5fb155a5f1887e.jpg`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})