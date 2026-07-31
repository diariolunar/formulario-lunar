import type { Submission } from "../types";

const values = (r:Submission) => ({
  NOME:r.nome, USER:r.user, OBRA:r.obra, LINK:r.link,
  PROLOGO:r.prologoMaisDe1k?"Sim":"Não",
  CAPITULOS_MAIS_41K:r.capitulosMaisDe41k.tem?r.capitulosMaisDe41k.quais:"Não",
  CAPITULOS_MENOS_500:r.capitulosMenosDe500.tem?r.capitulosMenosDe500.quais:"Não",
  GATILHO_USUARIO:r.gatilhoUsuario, GATILHO_OBRA:r.gatilhoObra,
});

export function formatWhatsAppA1(r:Submission){const v=values(r);return `🐦‍🔥🪸 *A1* 🪸 🔸 *História do dia*  🐦‍🔥

📙 *Nome da Obra:* ${v.OBRA}
🐙 *Autor:* ${v.NOME}
🦊 *User:* ${v.USER}
🏵️ *link:* ${v.LINK}


🏮 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
${v.PROLOGO}


🍁 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊? 𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MAIS_41K}

🔥 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬? 𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MENOS_500}

🐦‍🔥 Você tem algum gatilho?
${v.GATILHO_USUARIO}

🦊 Sua obra tem algum gatilho?
${v.GATILHO_OBRA}



🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


🐦‍🔥"Vᴏᴄᴇ̂ ᴀᴄᴀʙᴀ ᴅᴇ ᴀᴅᴇɴᴛʀᴀʀ ᴜᴍ sᴜʙᴍᴜɴᴅᴏ ʟɪᴛᴇʀᴀ́ʀɪᴏ ᴅᴇ ᴏʙʀᴀs ᴍɪsᴛᴀs  ᴘʀᴇᴘᴀʀᴇ-sᴇ ᴘᴀʀᴀ sᴇʀ ᴀʀʀᴇʙᴀᴛᴀᴅᴏ ᴘᴏʀ ᴜᴍᴀ ᴄᴏʟᴄʜᴀ ᴅᴇ ʀᴇᴛᴀʟʜᴏs ᴅᴇ ɢᴇ̂ɴᴇʀᴏs ᴇɴᴠᴏʟᴠᴇɴᴛᴇs. Aǫᴜɪ, ᴏ ɪɴᴇsᴘᴇʀᴀᴅᴏ ᴇ́ ʀᴇɢʀᴀ: ɴᴀʀʀᴀᴛɪᴠᴀs ᴇsᴄᴀʟᴅᴀɴᴛᴇs ᴇ ᴘʀᴏᴠᴏᴄᴀɴᴛᴇs sᴇ ᴇɴᴛʀᴇʟᴀᴄ̧ᴀᴍ ᴄᴏᴍ ᴛʀᴀᴍᴀs ɪɴᴛᴇɴsᴀs, ᴅᴇɴsᴀs ᴇ ᴀʙsᴏʟᴜᴛᴀᴍᴇɴᴛᴇ ɪʀʀᴇsɪsᴛɪ́ᴠᴇɪs. Dᴇɢᴜsᴛᴇ ᴄᴀᴅᴀ ᴘᴀʟᴀᴠʀᴀ ᴄᴏᴍᴏ ǫᴜᴇᴍ sᴀʙᴏʀᴇɪᴀ ᴜᴍ ʙᴀɴǫᴜᴇᴛᴇ ᴅᴇ ᴇᴍᴏᴄ̧ᴏ̃ᴇs, ᴘᴏɪs ᴏ ᴇxᴛʀᴀᴏʀᴅɪɴᴀ́ʀɪᴏ ʜᴀʙɪᴛᴀ ᴇᴍ ᴄᴀᴅᴀ ʟɪɴʜᴀ."🐦‍🔥`;}

export function formatWhatsAppA6(r:Submission){const v=values(r);return `𖤐⛓️🔥 𝐀-𝟔 — 𝐓𝐑𝐎𝐍𝐎 𝐏𝐑𝐎𝐅𝐀𝐍𝐎 🔥⛓️𖤐

🩸 𝐍𝐎𝐌𝐄:
${v.NOME}

♜ 𝐔𝐒𝐄𝐑:
${v.USER}

📕 𝐆𝐑𝐈𝐌𝐎́𝐑𝐈𝐎/𝐎𝐁𝐑𝐀:
${v.OBRA}

🔗 𝐋𝐈𝐍𝐊:
${v.LINK}

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━

📜 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
${v.PROLOGO}

🐉 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MAIS_41K}

🗝️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MENOS_500}

🔥 Você tem algum gatilho?
${v.GATILHO_USUARIO}

𖤐 Sua obra possui algum gatilho?
${v.GATILHO_OBRA}

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━

🔥 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐬𝐞𝐣𝐚 𝐬𝐞𝐥𝐚𝐝𝐚 𝐞𝐦 𝐟𝐨𝐠𝐨,
𝐪𝐮𝐞 𝐬𝐞𝐮 𝐠𝐫𝐢𝐦𝐨́𝐫𝐢𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐟𝐢𝐞́𝐢𝐬,
𝐞 𝐪𝐮𝐞 𝐚 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐜𝐨𝐧𝐪𝐮𝐢𝐬𝐭𝐞
𝐮𝐦 𝐥𝐮𝐠𝐚𝐫 𝐧𝐨 𝐓𝐫𝐨𝐧𝐨 𝐏𝐫𝐨𝐟𝐚𝐧𝐨.

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━`;}

export function formatWhatsAppA7(r:Submission){const v=values(r);return `✦🗺️📖 𝐀-𝟕 — 𝐌𝐀𝐑𝐆𝐄𝐍𝐒 𝐃𝐄 𝐌𝐔𝐍𝐃𝐎𝐒 📖🗺️✦

🌿 𝐍𝐎𝐌𝐄:
${v.NOME}

🧭 𝐔𝐒𝐄𝐑:
${v.USER}

📖 𝐌𝐔𝐍𝐃𝐎/𝐎𝐁𝐑𝐀:
${v.OBRA}

🔗 𝐋𝐈𝐍𝐊:
${v.LINK}

━━━━━━━━━━━ ✦ ━━━━━━━━━━━

📜 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
${v.PROLOGO}

🌌 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MAIS_41K}

🗝️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬?
${v.CAPITULOS_MENOS_500}

🌿 Você tem algum gatilho?
${v.GATILHO_USUARIO}

🗺️ Sua obra possui algum gatilho?
${v.GATILHO_OBRA}

━━━━━━━━━━━ ✦ ━━━━━━━━━━━

🌿 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐚𝐛𝐫𝐚 𝐜𝐚𝐦𝐢𝐧𝐡𝐨𝐬,
𝐪𝐮𝐞 𝐬𝐞𝐮 𝐦𝐮𝐧𝐝𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐟𝐢𝐞́𝐢𝐬,
𝐞 𝐪𝐮𝐞 𝐚 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐚𝐭𝐫𝐚𝐯𝐞𝐬𝐬𝐞 𝐟𝐫𝐨𝐧𝐭𝐞𝐢𝐫𝐚𝐬
𝐩𝐞𝐥𝐚𝐬 𝐌𝐚𝐫𝐠𝐞𝐧𝐬 𝐝𝐞 𝐌𝐮𝐧𝐝𝐨𝐬.

━━━━━━━━━━━ ✦ ━━━━━━━━━━━`;}

export function formatWhatsAppA17(r:Submission){const v=values(r);return `⚔️🌑🖤 𝐀-𝟏𝟕 — 𝐋𝐀̂𝐌𝐈𝐍𝐀 𝐒𝐎𝐌𝐁𝐑𝐈𝐀 🖤🌑⚔️

🗡️ 𝐍𝐎𝐌𝐄:
${v.NOME}

⚔️ 𝐔𝐒𝐄𝐑:
${v.USER}

📖 𝐎𝐁𝐑𝐀:
${v.OBRA}

⚫ 𝐋𝐈𝐍𝐊:
${v.LINK}

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━

🌒 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
${v.PROLOGO}

⚔️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬? (𝐀𝐩𝐞𝐧𝐚𝐬 𝐧𝐮́𝐦𝐞𝐫𝐨𝐬)
${v.CAPITULOS_MAIS_41K}

🛡️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬? (𝐀𝐩𝐞𝐧𝐚𝐬 𝐧𝐮́𝐦𝐞𝐫𝐨𝐬)
${v.CAPITULOS_MENOS_500}

🖤 Você tem algum gatilho?
${v.GATILHO_USUARIO}

⚔️  Sua obra possui algum gatilho?
${v.GATILHO_OBRA}

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━

🖤 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐬𝐞𝐣𝐚 𝐚𝐟𝐢𝐚𝐝𝐚 𝐜𝐨𝐦𝐨 𝐮𝐦𝐚 𝐥𝐚̂𝐦𝐢𝐧𝐚,
𝐪𝐮𝐞 𝐜𝐚𝐝𝐚 𝐩𝐚́𝐠𝐢𝐧𝐚 𝐜𝐨𝐫𝐭𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨, 𝐞 𝐪𝐮𝐞 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞
𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐝𝐢𝐠𝐧𝐨𝐬 𝐝𝐞 𝐩𝐨𝐫𝐭𝐚́-𝐥𝐚. 𝐒𝐞𝐣𝐚 𝐛𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚̀
𝐋𝐚̂𝐦𝐢𝐧𝐚 𝐒𝐨𝐦𝐛𝐫𝐢𝐚.

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━`;}

export const formatWhatsApp=(r:Submission)=>({A1:formatWhatsAppA1,A6:formatWhatsAppA6,A7:formatWhatsAppA7,A17:formatWhatsAppA17}[r.sub])(r);
