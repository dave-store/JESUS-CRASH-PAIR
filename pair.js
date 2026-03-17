const { makeid } = require('./gen-id');
const express = require('express');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const { default: makeWASocket, useMultiFileAuthState, delay, Browsers, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, DisconnectReason, WA_DEFAULT_EPHEMERAL, jidNormalizedUser, proto, getDevice, generateWAMessageFromContent, fetchLatestBaileysVersion, makeInMemoryStore, getContentType, generateForwardMessageContent, downloadContentFromMessage, jidDecode } = require('@whiskeysockets/baileys')

const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function CHRIS_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                generateHighQualityLinkPreview: true,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                syncFullHistory: false,
                browser: Browsers.macOS(randomItem)
            });
            if (!sock.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');
                const code = await sock.requestPairingCode(num);
                if (!res.headersSent) {
                    await res.send({ code });
                }
            }
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {

    const {
                    connection,
                    lastDisconnect
                } = s;
                
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {


                        
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "JESUS-CRASH-V2~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `*╭━━━❰ 💎 *𝐉𝐄𝐒𝐔𝐒-𝐂𝐑𝐀𝐒𝐇-𝐕𝟐* 💎 ❱━━━╮
┃
┃ 🎉 *Welcome, ${userName}!* 
┃ Your diamond session is now *ACTIVE*
┃
┣━━━❰ 🔐 *𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐃𝐄𝐓𝐀𝐈𝐋𝐒* ❱━━━
┃
┃ 📅 *Date:* ${currentDate}
┃ ⏰ *Time:* ${currentTime}
┃ 🆔 *Status:* ✅ CONNECTED
┃ 🔒 *Security:* MILITARY-GRADE
┃
┣━━━❰ ⚠️ *𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 𝐖𝐀𝐑𝐍𝐈𝐍𝐆* ❱━━━
┃
┃ 🔴 *DO NOT* share your Session ID
┃ 🔴 *DO NOT* send it to anyone
┃ 🔴 *DO NOT* post it publicly
┃ 🟢 Store it in a *SAFE LOCATION*
┃
┣━━━❰ 🔗 *𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐋𝐈𝐍𝐊𝐒* ❱━━━
┃
┃ 📢 *WhatsApp Channel:*
┃ https://whatsapp.com/channel/0029Vb7J1Po4tRrqa88ZfQ3X
┃
┃ 🐙 *GitHub Repository:*
┃ https://github.com/dave-store/JESUS-CRASH-V2
┃
┃ 💬 *Support Group:*
┃ https://chat.whatsapp.com/...
┃
┣━━━❰ ⚡ *𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒* ❱━━━
┃
┃ 🤖 Advanced AI Commands
┃ 🛡️ Anti-Spam & Security
┃ 📥 Media Downloader
┃ 🎵 Audio/Video Tools
┃ 🔄 Auto-Update System
┃ 💎 Premium Support
┃
╰━━━❰ 👑 *𝐃𝐀𝐖𝐄𝐍𝐒 𝐁𝐎𝐘 𝐓𝐄𝐂𝐇* ❱━━━╯

> *"Stay cool and hack smart"* ✌🏻🔥
> *© 2024 All Rights Reserved*`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ᴍᴀʟᴠɪɴ-xᴅ",
thumbnailUrl: "https://files.catbox.moe/g72e6z.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb5qc6N2Jl8E3EcVBv0t",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `✨ *Welcome to JESUS-CRASH-V2!* 👋🏻

Your session has been successfully created — you're ready to roll! 🚀

🔐 *Session ID:* Sent above  
⚠️ *Security Notice:* Keep your Session ID private. Do NOT share it with anyone.

━━━━━━━━━━━━━━━

📢 *Stay Updated:*  
Join our official WhatsApp Channel for the latest updates:  
https://whatsapp.com/channel/0029Vb5qc6N2Jl8E3EcVBv0t

💻 *Source Code:*  
Explore, fork, and contribute on GitHub:  
https://github.com/Xchristech/LITECHRIS-V2

━━━━━━━━━━━━━━━

> © *Powered by DAWENS BOY*  
Stay sharp. Stay smart. ✌🏻`;
                            await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "ᴍᴀʟᴠɪɴ-xᴅ",
thumbnailUrl: "https://files.catbox.moe/g72e6z.jpg",
sourceUrl: "https://whatsapp.com/channel/0029Vb5qc6N2Jl8E3EcVBv0t",
mediaType: 2,
renderLargerThumbnail: true,
showAdAttribution: true
}  
}
},
{quoted:ddd })
                    }
                    await delay(10);
                    await sock.ws.close();
                    await removeFile('./temp/' + id);
                    console.log(`👤 ${sock.user.id} 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 ✅ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...`);
                    await delay(10);
                    process.exit();
                } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10);
                    CHRISM_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/' + id);
            if (!res.headersSent) {
                await res.send({ code: "❗ Service Unavailable" });
            }
        }
    }
   return await CHRIS_XD_PAIR_CODE();
});/*
setInterval(() => {
    console.log("☘️ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...");
    process.exit();
}, 180000); //30min*/
module.exports = router;
