require('./settings')
const ngrok = require("@ngrok/ngrok");
const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: lenttobsConnect, useSingleFileAuthState, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, jidDecode, proto } = require("@whiskeysockets/baileys")
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay
} = require("@whiskeysockets/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const owner = JSON.parse(fs.readFileSync('./owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const express = require("express");

const app = express()
const Port = process.env.PORT || 3000;

const http = require('http'); 
const hostname = '127.0.0.1'; 
const port = 30000; 
const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello World'); });

const authtoken_from_env = '2SSDefN61lXMRRE4kd9jSO9bZBX_3gvJXWAuuMwv3k2pMDHuw';

const me = 'asu'


require('./anya.js')
nocache('../anya.js', module => console.log(color('[ DI UBAH ]', 'red'), color(`'${module}'`, 'magenta'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ DI UBAH ]', 'red'), color(`'${module}'`, 'magenta'), 'Updated'))


async function lenttobsBot() {
    	const { state, saveCreds } = await useMultiFileAuthState('anyasesi')
        const lenttobs = lenttobsConnect({
            printQRInTerminal: true,
            logger: pino({ level: 'fatal' }),
            auth: state,
            browser: [`${botname}`, "Safari", "3.0"],
	    getMessage: async key => {
              return {
                
              }
          }
        })
        store.bind(lenttobs.ev)

console.log(color(figlet.textSync(`lenttobs`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'magenta'))

lenttobs.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

lenttobs.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!lenttobs.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(lenttobs, kay, store)
require('./anya')(lenttobs, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		lenttobs.ev.on("groups.update", async (json) => {
			try {
ppgroup = await lenttobs.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				lenttobs.sendMessage(res.id, {
	    text: `🔔 *NOTIFIKASI GRUB* 🔔\n\n🔒 Grup ini telah ditutup oleh sang admin! Hanya para admin yang memiliki keistimewaan untuk mengirim pesan di sini. Ini adalah langkah penting untuk menjaga kerahasiaan, keamanan, dan kualitas diskusi di grup ini. Kami memohon kerjasama dari semua anggota untuk mematuhi aturan ini dengan penuh pengertian. Terima kasih atas perhatiannya! 🙏`,
  });
} else if (res.announce == false) {
  await sleep(2000);
  lenttobs.sendMessage(res.id, {
    text: `🔔 *NOTIFIKASI GRUB* 🔔\n\n🔓 Sungguh suatu momen yang istimewa! Grup ini telah dibuka oleh admin dengan penuh kehangatan dan semangat. Sekarang, setiap peserta memiliki kesempatan untuk berbagi pengetahuan, mengajukan pertanyaan, dan memperkaya diskusi. Mari kita menjaga etika dan saling menghormati satu sama lain dalam berkomunikasi. Selamat bersenang-senang! 🎉✨`,
  });
} else if (res.restrict == true) {
  await sleep(2000);
  lenttobs.sendMessage(res.id, {
    text: `🔐 *NOTIFIKASI GRUB* 🔐\n\n🚫 Informasi grup ini telah dibatasi oleh admin. Sebagai langkah untuk memastikan konsistensi dan keseragaman, hanya para admin yang berhak untuk mengedit info grup. Jika ada perubahan yang diperlukan, harap hubungi admin yang bersangkutan dan sampaikan saran atau pembaruan yang diinginkan. Terima kasih atas pengertiannya! 🙏`,
  });
} else if (res.restrict == false) {
  await sleep(2000);
  lenttobs.sendMessage(res.id, {
    text: `🔓 *NOTIFIKASI GRUB* 🔓\n\n📝 Informasi grup ini kini dapat diedit oleh peserta. Ini adalah kesempatan untuk berkolaborasi dan menambahkan nilai bagi kelompok. Tetap berpegang pada prinsip kebijakan, menjaga kerapihan, dan berkontribusi dengan positif. Ingatlah bahwa kekuatan sebuah grup terletak pada kebersamaan dan keberagaman. Mari kita bersama-sama menciptakan pengalaman yang luar biasa! ✨💪`,
  });
} else if (!res.desc == '') {
  await sleep(2000);
  lenttobs.sendMessage(res.id, {
    text: `📝 *NOTIFIKASI GRUB* 📝\n\n📣 *Deskripsi grup ini telah mengalami perubahan*\n\n"${res.desc}"\n\n📌 Mari kita perhatikan perubahan ini dengan cermat. Pastikan deskripsi grup mencerminkan tujuan, nilai, dan semangat kelompok. Jika ada pertanyaan atau saran, jangan ragu untuk menghubungi admin grup. Terima kasih atas perhatiannya! 🙏`,
  });
} else {
  await sleep(2000);
  lenttobs.sendMessage(res.id, {
    text: `✏️ *NOTIFIKASI GRUB* ✏️\n\n🌟 *Nama grup ini telah diubah menjadi*\n\n*${res.subject}* 🌟\n\n🎉 Selamat datang di grup dengan identitas baru yang lebih segar dan memukau! Mari kita lanjutkan diskusi dan kegiatan dengan semangat baru ini. Jangan ragu untuk berbagi ide, pengalaman, serta menjalin persahabatan yang tak terlupakan di sini. Terima kasih atas partisipasinya! 🙌🌈`,
				});
			} 
			
		});
		
lenttobs.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await lenttobs.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await lenttobs.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await lenttobs.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
tobsWlcm = await getBuffer(ppuser)
tobsLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const tobsbuffer = await getBuffer(ppuser)
                let tobsName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                tobsbody = `
- *Username*:
- @${tobsName.split("@")[0]}
- *NamaGroup*:
- ${metadata.subject} 
- *WaktuMasuk*:
- ${xtime} ${xdate} 
`
lenttobs.sendMessage(anu.id,
 { text: tobsbody,
 contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": tobsWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const tobsbuffer = await getBuffer(ppuser)
                    const tobstime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const tobsdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let tobsName = num
                    const tobsmembers = metadata.participants.length
                    tobsbody =`
- *UserName*:
- @${tobsName.split("@")[0]}
- *NamaGroup*: 
- ${metadata.subject}
- *WaktuKeluar*:
- ${tobstime} ${tobsdate}`
lenttobs.sendMessage(anu.id,
 { text: tobsbody,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": tobsLft,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const tobsbuffer = await getBuffer(ppuser)
const tobstime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const tobsdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let tobsName = num
tobsbody = `Ciee kak @${tobsName.split("@")[0]}, Selamat ya Kamu di promote jadi admin`
   lenttobs.sendMessage(anu.id,
 { text: tobsbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": tobsWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const tobsbuffer = await getBuffer(ppuser)
const tobstime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const tobsdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let tobsName = num
tobsbody = `Yah yang sabar ya kak @${tobsName.split("@")[0]}, Jabatanmu Di cabut Sama atmin...Jangan Berkecil Hati ya Besok tak belikan permen`
lenttobs.sendMessage(anu.id,
 { text: tobsbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": tobsLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

lenttobs.sendTextWithMentions = async (jid, text, quoted, options = {}) => lenttobs.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

lenttobs.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

lenttobs.ev.on('contacts.update', update => {
for (let contact of update) {
let id = lenttobs.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

lenttobs.getName = (jid, withoutContact  = false) => {
id = lenttobs.decodeJid(jid)
withoutContact = lenttobs.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = lenttobs.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === lenttobs.decodeJid(lenttobs.user.id) ?
lenttobs.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

lenttobs.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

lenttobs.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await lenttobs.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await lenttobs.getName(i)}\nFN:${await lenttobs.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	lenttobs.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

lenttobs.setStatus = (status) => {
lenttobs.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

lenttobs.public = true

lenttobs.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await lenttobs.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

lenttobs.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await lenttobs.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

lenttobs.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await lenttobs.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

lenttobs.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await lenttobs.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

lenttobs.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

lenttobs.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

lenttobs.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

lenttobs.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await lenttobs.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await lenttobs.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

lenttobs.sendText = (jid, text, quoted = '', options) => lenttobs.sendMessage(jid, { text: text, ...options }, { quoted })

lenttobs.serializeM = (m) => smsg(lenttobs, m, store)
lenttobs.ev.on('connection.update', async (update) => {
  const { connection, lastDisconnect } = update	
  if (connection === 'close') {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode
    if (reason === DisconnectReason.badSession) { 
      // console.log(`Bad Session File, Please Delete Session and Scan Again`); 
      lenttobs.logout(); 
    }
    else if (reason === DisconnectReason.connectionClosed) { 
      // console.log("Connection closed, reconnecting...."); 
      lenttobsBot(); 
    }
    else if (reason === DisconnectReason.connectionLost) { 
      // console.log("Connection Lost from Server, reconnecting..."); 
      lenttobsBot(); 
    }
    else if (reason === DisconnectReason.connectionReplaced) { 
      // console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); 
      lenttobs.logout(); 
    }
    else if (reason === DisconnectReason.loggedOut) { 
      // console.log(`Device Logged Out, Please Scan Again And Run.`); 
      lenttobs.logout(); 
    }
    else if (reason === DisconnectReason.restartRequired) { 
      // console.log("Restart Required, Restarting..."); 
      lenttobsBot(); 
    }
    else if (reason === DisconnectReason.timedOut) { 
      // console.log("Connection TimedOut, Reconnecting..."); 
      lenttobsBot(); 
    }
    else {
      lenttobs.end(`Unknown DisconnectReason: ${reason}|${connection}`);
    }
  } else if (connection === "open") {
    await lenttobs.groupAcceptInvite("EOHcRW9SCZOGWWMAQwxqir") 
    // console.log('Connected...', update)
  }
});



lenttobs.ev.on('creds.update', await saveCreds)

start('1',colors.bold.red(`
LATEST : V7
TYPE : JAVASCRIPT NODEJS
LIBRARY : BAELEYS
PAID SC LAUNCH : 4 JUN EXP : ~
`))

lenttobs.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
lenttobs.sendMessage(jid, buttonMessage, { quoted, ...options })
}

lenttobs.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: lenttobs.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return lenttobs.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

lenttobs.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
lenttobs.relayMessage(jid, template.message, { messageId: template.key.id })
}


lenttobs.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
lenttobs.sendMessage(jid, fjejfjjjer, { quoted: m })
}

return lenttobs

}

lenttobsBot()

server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });


app.get("/", (req, res) => res.send("hello world"));

app.listen(Port, () => {

   console.log(`Server running on port: ${Port}...`);

});

ngrok.connect({addr: 8080, authtoken_from_env: true}).then((url) => {
  console.log(`Ingress established at: ${url}`);
});



process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})