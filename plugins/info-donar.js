/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name}*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃ ➤ 𝙲𝙻𝙰𝚅𝙴:* 
*┃ 646180146012787575*
*┃ ➤ 𝙱𝙰𝙽𝙲𝙾: STP* 
*┃ ➤ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: LARIOS.PSD* 
*┃ ➤ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: APOYO*  
*┃*
*┃ 👉🏻 CONTACTAME PARA CREAR TU PROPIO BOT PERSONALIZADO*
*┃ 𝙼𝙰𝚂 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴*
*┃ wa.me/50253501417*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
