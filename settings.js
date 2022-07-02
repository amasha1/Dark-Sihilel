//═══════════════════════════════════════════════════════//
//
//                              ♥️HIRU𝚄_QUEEN 𝓫𝔂 Sihilel♥️
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94701651987']
global.premium = ['94729285340']
global.ownernomer = '94729285340'
global.ownername = '❤️ 𝙰𝙼𝙰𝚂𝙷𝙰 ❤️'
global.botname = '❤️_𝘛𝚁𝘈𝙲𝘒 𝙾𝘜𝚃 _❤️'
global.footer = '©𝙰𝙼𝙰𝚂𝙷𝙰 🐼👻'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://chat.whatsapp.com/KwhBPTk1yvWLrpmGcgdA2h'
global.myweb = 'https://www.facebook.com/profile.php?id=100056644392099'
global.packname = '❤️𝙰𝙼𝙰𝚂𝙷𝙰'𝚜 𝙱𝙾𝚃❤️'
global.author = '❤️𝙰_𝙼_𝙰_𝚂_𝙷_𝙰❤️'
global.sessionName = 'session'
global.hiruu = 'ඉතිම් කෝමද 😜😎'
global.prefa = ['','!','.',',','#','?','%','&','sh','🦄','🕊️','🐤']
global.sp = '⭔'
global.mess = {
    success: '𝙳𝙾𝙽𝙴 🐼🥀',
    admin: 'ඇඩ්මින්ලට විතරයි මේක පුලුවන් බියුටිපුල් ළමයෝ 🌚\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    botAdmin: 'ඇට්මින් දෙන්න ළමයො මුලින් 😒\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    owner: '𝙰𝙼𝙰𝚂𝙷𝙰ට විතරයි ළමයෝ ඕක පුලුවන් 😂☝ \n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    group: 'group වල විතරයි ඕක තියෙන්නෙ බියුටිපුල් ළමයෝ 😒\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    private: 'inbox විතරයි පුලුවන් බියුටිපුල් ළමයෝ 🌝\n\n𝙰𝙼𝚂𝙷𝙰 🐼🥀',
    bot: 'මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    wait: 'චුට්ටක් ඉන්න බියුටිපුල් ළමයෝ 😌🤭\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    error: 'Error! Maybe Api Key Is Expired🤔!\n\n𝙰𝙼𝙰𝚂𝙷𝙰 🐼🥀',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours\n\n_𝘛𝚁𝘈𝙲𝘒 𝙾𝘜𝚃 _ °👅 🥵💤',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/Sihilel.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
