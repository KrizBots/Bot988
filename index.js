//╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
//│ *「 INFO BOT 」*
//│➛*Nombre Bot* : Bot
//│➛*Plataforma* : Heroku
//│➛*Creador* : Kriz Edits
//│➛*Youtube* : Kriz Edits
//owner : Kriz Edits

//NombreBot : Bot
////NO CREDITOS////////
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Kriz Edits\n' //ganti nama lu! 
            + 'ORG: Creador del bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=994408103470:+994 408103470\n'  //ganti nomor lu! 
            + 'END:VCARD'

const vcard2 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN: Gabriel\n' //ganti nama lu! 
            + 'ORG: Creador del bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=554991579631:+55 4991579631\n'  //ganti nomor lu! 
            + 'END:VCARD'
            
const vcard3 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Edmy\n' //ganti nama lu! 
            + 'ORG: Creador del bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=51940013198:+51 940013198\n'  //ganti nomor lu! 
            + 'END:VCARD'  
            
const vcard4 = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Miguel Mods\n' //ganti nama lu! 
            + 'ORG: Creador del bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=51901245003:+51 901245003\n'  //ganti nomor lu! 
            + 'END:VCARD'                      
prefix = '.'
blocked = []
limitawal = 10000000
memberlimit = 1
vr = '*私は静かな人です*'
ve = '*HOLA  para los que no saben es el PROPIETARIO ORIGINAL KRIZ EDITS*'
vo = '*ESTADO AUTOMÁTICO ACTIVO*'
vu = '*CARGA ETIQUETA*'
cr = '*Kriz Edits*'
va = '*YAHAHAHAH VAYA A LA ETIQUETA SEVERA*'
reply ='*EDMY STORE*'
FRISLAH ='*tiempos locos bah*'
/******** OWNER NUMBER**********/
const ownerNumber = ["994408103470@s.whatsapp.net","51940013198@s.whatsapp.net","51901245003@s.whatsapp.net","994408103470@s.whatsapp.net"]   //ganti nomor lu! 
const pacarNumber = ["994405470940@s.whatsapp.net"]  //ganti nomor lu!  
/************************************/


/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const afk = JSON.parse(fs.readFileSync('./lib/afk.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/


/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const Exif = require('./lib/exif')
const exif = new Exif()
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
const client = new WAConnection()
client.version = [2, 2143, 3]
client.logger.level = 'warn'
console.log(banner.string)
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('SUPORT','red'), color('(+)','white'), color(' ESCANEA EL QR','aqua'), color('Kriz Edits en Youtube','yellow'))
})

	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', color('Conectando...','aqua'))
	})
	client.on('open', () => {
		success('2', color('Kriz Bot Conectado','red'))
	})
	client.connect({timeoutMs: 30*1000})


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
teks = `Hola @${num.split('@')[0]}\n◪ Bienvenid@ a :\n├─ ${mdata.subject}\n│\n├─ Intro\n├─ ❏ Nombre: \n└─ ❏ Numero: ${num.replace('@s.whatsapp.net', '')}\nlee las reglas~~\n${mdata.desc}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Beban Gc Mengurang 1\nSelamat Tinggal @${num.split('@')[0]} Jan Lupa Kalo Balik Lagi Bawa Martabak`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
            const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
            const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPacar = pacarNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
           const isUrl = (url) => {
           return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
        
        //role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
			//funtion nobadword
			if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => client.groupRemove(from, sender))
                        .then(() => {
                            client.sendMessage(from, `*「 ANTI BADWORD 」*\nDEVIL-Bot akan kick kamu karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => client.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
			//function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

    const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
	}
})
		if (position !== null) {
		return premium[position].expired 
	}
} 

const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
	}
})
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		prem.splice(position, 1)
		fs.writeFileSync('./database/premium.json', JSON.stringify(prem)) 
		}
	}, 1000)
} 
		
		const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
	})
		return array 
	}
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('eres admin :)')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Detectado ${sender.split("@")[0]} pa fuera`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
		
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
             
              switch(command) {

 // FITUR HEWAN LUCU IMUT GEMES
 /// Fitur Tampa Apikey Gratis  Yo Bro
case 'fox':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!! ', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo xd`, quoted: mek})
                   break
                   case 'gato':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!! ', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo xd`, quoted: mek})
                   break
                   case 'panda':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo`, quoted: mek})
                   break
                   case 'panda1':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo`, quoted: mek})
                   break
                   case 'bird':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo xd`, quoted: mek})
                   break
                   case 'koala':  
                   if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   costum('un momento!!!', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   client.sendMessage(from, anu1, image, {caption: `listo`, quoted: mek})
                   break
                   
                   case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
               costum('Un momento!!! ', text, tescuk, cr)
               ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=ohayou`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
// Fitur By Riu Cuman Comot Gw
case 'latinkejawa': 
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkejawa?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
case 'jawakelatin': 
				if (args.length < 1) return reply(`Contoh: ꦲꦭꦺꦴ`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/jawakelatin?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
		        case 'latinkesunda': 
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkesunda?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
			    case 'sundakelatin': 
				if (args.length < 1) return reply(`Contoh: Awas ada sunda`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/sundakelatin?text=${gatauda}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.message)
					break
// MENU SOUND LAGU SEDIH DAN DJ
case 'home':
const home = fs.readFileSync('./mp3/home.mp3')
client .sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'nengdesah':
const neng = fs.readFileSync('./mp3/desahan4.mp3')
client .sendMessage(from, neng, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'susu':
const su = fs.readFileSync('./mp3/susu.mp3')
client .sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./mp3/syg.mp3')
client .sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./mp3/gettingold.mp3')
client.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./mp3/sad.mp3')
client .sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./mp3/sad2.mp3')
client .sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('./mp3/sad3.mp3')
client .sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./mp3/sad4.mp3')
client .sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./mp3/aeshtetic.mp3')
client .sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./mp3/aeshtetic2.mp3')
client .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./mp3/aeshtetic3.mp3')
client .sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./mp3/aeshtetic4.mp3')
client .sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./mp3/allnight.mp3')
client .sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'lucas':
const lucas = fs.readFileSync('./mp3/lucas.mp3')
client .sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sowell':
const well = fs.readFileSync('./mp3/sowell.mp3')
client .sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./mp3/wanna.mp3')
client .sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./mp3/up.mp3')
client .sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./mp3/yourskin.mp3')
client .sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./mp3/cutmeoff.mp3')
client .sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./mp3/beautiful.mp3')
client .sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./mp3/loosinggame.mp3')
client .sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./mp3/loosinginterest.mp3')
client .sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./mp3/playdate.mp3')
client .sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
client.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
client.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./mp3/ayatkursi2.mp3')
client.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./mp3/tilawah.mp3')
client.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawatnabi':
const nabi = fs.readFileSync('./mp3/sholawatnabi.mp3')
client.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./mp3/ngaji.mp3')
client.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./mp3/ngaji2.mp3')
client.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./mp3/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./mp3/pale.mp3')
client.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./mp3/hallo.mp3')
client.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
client.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
client.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./mp3/sound.mp3')
client.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./mp3/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./mp3/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./mp3/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./mp3/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./mp3/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./mp3/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./mp3/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./mp3/sound8.mp3');
client.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./mp3/sound9.mp3');
client.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./mp3/sound10.mp3');
client.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./mp3/sound11.mp3');
client.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./mp3/sound12.mp3');
client.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./mp3/sound13.mp3');
client.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./mp3/sound14.mp3');
client.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./mp3/sound15.mp3');
client.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./mp3/sound16.mp3');
client.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./mp3/sound17.mp3');
client.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./mp3/sound18.mp3');
client.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./mp3/sound19.mp3');
client.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./mp3/sound20.mp3');
client.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./mp3/sound21.mp3');
client.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./mp3/sound22.mp3');
client.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./mp3/sound23.mp3');
client.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./mp3/sound24.mp3');
client.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./mp3/sound25.mp3');
client.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./mp3/sound26.mp3');
client.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./mp3/sound27.mp3');
client.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./mp3/sound28.mp3');
client.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./mp3/sound29.mp3');
client.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./mp3/sound30.mp3');
client.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./mp3/sound31.mp3');
client.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./mp3/sound32.mp3');
client.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./mp3/sound33.mp3');
client.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./mp3/sound34.mp3');
client.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
client.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./mp3/sound35.mp3');
client.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./mp3/sound36.mp3');
client.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./mp3/sound37.mp3');
client.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./mp3/sound38.mp3');
client.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./mp3/sound39.mp3');
client.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./mp3/sound40.mp3');
client.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./mp3/sound41.mp3');
client.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./mp3/sound42.mp3');
client.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./mp3/sound43.mp3');
client.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./mp3/sound44.mp3');
client.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./mp3/sound45.mp3');
client.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./mp3/sound46.mp3');
client.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./mp3/sound47.mp3');
client.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./mp3/sound48.mp3');
client.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./mp3/sound49.mp3');
client.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./mp3/sound50.mp3');
client.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./mp3/Kecewa.mp3');
client.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./mp3/Jarak.mp3');
client.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./mp3/Bisa.mp3');
client.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./mp3/Disini.mp3');
client.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./mp3/Batu.mp3');
client.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./mp3/desah.mp3');
client.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./mp3/Adanya.mp3');
client.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./mp3/Pelangi.mp3');
client.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./mp3/sound58.mp3');
client.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./mp3/sound59.mp3');
client.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./mp3/sound60.mp3');
client.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./mp3/sound61.mp3');
client.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./mp3/sound62.mp3');
client.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./mp3/sound63.mp3');
client.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./mp3/sound64.mp3');
client.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./mp3/chruch.mp3');
client.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./mp3/gemes.mp3');
client.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./mp3/hujan.mp3');
client.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./mp3/Masih.mp3');
client.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sasageyo':
lima = fs.readFileSync('./mp3/Sasageyo.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'ganteng':
lapan = fs.readFileSync('./mp3/ganteng.mp3');
client.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'gatal':
bilan = fs.readFileSync('./mp3/gatal.mp3');
client.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'cemen':
puluh = fs.readFileSync('./mp3/alay.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break		     
// MENU REPLAY AUDIO ATAU VN ORANG
// UPDATE BY DEVIK BOTZ
//GEMES MEGUBAH SUARA JADI IMUT
case 'rapido':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						riu = fs.readFileSync(ran)
					client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
//Tempo Mengubah Suara Lebih Dering
case 'tempo':           
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999})
						fs.unlinkSync(ran)
					})
				break
//nightcore Mengubah Suara Jadi Nada Rendah
case 'nightcore':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
//fast Mengubah Suara Bernada Sedeng
case 'masrapido':
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			     media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
//tupai Mengubah Suara Jadi  Lucu Lucu Gimana 
case 'lento':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//Gemuk Bersuara Besar Dan Dengung
case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//bass Bernada Besar Dan Getar
case 'fuerte':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
//ghost  Bernada Serem Dan Menakutkan
case 'ghost':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
                    fs.unlinkSync(ran)
				    })
		            break
// JANGAN LUPA LIKE AND COMENT
case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('numero invalido'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            client.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
//Case Kontag Bisa  Semua Orang cuman Di Grup
case 'kontag':
           var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACTO TAG*`
					}
					var group = await client.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Bot;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${client.user.jid.split('@')[0]}:${client.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				client.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
// APA NAMA NIJA MU KAWAN
case 'namaninja': 
				if (args.length < 1) return reply(`ejemplo: Akira`)
                    gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=ohayou&nama=${gatauda}`)
					reply(anu.result)
					break
// TEBAKAN MENU KEREN DEH
case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=ohayou`, {method: 'get'})
					tebakbender = `*bendera apa ini?*n${anu.result.flag}`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakgambar':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=ohayou`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					client.sendMessage(from, '*âž¸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagiâ€¦_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_â€¦', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_â€¦', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
case 'family100':
				data = fs.readFileSync('./src/family100.js');
                fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
case 'caklontong':
				data = fs.readFileSync('./src/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					client.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 30000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					client.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				   break
// Menu APIKEY XTeam Ya Bro
//INSYAALLAH  KALO GW ADA APIKEY GW KASIH
case 'suit':
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply(`contoh ${prefix + command} gunting`)
				data = await fetchJson(`https://api.xteam.xyz/game/suit?q=${body.slice(6)}&APIKEY=7415bc4287ad5ca8`)
					if (data.result) return reply(data.result)
					hasil = `Punyamu : *${data.jawabanmu}*\nDEVIL BOTZ : *${data.jawabanbot}*\nHasil : *${data.hasil}*\nPoin : ${data.poin}`
					reply(hasil)
					await limitAdd(sender)
					break
case 'video1':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=c81b3345e477a0c7`)
                    client.sendMessage(from, anu, video, {caption: `listl`, quoted: mek}) 
                    break
                    case 'video2':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `listo`, quoted: mek}) 
                    break
                    case 'video3':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `listo`, quoted: mek}) 
                    break
                    case 'video4':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `listo`, quoted: mek}) 
                    break
                    case 'video5':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `listo`, quoted: mek}) 
                    break
                    case 'video6':  
                    if (isBanned) return reply(ind.baned())
                    if (args.length < 1) return reply(`[❗] Ejemplo : bot whatsapp*`)
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=7415bc4287ad5ca8`)
                    client.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: mek}) 
                    break 
case 'tebakangka':  
                    if (isBanned) return reply(ind.baned())
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=7415bc4287ad5ca8`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
// MENU APIKEY VHTEAR YA BRO
//INSYAALLAH  KALO GW ADA APIKEY GW KASIH
case 'hartatata3':
				if (isBanned) return reply('estas baneado!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				costum('um momento!!! ', text, tescuk, cr)
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=beli apikey biar work`)
				client.sendMessage(from, bh, image, {caption: 'listo', quoted: mek})
				await limitAdd(sender)
				break
case 'text2gif':
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				costum('un momento!!! ', text, tescuk, cr)
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=beli apikey biar work`)
				client.sendMessage(from, bh, image, {caption: 'listo', quoted: mek})
				await limitAdd(sender)
				break
case 'logoepep': 
				gatauda = body.slice(9)
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Maxim&text=${gatauda}&apikey=RanddyGanz`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'logoepep2': 
				gatauda = body.slice(10)
				if (args.length < 1) return reply('y el exto?')
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alok&text=${gatauda}&apikey=beli apikey Biar Work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'logoepep3': 
				gatauda = body.slice(10)
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Alvaro&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'logoepep4': 
				gatauda = body.slice(10)
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Caroline&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'logoepep5': 
				gatauda = body.slice(10)
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=Kla&text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
			   var gh = body.slice(10)
			  var gbl7 = gh.split("/")[0];
			 var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('y el texto?')
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=beli apikey biar work`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'listo'})
				await limitAdd(sender)
				break 

/// MENU BERMAIN KALIAN

		case 'fea':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('baneado!')
					fea = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Es fea : *'+rate+'*\n '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'feo':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('estas baneado!')
					feo = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Es feo *'+sange+'*\n : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'gay':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('estas baneado!')
					gay = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Es gay *'+gayy+'*\n : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'lesbi':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('baneado!')
					lesbi = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Es lesbi *'+lesbii+'*\n :'+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'puto':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('baneado!')
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Eres puto : *'+ganteng+'*\n '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break

case 'puta':
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('baneado!')
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Es puta : *'+cantik+'*\n '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
	

case 'deletepc':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  costum('SEDANG PROSES Subscribe DEVIL BOTZ', text, tescuk, cr)
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

/// FITUR KHUSUS  GRUPN DOANG 
                    case 'getsticker':
				case 'gets':  // Fix Bug By WahyuYoutube
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					case 'stickerlist':
				case 'liststicker':  // Fix Bug By WahyuYoutube
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					case 'addstickeer':  // Fix Bug By WahyuYoutube*
					svst = body.slice(12)
					if (!svst) return reply('Nombre del sticker?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/Sticker/${svst}.webp`, delb)
					fs.writeFileSync('./strg/stik.json', JSON.stringify(setiker))
					client.sendMessage(from, `agregado para ver los stickers que agregaste usa ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addstik':
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./strg/stick/${svst}.webp`, delb)
				fs.writeFileSync('./strg/stik.json', JSON.stringify(setiker))
				client.sendMessage(from, `agregado para ver los stickers que agregaste usa  ${prefix}stickerlist`, MessageType.text, { quoted: mek })
				break
                case 'addvn':  // Fix Bug By WahyuYoutube
                    svst = body.slice(7)
					if (!svst) return reply('nombre del audio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `agregado ala lista de audios para ver la lista ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
					case 'getvn':  // Fix Bug WahyuYoutube*
					 if (args.length < 1) return reply('Ingrese el nombre registrado en la lista vn')
                    namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true})
					break
					case 'listvn':
				case 'vnlist':  // Fix Bug By WahyuYoutube
					teks = '*Lista Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':  // Fix Bug By WahyuYoutube
					svst = body.slice(10)
					if (!svst) return reply('Nombre de la imagen?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `agregado ala lista de imágenes para ver la escribe ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':  // Fix Bug By WahyuYoutube
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':  // Fix Bug By WahyuYoutube
					teks = '*Lista Imagen :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':  // Fix Bug By WahyuYoutube
					svst = body.slice(10)
					if (!svst) return reply('Nombre del video?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `agregado ala lista de videos  ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':  // Fix Bug By WahyuYoutube
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':  // Fix Bug By WahyuYoutube
					teks = '*Lista Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
			
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Administrador como administrador con exito wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Administrador de bot agregado con éxito wa.me/${adm} `)
				break
    
                case 'bann':
				if (!isAdmin) return reply('*bot admin*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Número prohibido con éxito : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isAdmin) return reply('*Solo bot administrador*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Numero wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`baneado por mi creador  : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Numero wa.me/${bnnd} desbaneado por mi creador ^^ !`)
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				// Fix Bug By Kriz Edits
				teks = 'lista de numeros baneados :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
case 'setreplyy':
				if (!isAdmin) return reply('*Solo bot administrador*')
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 

					case 'del':
		case 'd':
		case 'delete':
					// Fix Case By WAHYU/ADI⛔
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					
				  case 'hsdxd':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 client.sendMessage(from, highschooldxd, image, {quoted: mek, caption: '*DEVIL BOTZ*'})
				break
				  case 'lovelive':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 client.sendMessage(from, lovelive, image, {quoted: mek, caption: '*DEVIL BOTZ*'})
				break
// Note jangan Salah Gunain
case 'buggc':
if (!isOwner) return reply(ind.ownerb())
if (!isOwner) return reply(ind.ownerb())
await client.toggleDisappearingMessages(from)
reply("okey")
break
// Fitur Join Grup Whatsapp
case 'join':
setTimeout( () => {
client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
suksez = `Únete con éxito al grupo!`
client.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('Muy buen epersonal')
}, 0) // 1000 = 1s,
break
//Sertifikat  Kemenangan Dan  Kegagalan
case 'fbdl':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} link`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
case 'igvideo': 
				if (args.length < 1) return reply('link?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
				case 'igpost': 
				if (args.length < 1) return reply('link?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, )
				    break
				case 'igtv': 
				if (args.length < 1) return reply('link?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=ohayou&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, )
				    break
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil, es muy extraño.😗')
					break 
			

case 'blocklist': 
					teks = '*lista de bloqueados* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'tagme':
const tagme = {
  text: `@${sender.split("@")[0]} .`,
  contextInfo: {
mentionedJid: [sender]
  }
}
client.sendMessage(from, tagme, text)
break
case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
case 'hidetag':
				if (isBanned) return reply('estas baneado!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
costum('Xd', text, tescuk, vu)
var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *TU PERFIL* 」\n│• *Nombre:* ${pushname}\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
//MENU ISLAMI DAN ISLAM
case 'alquran':
				if (isBanned) return reply('¡Lo siento, te han baneado!')
				costum('un momento!!!', text, tescuk, cr)
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=ohayou`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
case 'groupinfo':
				if (isBanned) return reply(ind.baned())
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(ind.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*Nombre* : *${groupName}*\n*Miembros* : *${groupMembers.length}*\n*Admins* : *${groupAdmins.length}*\n*Nsfw : ${nsfw ? 'Activo' : 'desactivado'}*\n*Welcome : ${welkom ? 'Activo' : 'desactivado'}*\n*Descripción* : \n*${groupDesc}*`})
                break
case 'tomp3':
		if (isBanned) return reply(ind.baned())
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ responde al video ❌')
					lcostum('un momento!!! ', text, tescuk, cr)
					encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    medial = await client.downloadAndSaveMediaMessage(encmedial)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir el video a mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
/// CASE AFK LAGI MAINTANCE YA NEXT UPDATE
case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./lib/afk.json", JSON.stringify(afk))
                    ini_txt = "MODO AFK "
                    if (alasan != "") {
                        ini_txt += "Razon :" + alasan
                    }
                    reply(ini_txt)
                    break
case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('exito')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *HA VUELTO DE AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        client.sendMessage(from, kl7, text, {quoted: mek})
                                        break
case 'help':
case 'menu':
                if (isBanned) return reply(ind.baned())
               const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const uangku = checkATMuser(sender)
             DEV = fs.readFileSync(`./src/HelpJs.jpg`)
costum('*enviando menu...* ', text, tescuk, cr)
wew =`
╔═〘𝙑𝙄𝘼 𝙏𝙀𝙍𝙈𝙐𝙓〙
╠𖣔 𝙉𝙤𝙢𝙗𝙧𝙚: 𝙆𝙧𝙞𝙯 𝙀𝙙𝙞𝙩𝙨
╠𖣔 𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${pushname}
╠𖣔 𝙉𝙪𝙢𝙚𝙧𝙤: wa.me/${sender.split("@")[0]}
╠𖣔 𝙐𝙨𝙚𝙧 : ${_registered.length}
╠𖣔 𝙋𝙧𝙚𝙛𝙞𝙭:「  ${prefix}  」
╠𖣔 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤𝙨:${blocked.length}
└─❋۪۪

𝙐𝙨𝙪𝙖𝙧𝙞𝙤 : ${pushname}

𝙋𝙧𝙚𝙛𝙞𝙭 : #

𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝘽𝙤𝙩 : 👇

𖣔 ${prefix}creadores
╠══𖣔〘𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍〙𖣔══
╠➥${prefix}sticker
╠➥${prefix}stikergif
╠➥${prefix}takestick
╠➥${prefix}toimg
╠➥${prefix}attp Texto
╠➥${prefix}attp2 Texto
╠➥${prefix}attp3 Texto
╠➥${prefix}attp4 Texto
╠➥${prefix}attp Texto
╠➥${prefix}temoji 😊
╠➥${prefix}amongus Texto
╠══𖣔〘 𝙈𝙀𝙉𝙐 𝘼𝘿𝙈𝙄𝙉 〙𖣔══
╠➥${prefix}admin
╠➥${prefix}unadmin
╠➥${prefix}bann
╠➥${prefix}unbann
╠➥${prefix}banlist
╠➥${prefix}tomp3
╠➥${prefix}afk
╠➥${prefix}unafk
╠➥${prefix}tagme
╠══𖣔〘 𝙈𝙀𝙉𝙐 𝘾𝙍𝙀𝘼𝘿𝙊𝙍〙𖣔══
╠➥${prefix}hidetag5
╠➥${prefix}expresar  Tag
╠➥${prefix}setprefix
╠➥${prefix}kick
╠➥${prefix}profile
╠══𖣔〘 𝘼𝘿𝙈𝙄𝙉 〙𖣔══
╠➥${prefix}listonline
╠➥${prefix}linkgc
╠➥${prefix}groupinfo
╠➥${prefix}setppbot
╠➥${prefix}welcome 1/0
╠➥${prefix}antilink 1/0
╠➥${prefix}hidetag
╠══𖣔〘 𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 〙𖣔══
╠➥${prefix}play
╠➥${prefix}ytmp3
╠➥${prefix}ytmp4
╠➥${prefix}ytmp32
╠➥${prefix}ytmp2
╠➥${prefix}ytaudio
╠➥${prefix}igmp3
╠➥${prefix}ytsearch
╠➥${prefix}fbdl
╠➥${prefix}igpost
╠➥${prefix}igpost
╠══𖣔〘 𝙊𝙏𝙍𝙊𝙎 〙𖣔══
╠➥${prefix}fea
╠➥${prefix}feo
╠➥${prefix}puta
╠➥${prefix}gay
╠➥${prefix}lesbi
╠➥${prefix}puto
║
╠══𖣔〘 𝙈𝙀𝙉𝙐 𝙇𝙊𝙂𝙊𝙎 〙𖣔══
║
╠➥${prefix}weglass Texto
╠➥${prefix}multikolor3d Texto
╠➥${prefix}waterkolor Texto
╠➥${prefix}luxurygold Texto
╠➥${prefix}galxywallpaper Texto
╠➥${prefix}lighttext Texto
╠➥${prefix}beautifulflower Texto
╠➥${prefix}puppycute Texto
╠➥${prefix}royaltext Texto
╠➥${prefix}heartshaped Texto
╠➥${prefix}birthdaycake Texto
╠➥${prefix}galaxystyle Texto
╠➥${prefix}hologram3d TEKS
╠➥${prefix}greenneon Texto
╠➥${prefix}glossychrome Texto
╠➥${prefix}greenbush Texto
╠➥${prefix}metallogo Texto
╠➥${prefix}noeltext Texto
╠➥${prefix}glittergold Texto
╠➥${prefix}textcake Texto
╠➥${prefix}starsnight Texto
╠➥${prefix}wooden3d Texto
╠➥${prefix}textbyname Texto
╠➥${prefix}writegalacy Texto
╠➥${prefix}galaxybat Texto
╠➥${prefix}snow3d Texto
╠➥${prefix}birthdayday Texto
╠➥${prefix}goldplaybutton Texto
╠➥${prefix}silverplaybutton Texto
╠➥${prefix}freefire Texto
╠➥${prefix}crosslogo Texto
╠➥${prefix}flowertext Texto
╠➥${prefix}silktext Texto
╠➥${prefix}flametext Texto
╠➥${prefix}glowtext Texto
╠➥${prefix}skytext Texto
╠➥${prefix}cslogo Texto
╠➥${prefix}lithgtext Texto
╠➥${prefix}crismes Texto
╠➥${prefix}pornhub Texto
╠➥${prefix}glitch Texto
╠➥${prefix}avenger Texto
╠➥${prefix}space Texto
╠➥${prefix}ninjalogo Texto
╠➥${prefix}marvelstudio Texto
╠➥${prefix}lionlogo Texto
╠➥${prefix}wolflogo Texto
╠➥${prefix}steel3d Texto
╠➥${prefix}wallgravity Texto
╠➥${prefix}tiktok Texto
╠➥${prefix}arcade8bit Texto
╠➥${prefix}battlefield4 Texto
╠➥${prefix}pubg Texto
╠➥${prefix}pinterest Texto
╠➥${prefix}ktp Texto
╠➥${prefix}tfire Texto
╠➥${prefix}ytgol Texto
╠➥${prefix}ytsilver Texto
╠➥${prefix}t3d Texto
╠➥${prefix}logoa Texto
╠➥${prefix}abrazar
╠➥${prefix}patear
╠➥${prefix}besar
╠➥${prefix}palmaditas
╠➥${prefix}cuaderno Texto
╠➥${prefix}guralogo Texto
╠➥${prefix}butterflytext Texto
╠➥${prefix}sandwrite Texto
╠➥${prefix}silverplaybutton Texto
╠➥${prefix}text3d2 Texto
╠➥${prefix}logofree Texto
╠➥${prefix}dropwater Texto
╠➥${prefix}lolilogo Texto
╠➥${prefix}text3d Texto
╠➥${prefix}lihttext Texto
╠➥${prefix}goldplaybutton Texto
╠➥${prefix}woodtext Texto
╠➥${prefix}leavest Texto
╠➥${prefix}kanekilogo Texto
╠➥${prefix}lavatext Texto
╠➥${prefix}sadlogo Texto
╠➥${prefix}wolflogo Texto
╠➥${prefix}waifulogo Texto
╠➥${prefix}rankgay 
║
╠══𖣔〘 𝗡𝗦𝗙𝗪 〙𖣔══
║
╠➥${prefix}chiisaihentai
╠➥${prefix}trap
╠➥${prefix}blowjob
╠➥${prefix}yaoi
╠➥${prefix}ecchi
╠➥${prefix}hentai
╠➥${prefix}ahegao
╠➥${prefix}hololewd
╠➥${prefix}sideoppai
╠➥${prefix}animefeets
╠➥${prefix}animebooty
╠➥${prefix}animethighss
╠➥${prefix}hentaiparadise
╠➥${prefix}animearmpits
╠➥${prefix}hentaifemdom
╠➥${prefix}lewdanimegirls
╠➥${prefix}biganimetiddies
╠➥${prefix}hentai4everyone
╠➥${prefix}animebellybutton
╠➥${prefix}ero
╠➥${prefix}cum
╠➥${prefix}feet
╠➥${prefix}yuri
╠➥${prefix}trap
╠➥${prefix}lewd
╠➥${prefix}feed
╠➥${prefix}eron
╠➥${prefix}solo
╠➥${prefix}gasm
╠➥${prefix}poke
╠➥${prefix}anal
╠➥${prefix}holo
╠➥${prefix}tits
╠➥${prefix}kuni
╠➥${prefix}kiss
╠➥${prefix}erok
╠➥${prefix}smug
╠➥${prefix}baka
╠➥${prefix}solog
╠➥${prefix}feetg
╠➥${prefix}lewdk
╠➥${prefix}waifu
╠➥${prefix}pussy
╠➥${prefix}femdom
╠➥${prefix}cuddle
╠➥${prefix}hentai
╠➥${prefix}eroyuri
╠➥${prefix}cum_jpg
╠➥${prefix}blowjob
╠➥${prefix}bj
╠➥${prefix}erofeet
╠➥${prefix}holoero
╠➥${prefix}classic
╠➥${prefix}erokemo
╠➥${prefix}fox_girl
╠➥${prefix}futanari
╠➥${prefix}lewdkemo
╠➥${prefix}wallpaper
╠➥${prefix}pussy_jpg
╠➥${prefix}nsfw_avatar
╠➥${prefix}kemonomimi
╠➥${prefix}ngif
╠➥${prefix}nsfw_neko_gif
╠➥${prefix}random_hentai_gif
╠➥${prefix}stickcum
╠➥${prefix}stickfeetg
╠➥${prefix}stickpussy
╠➥${prefix}stickneko
╠➥${prefix}loli 
╠➥${prefix}pack
╠➥${prefix}awoo
╠➥${prefix}trapnime
╠➥${prefix}avatar
╠══𖣔〘  𝗡𝗨𝗘𝗩𝗢𝗦  〙𖣔══
╠➥${prefix}fox
╠➥${prefix}gato
╠➥${prefix}panda
╠➥${prefix}panda1
╠➥${prefix}bird
╠➥${prefix}koala
╠➥${prefix}piropos
╠➥${prefix}frases
╠══𖣔〘 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗔𝗨𝗗𝗜𝗢 〙𖣔══
╠➥${prefix}lento  audio
╠➥${prefix}fuerte audio
╠➥${prefix}slow  audio
╠➥${prefix}rapido  audio
╠➥${prefix}masrapido audio
╠➥${prefix}nightcore  audio
╠➥${prefix}tempo raudio
╠➥${prefix}ghost audio
╠➥${prefix}translate
╠══𖣔〘 𝗟𝗢𝗚𝗢𝗦 〙𖣔══
╠➥${prefix}hartatata3 texto
╠➥${prefix}text2gif texto
╠➥${prefix}logoepep texto
╠➥${prefix}logoepep1 texto
╠➥${prefix}logoepep2 texto
╠➥${prefix}logoepep3 texto
╠➥${prefix}logoepep5 texto
╠➥${prefix}gemelogo texto
╠══𖣔〘 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗚𝗨𝗔𝗥𝗗𝗔𝗗𝗢 〙𖣔══
╠➥${prefix}addsticker
╠➥${prefix}getsticker
╠➥${prefix}stickerlist
╠➥${prefix}addvideo
╠➥${prefix}getvideo
╠➥${prefix}videolist
╠➥${prefix}getimage
╠➥${prefix}addImage
╠➥${prefix}imagelist
╠➥${prefix}addaudio
╠➥${prefix}getaudio
╠➥${prefix}audiolist

 ┉┉┉ 𝘾𝙧𝙚𝙙𝙞𝙩𝙤𝙨 :
┇❄︎ 𝘒𝘳𝘪𝘻 𝘌𝘥𝘪𝘵𝘴
┇❄︎ 𝘌𝘥𝘮𝘺 𝘚𝘹
┇❄︎ 𝘎𝘢𝘣𝘳𝘪𝘦𝘭 𝘉𝘰𝘵𝘴
┇❄︎ 𝘔𝘪𝘨𝘶𝘦𝘭 𝘔𝘰𝘥𝘴
┇
┇𝘼𝙪𝙙𝙞𝙤𝙨 𝘽𝙤𝙩 :
┇
┇𖣔 𝘀𝗵𝗶𝘁𝗽𝗼𝘀𝘁
┇𖣔 𝗡𝗼 𝘁𝗲𝗻𝗴𝗼 𝗮𝗺𝗶𝗴𝗼𝘀 :(
┇𖣔 𝗚𝗮𝘆
┇𖣔 𝗧𝗲 𝗮𝗺𝗼 𝗯𝗼𝘁
┇𖣔 𝗦𝗲𝘅𝗼
┇𖣔 𝗘𝘀 𝗩𝗶𝗲𝗿𝗻𝗲𝘀
┇𖣔 𝗕𝗼𝘁 𝗱𝗲 𝗺𝗶𝗲𝗿𝗱𝗮
 ┉┉┉┉┉┉┉❋۪`
client.sendMessage(from, DEV, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Version:*\n*Termux*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./src/Thumb.jpg')} } }, caption: wew, pushname, reply, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time })
const pendek = fs.readFileSync('./mp3/Pendek.mp3');
client.sendMessage(from, pendek, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

//DAFTAR DULU BAGI PERNGUNA BOT BARU
case 'sandwrite':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/sandw?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'silverplaybutton':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                  buffer = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'text3d2':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3d?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
   case 'logofree':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/epep?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'dropwater':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
 case 'lolilogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'text3d':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'lihttext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'goldplaybutton':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'woodtext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/wood?text=${txt}&apikey=hH2IYthq`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'leavest':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/leavest?apikey=ApiBotIndo&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'kanekilogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'lavatext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/lava?text=${txt}&apikey=wf2tghNhfU`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'sadlogo':
					var gh = body.slice(9)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${gli}&text2=${tch}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case 'wolflogo':
					var gh = body.slice(10)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=ApiBotIndo&text1=${gli}&text2=${tch}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case 'waifulogo':
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Ejemplo: ${prefix + command} Kriz`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${gli}&text2=${tch}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
case  'rankgay':
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./stik/gay.jpg`)
          jds = []
          const Z11 = groupMembers
          const U11 = groupMembers
          const T11 = groupMembers
          const F11 = Z11[Math.floor(Math.random() * Z11.length)]           
          const G22 = U11[Math.floor(Math.random() * U11.length)]
          const H33 = T11[Math.floor(Math.random() * T11.length)]
          D11 = `LISTA GAY\nTop de los mas gays del grupo ??🙃\n@${F11.jid.split('@')[0]} \n\n@${G22.jid.split('@')[0]}\n\n@${H33.jid.split('@')[0]}\nELLOS SON GAYS`                  
          jds.push(F11.jid)
          jds.push(G22.jid)
          jds.push(H33.jid)
          client.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${D11}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        addFilter(from)
          break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=ohayou`)
                    client.sendMessage(from, ini_buffer, image, { quoted: ftex})
                    break
                    case 'ngif':
                    case 'nsfw_neko_gif':
                    case 'random_hentai_gif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=BayuPerkasa`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    buff = fs.readFileSync(rano)
                    client.sendMessage(from, buff, sticker, { quoted: ftex})
                    fs.unlinkSync(rano)
                    })
                    break
                    case  'trapnime':
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
client.sendMessage(from, buffer, image, { quoted: mek})
break
        case 'avatar':		  
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				client.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			addFilter(from)
          break
   
         case 'tfire':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(7)
                   
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break             
       case 'ytgol':  
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(8)
                   
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'ytsilver':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(10)
                   
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 't3d':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz*`)
                   F = body.slice(5)
                   
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'logoa':
                   if (args.length < 1) return fakegroup(`[  ×  ] Ejemplo :\n*${prefix}${command} Kriz|xd*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   client.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break          
case 'cuaderno': 
if (args.length < 1) return reply('*y el texto?*') 
catat = args.join(" ")
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
client.sendMessage(from, catat, image, { quoted:mek,caption:'listo' })
break
          case 'abrazar':
case 'abrazo':
case 'abraza':       		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const abra = ['ab1','ab2','ab3','ab4','ab5','ab6','ab7','ab8','ab9','ab10']
	const abras = abra[Math.floor(Math.random() * abra.length)]				
				result = fs.readFileSync(`./sticker/reac/abra/${abras}.mp4`)
client.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} esta abrazando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'patear':
case 'patea':
case 'pat':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const pat = ['pat1','pat2','pat3','pat4','pat5']
	const pate = pat[Math.floor(Math.random() * pat.length)]				
				result = fs.readFileSync(`./sticker/reac/patad/${pate}.mp4`)
client.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} a pateado a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'palmaditas':
case 'palmada':
case 'palmadas':
case 'palmadita':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const palm = ['pal1','pal2','pal3','pal4','pal5','pal6','pal7']
	const palma = palm[Math.floor(Math.random() * palm.length)]				
				result = fs.readFileSync(`./sticker/reac/palm/${palma}.mp4`)
client.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} le esta dando unas palmaditas a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'besar':
case 'beso':
case 'besa':		
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) return reply('etiqueta')  
const bes = ['bes1','bes2','bes3','bes4','bes5','bes6','bes7']
	const beso = bes[Math.floor(Math.random() * bes.length)]				
				result = fs.readFileSync(`./sticker/reac/beso/${beso}.mp4`)
client.sendMessage(from, result, video, { quoted: freply, caption: `${pushname} esta besando a @${mentioned[0].split('@')[0]}`})
				addFilter(from)
          break
case 'guralogo':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case 'butterflytext':
                if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Kriz`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/butterfly?text=${txt}&apikey=hH2IYthq`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                    case 'stickbj':
case 'stickblowbjob':
case 'sbj':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
reply(mess.wait)
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }			
			break

case 'stickneko':
case 'sneko':
case 'nekostick':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }

			break
			
case  'loli':

reply (mess.wait)
const ui =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69']
    const xfjjs = ui[Math.floor(Math.random() * ui.length)]
uwu = fs.readFileSync(`./loli/${xfjjs}.jpg`);
client.sendMessage(from, uwu, image, {quote: mek})
break
case 'pack':

reply (mess.wait)
const uiu =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19']
    const xfjjjjjs = uiu[Math.floor(Math.random() * uiu.length)]
uwu = fs.readFileSync(`./muslos/${xfjjjjjs}.jpg`);
client.sendMessage(from, uwu, image, {quote: mek, caption: '7w7'})
break	
        case 'piropos':   	  
				client.updatePresence(from, Presence.composing) 				
				const mary =['Algunos quieren ser ricos a traves del dinero, otros del poder, pero lo que no saben, es que la unica riqueza es tu amor verdadero.','So�ando contigo he tenido una revelacion, ahora necesito que me hagas un hueco en tu corazon.','Aunque por tu corazon han pasado muchas personas, me gustaria que me hicieses un huequecito eterno, por peque�o que sea, por si pasa algo, para que no me olvides jamas.','Lo que siento por ti es tan inmenso que, para guardarlo, me haria falta otro universo.','me he convertido en un capitan pirata para asaltar tu corazon y robarle el amor.','Me preguntaste por que te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojala fuese papel para poder envolverte, bombon.','Ansio besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaria que tu fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tu no estas conmigo.','�De casualidad tienes un mapa contigo? Porque tengo el inter�s de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo est� lleno de estrellas, t� eres la m�s importante para mi','Si ser guapo fuera pcado, ya estar�as haciendo penitencia','Los que dicen que Disneyland es el lugar m�s feliz del mundo no han estado junto a ti','Si ser guapo matara, ser�as la bomba at�mica','Si fuera gato, pasar�a mis nueve vidas contigo','�Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./cnf.jpg`)
				client.sendMessage(from, wew, image, { caption: '*Piropos*\n\n'+ js, quoted: mek })
              addFilter(from)
          break
    case 'frases': 			  
				client.updatePresence(from, Presence.composing) 
				const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la m�sica habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Kriz Edits)','Una vez aceptamos nuestros l�mites, vamos m�s all� de ello (Albert Einstein)','Lo que no nos mata nos hace m�s fuertes (Friedrich Nietzsche)','Si caminas solo, ir�s m�s r�pido. Si caminas acompa�ado, llegar�s m�s lejos.','Una vida llena de errores no solo es m�s honorable, sino que es m�s sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero dif�cil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a re�rte de tus propios defectos','La preocupaci�n es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que m�s ha vivido no es aquel que m�s a�os ha cumplido, sino aquel que m�s ha experimentado la vida','Si lo puedes so�ar, lo puedes hacer','Lo imposible es el fantasma de los t�midos y el refugio de los cobardes','El camino que nos toca recorrer est� lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombr�as, pues eso es parte de adquirir experiencia. Y descubrir cu�n gratas o desafortunadas son las que te esperan, es algo nunca podr�s evadir','La felicidad no es algo que pospones para el futuro, es algo que dise�as para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones ser�n el reflejo de la manera que tienes de ver la vida y las que te van definir ante los dem�s. No las malgastes en cosas y actitudes que no valen la pena, solo t� puedes decidir la forma en la que quieres que te recuerden, porque no estar�s en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos har�a mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta t� mismo, pueden ocultar sorpresas que en la vida te podr�as haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y re�r. Recu�rdalo, todos tenemos los d�as contados, vive cada uno de tus d�as como si fueran el regalo m�s grande, porque nadie puede asegurarte el ma�ana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detr�s de su comportamiento, pero descubrirlo es la tarea m�s interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las p�ginas vac�as de la historia','La decepci�n despu�s de un amor fallido, puede llegar a oprimir tu coraz�n hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enf�cate en quienes se encuentran a tu lado en el presente y qu�date con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocaci�n, enti�rrala y sigue adelante','Amar es la aventura m�s grande en la que te puedes embarcar. Porque te puede hacer volar m�s alto de lo que jam�s imaginarte y tambi�n ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./cnf.jpg`)
				client.sendMessage(from, ses, image, { caption: '*Frases*\n\n'+ jys, quoted: mek })
              addFilter(from)
          break
          
case  'awoo':
if (!isGroup) return fakegroup('esta funcion es solo para grupos')

anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
client.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
break

case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break
 
case 'stickcum':
case 'scum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break
case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
//UNTUK FITNAH ORANG DOSA YA BRO
//TAPI KALO FITNAH PAKE BOT YA KAGA TAU
case 'fitnah':
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
///Bisa Buat Stiker Berwarna Warna
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} WahyuGanss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=ohayou&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
// MARI KITA BELANJA DI SHOOPE
case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    costum('SABAR BRO!!! ', text, tescuk, cr)             
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=ohayou&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
// BISA MENDETEKSI CUACAH SEKARANG
case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    costum('SABAR BRO!!! ', text, tescuk, cr)             
                   get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    client.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
// KHUSUS BASE.JSON
case 'base64enc': 
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (args.length < 1) return reply(`Contoh: devil botz`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				  if (args.length < 1) return reply(`Contoh: DEVIL BOTZ`)
					auah = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${auah}&APIKEY=7415bc4287ad5ca8`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				   encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break  
				   case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: Arya})
					break
// MENCARI GAMBAR GAMBAR 
case 'pinterest':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    costum('SABAR BRO!!! ', text, tescuk, cr)           
                     ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=ohayou&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                   case 'pinterestdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                   costum('SABAR BRO!!! ', text, tescuk, cr) 
                   ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
//FITUR  DOWNLOADER

case 'play': //@KRIZ EDITS
    reply('un momento')
   hay = body.slice(6) 
  anu = await fetchJson(`https://supraz.herokuapp.com/api/playaudio2?quero=${hay}&apikey=supraz`)
 buffer = await getBuffer(`https://supra-api.herokuapp.com/api/canvas/spotify?titulo=${anu.titulo}&text=LhannaBot&capa=${anu.imagem}&apikey=supraz`)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `*MUSICA ENCONTRADA*

🦎 *Autor* : ${anu.canal}
🦎 *Tamaño* : ${anu.tamanho}
🦎 *Visualizaciones* : ${anu.views}
🦎 *Likes* : ${anu.likes}
🦎 *Deslike* : ${anu.deslike}
🦎 *Publicado* : ${anu.postado}
`
 client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "ðŸŽ† Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: fdsz })

client.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}ï¸`, 'jpegThumbnail': await getBuffer(anu.imagem)}}}})
   break
                case 'ytmp3':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} link`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=kingsboybot&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Titulo: ${get_result.title}\n`
                    ini_txt += `Subido : ${get_result.uploader}\n`
                    ini_txt += `Duracion : ${get_result.duration}\n`
                    ini_txt += `Vistad : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Descripcion :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp32':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} link`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytmp2':
                    if (args.length == 0) return reply(`Ejemplo: ${prefix + command} link`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Titulo : ${get_result.title}\n`
                    ini_txt += `Subido : ${get_result.uploader}\n`
                    ini_txt += `Duracion : ${get_result.duration}\n`
                    ini_txt += `Vistas : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Descripcion :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} link`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=ohayou&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
			case 'ytaudio': //proses
                costum('ESPERAR PROCESO DE NUEVO!!!', text, tescuk, cr)
                anu = await fetchJson(`https://ramlan-api.herokuapp.com/api/yutub/audio?url=${body.slice(8)}&apikey=apiramlan`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `🌬️ *YOUTUBE MP3 * 🌬️\n\n* 🌬️ Titulo:* ${anu.result.title}\n*🌬️ Archivo:* ${anu.result.filesize}\n* Resultado:* ${anu.result.size}\n*🌬️ Video ID:* ${anu.result.videoId}\n*🌬️ Viewers:* ${anu.result.viewcount}\n*🌬️Rating:* ${anu.result.rating}\n\n*NO SPAM*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.result)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break	
// FITUR JADWAL SHOLAT JADI JANGAN SAMPAI LUPA YA 
// BIAR KAGA LUPA
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                    case 'igmp3': //proses
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=ohayou&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = audio
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, ini_type, { quoted: mek })
                    break
// ASMAULHUSNA PERNCARIAN
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
// fitur Kisah Nabi Nih Kak Keren Untuk Pengetahuan
case 'kisahnabi':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=ohayou`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
// CASE LANGKA AMONGUS NIH
case 'amongus':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} WahyuGanss`)
           costum('SABAR LAGI PROSES!!!', text, tescuk, cr)        
           buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=3af90a5d6317457b1f93e921&text=${body.slice(9)}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
//Case Langka Bisa Buat Ktp Keren Dan kece Habis
case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} DEVIL BOTZ`)
                  nik = args[0]
                  prov = args[1]
                  kabu = args[2]
                  name = args[3]
                  ttl = args[4]
                  jk = args[5]
                  jl = args[6]
                  rtrw = args[7]
                  lurah = args[8]
                  camat = args[9]
                  agama = args[10]
                  nikah = args[11]
                  kerja = args[12]
                  warga = args[13]
                  until = args[14]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ktpmaker?apikey=ohayou&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=https://i.ibb.co/Xb2pZ88/test.jpg`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
// menu jodoh Menjodoh Temukan Jodoh anda
case 'jadian':
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. lo que está pasando de nuevo @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
// Siapa Disni Paling Ganteng
case 'terganteng':
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
//SIAPA YANG PALING CANTIK 
case 'tercantik':
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break 
//Fitur Langka Temoji Biasa Pake Emot
case 'temoji':
                    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} `)
                   costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=3af90a5d6317457b1f93e921`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
//
case 'expresar':
		if (!isOwner) return reply(ind.ownerb())
		if (!isOwner) return reply(ind.ownerb())
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedido recibido, amor :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`hola querida...ooo.. @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_está bien, es mejor si te mueres_', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_por cierto tengo una sorpresa para ti👉👈_', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, '_hhehe quieres ser mi novia??_', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 client.sendMessage(from, `_Te quiero..@${mentioned[0].split('@')[0]}_`, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
// FITUR TAG PALING GG JAIL SEDUNIA
case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isOwner) return reply(ind.ownerb())
					
					if (!isGroup) return reply(mess.only.group)
					
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
// Fitur Baru Keren Bro Bisa Colong Stiker
case 'takestick':
						if (!isOwner) return reply(ind.ownerb())
                        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(11)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const mediau = await client.downloadAndSaveMediaMessage(encmediau, `./sticker/${sender}`)
                         const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(ind.error.api)
							client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
// fitur Gg parah 
case 'ocr': 
					// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const mediau = await client.downloadAndSaveMediaMessage(encmediau)
						costum('SABAR LAGI PROSES!!!', text, tescuk, cr)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
// FITUR BUAT STIKER GIF DAN BIASA BISA
case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
				// Fix Case By Wahyu/Ganss⛔
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('WAIT DI PROSES MOHOM TUNGGU SEBENTAR', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break
// FITUR KECE NIH BRO UPDATE
// BISA NGOMONG SAMA GOGLE
case 'gtts':
		case 'tts':
				// Fix Case By Wahyu/Gans⛔
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
case 'info':
if (isBanned) return reply('```Lu kebanned kontol```')
    
  me = client.user
  uptime = process.uptime()
  teks = `*‣ Nama bot* : ${me.name}
  ‣ *Nomor Bot* : @${me.jid.split('@')[0]}
  ‣ *Owner* : devil store
  ‣ *Prefix* : [ ${prefix} ]
  ‣ *Total Block Contact* : ${blocked.length}
  ‣ *The bot is active on* : ${kyun(uptime)}
  ‣ *Total User* : ${_registered.length} User
  ‣ *Total Chat* : 1072`
  buffer = await getBuffer(me.imgUrl)
  client.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break
case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
					case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
		case 'self':
costum('SUKSES', text, tescuk, vo)
					break
		case 'bot':
					client.sendMessage(from, 'Iya kak? \nJangan lupa daftar ya kak ^_^"\nJika sudah silahkan berarti sudah terdaftar kak ^_^"',MessageType.text, { quoted: mek} )
					break
		case 'test':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'piyng':
					client.sendMessage(from, 'Active',MessageType.text, { quoted: mek} )
					break
		case 'assalamualaikum':
					client.sendMessage(from, 'Waalaikumusalam',MessageType.text, { quoted: mek} )
					break
		case 'kontol':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break

		case 'setingg':
					client.sendMessage(from, 'Chat Owner Ku Chat Spam Kaga Di Tanggain Chat Yang  Sopan Tuh Nomor Nya Bilang Bang Mau Premium Gratis https://api.whatsapp.com/send?phone=6285697662826 Gunakan Dengan SebaiK Baik Nya Oke',MessageType.text, { quoted: mek} )
					break
		case 'ngentod':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break
		case 'kntl':
					client.sendMessage(from, 'Gunakan bahasa yang benar\nAnda akan kami banned!\nHubungi kami : wa.me/6285697662826',MessageType.text, { quoted: mek} )
					break

		case 'wa.me':
		case 'wame':
  					// Fix Case By Kriz/Edits⛔
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝘆𝗮𝗵𝗵 @${mentioned[0].split('@')[0]} 𝗷𝗮??𝗮??𝗮𝗻 𝗮𝗱𝗺𝗶𝗻 𝗸𝗮𝗺𝘂 𝘀??𝗱𝗮𝗵 𝗱𝗶 𝗰𝗼𝗽𝗼𝘁🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲?? 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻??𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿??𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
case 'kicktime':
                   if (!isBotGroupAdmins) return reply(ind.badmin())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					client.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					client.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					client.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					client.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					// Fix Case By Wahyu/Ganss⛔
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST DEVIL-BOT 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST DEVIL BOTZ 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owners':
            case 'creator':
            case 'developer':     
  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard3}, MessageType.contact, { quoted: mek})
client.sendMessage(from, {displayname: "Jeff", vcard: vcard4}, MessageType.contact, { quoted: mek})
tod = await getBuffer(`./src/HelpJs.jpg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*NO SPAM *'})
                 break
case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (!isOwner) return reply(ind.ownerb())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻??𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*lo siento ordenes son ordenes..* 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`*ordenes son ordenes* @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `Lista de admins *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'toimg':
				    if (isBanned) return reply(ind.baned())
				    if (!isQuotedSticker) return reply('responde al sticker')
				 reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih ANJING'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break



	
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Activar presione 1, Deshabilitar presione 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*La función de bienvenida ha estado activa antes')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ EXITO ❭ activada la función de bienvenida en este grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ EXITO ❭ desactivada la función de bienvenida en grupo')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return reply('*Only Adminban & Owner Kami!*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=ohayou`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        txt = `Anilist id : ${get_result.anilist_id}\n`
                        txt += `MAL id : ${get_result.mal_id}\n`
                        txt += `Title Romaji : ${get_result.title_romaji}\n`
                        txt += `Title Native : ${get_result.title_native}\n`
                        txt += `Title English : ${get_result.title_english}\n`
                        txt += `at : ${get_result.at}\n`
                        txt += `Episode : ${get_result.episode}\n`
                        txt += `Eimilarity : ${get_result.similarity}`
                        client.sendMessage(from, ini_video, video, { quoted: mek, caption: txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				default:
            if (budy.includes(`asalamualaikum`)) {
const Alam = fs.readFileSync('./mp3/salam.mp3');
client.sendMessage(from, Alam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Assalamualaikum`)) {
const Salam = fs.readFileSync('./mp3/salam.mp3');
client.sendMessage(from, Salam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

        if (budy.includes(`shitpost`)) {
const sayang = fs.readFileSync('./mp3/shitpost.mp3');
client.sendMessage(from, sayang, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }

       if (budy.includes(`no tengo amigos :(`)) {
const Vali = fs.readFileSync('./mp3/papu.mp3');
client.sendMessage(from, Vali, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }


       if (budy.includes(`No tengo amigos :(`)) {
const baby = fs.readFileSync('./mp3/papu.mp3');
client.sendMessage(from, baby, MessageType.audio, {quoted: mek})

                  }
                 
        if (budy.includes(`gay`)) {
const Gay = fs.readFileSync('./mp3/gay.mp3');
client.sendMessage(from, Gay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
     
                  }

if (budy.includes(`Gay`)) {
const Gay = fs.readFileSync('./mp3/gay.mp3');
client.sendMessage(from, Gay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                 }
       if (budy.includes(`te amo bot`)) {
const BOT = fs.readFileSync('./mp3/real.mp3');
client.sendMessage(from, BOT, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  }
                  
    if (budy.includes(`Te amo bot`)) {
const BOT = fs.readFileSync('./mp3/real.mp3');
client.sendMessage(from, BOT, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})              

                  }

       if (budy.includes(`sexo`)) {
const SEXO = fs.readFileSync('./mp3/sexo.mp3');
client.sendMessage(from, SEXO, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  
                  }
                  
           
       if (budy.includes(`Sexo`)) {
const Sexo = fs.readFileSync('./mp3/sexo.mp3');
client.sendMessage(from, Sexo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                  }

   if (budy.includes(`es viernes`)) {
const viernes = fs.readFileSync('./mp3/viernes.mp3');
client.sendMessage(from, viernes, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                  }


   if (budy.includes(`Es viernes`)) {
const VIERNES = fs.readFileSync('./mp3/viernes.mp3');
client.sendMessage(from, VIERNES, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

                 }

if (budy.includes(`Bot de mierda`)) {
const MIERDA = fs.readFileSync('./mp3/boliviano.mp3');
client.sendMessage(from, MIERDA, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                 }
                 
     if (budy.includes(`bot de mierda`)) {
const mierda = fs.readFileSync('./mp3/boliviano.mp3');
client.sendMessage(from, mierda, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            
                 }

        if (budy.includes(`Kontol`)) {
const baka = fs.readFileSync('./mp3/Baka.mp3');
client.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})


                  



                  }



		if (budy.includes(`Sayang`)) {

                  reply(`Aku Juga Sayang Kamu Kak😍`)

                  }



		if (budy.includes(`pjjrjendnnnenea`)) {
const Banai = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Banai, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`saniejeiejenejjge`)) {
const Peli = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Peli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }





		if (budy.includes(`gijehebehhehla`)) {
const Mau = fs.readFileSync('./mp3/kasar.mp3');
client.sendMessage(from, Mau, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }



		if (budy.includes(`Bohdjdjdjt`)) {
const apaya = fs.readFileSync('./mp3/Apaya.mp3');
client.sendMessage(from, apaya, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  

                  }


		if (budy.includes(`Makasih`)) {

                  reply(`Sama-sama ${pushname}`)

                  }
            
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})