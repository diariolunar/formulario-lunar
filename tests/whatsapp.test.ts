import { describe,expect,it } from "vitest";
import type { Submission,SubId } from "@/lib/types";
import { formatWhatsAppA1,formatWhatsAppA6,formatWhatsAppA7,formatWhatsAppA17 } from "@/lib/whatsapp";

const base:Submission={id:"fixture",sub:"A1",nome:"Maria Teste",user:"@mariateste",obra:"Reino de Vidro",link:"https://example.com/obra?x=1&y=ç",prologoMaisDe1k:true,capitulosMaisDe41k:{tem:true,quais:"3, 7"},capitulosMenosDe500:{tem:true,quais:"2"},gatilhoUsuario:"Aranhas 🔥",gatilhoObra:"Violência, ação & 'sombras' \"escuras\"",createdAt:null};

const expected:Record<SubId,string>={
A1:`🐦‍🔥🪸 *A1* 🪸 🔸 *História do dia*  🐦‍🔥

📙 *Nome da Obra:* Reino de Vidro
🐙 *Autor:* Maria Teste
🦊 *User:* @mariateste
🏵️ *link:* https://example.com/obra?x=1&y=ç


🏮 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
Sim


🍁 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊? 𝐐𝐮𝐚𝐢𝐬?
3, 7

🔥 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬? 𝐐𝐮𝐚𝐢𝐬?
2

🐦‍🔥 Você tem algum gatilho?
Aranhas 🔥

🦊 Sua obra tem algum gatilho?
Violência, ação & 'sombras' "escuras"



🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


🐦‍🔥"Vᴏᴄᴇ̂ ᴀᴄᴀʙᴀ ᴅᴇ ᴀᴅᴇɴᴛʀᴀʀ ᴜᴍ sᴜʙᴍᴜɴᴅᴏ ʟɪᴛᴇʀᴀ́ʀɪᴏ ᴅᴇ ᴏʙʀᴀs ᴍɪsᴛᴀs  ᴘʀᴇᴘᴀʀᴇ-sᴇ ᴘᴀʀᴀ sᴇʀ ᴀʀʀᴇʙᴀᴛᴀᴅᴏ ᴘᴏʀ ᴜᴍᴀ ᴄᴏʟᴄʜᴀ ᴅᴇ ʀᴇᴛᴀʟʜᴏs ᴅᴇ ɢᴇ̂ɴᴇʀᴏs ᴇɴᴠᴏʟᴠᴇɴᴛᴇs. Aǫᴜɪ, ᴏ ɪɴᴇsᴘᴇʀᴀᴅᴏ ᴇ́ ʀᴇɢʀᴀ: ɴᴀʀʀᴀᴛɪᴠᴀs ᴇsᴄᴀʟᴅᴀɴᴛᴇs ᴇ ᴘʀᴏᴠᴏᴄᴀɴᴛᴇs sᴇ ᴇɴᴛʀᴇʟᴀᴄ̧ᴀᴍ ᴄᴏᴍ ᴛʀᴀᴍᴀs ɪɴᴛᴇɴsᴀs, ᴅᴇɴsᴀs ᴇ ᴀʙsᴏʟᴜᴛᴀᴍᴇɴᴛᴇ ɪʀʀᴇsɪsᴛɪ́ᴠᴇɪs. Dᴇɢᴜsᴛᴇ ᴄᴀᴅᴀ ᴘᴀʟᴀᴠʀᴀ ᴄᴏᴍᴏ ǫᴜᴇᴍ sᴀʙᴏʀᴇɪᴀ ᴜᴍ ʙᴀɴǫᴜᴇᴛᴇ ᴅᴇ ᴇᴍᴏᴄ̧ᴏ̃ᴇs, ᴘᴏɪs ᴏ ᴇxᴛʀᴀᴏʀᴅɪɴᴀ́ʀɪᴏ ʜᴀʙɪᴛᴀ ᴇᴍ ᴄᴀᴅᴀ ʟɪɴʜᴀ."🐦‍🔥`,
A6:`𖤐⛓️🔥 𝐀-𝟔 — 𝐓𝐑𝐎𝐍𝐎 𝐏𝐑𝐎𝐅𝐀𝐍𝐎 🔥⛓️𖤐

🩸 𝐍𝐎𝐌𝐄:
Maria Teste

♜ 𝐔𝐒𝐄𝐑:
@mariateste

📕 𝐆𝐑𝐈𝐌𝐎́𝐑𝐈𝐎/𝐎𝐁𝐑𝐀:
Reino de Vidro

🔗 𝐋𝐈𝐍𝐊:
https://example.com/obra?x=1&y=ç

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━

📜 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
Sim

🐉 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬?
3, 7

🗝️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬?
2

🔥 Você tem algum gatilho?
Aranhas 🔥

𖤐 Sua obra possui algum gatilho?
Violência, ação & 'sombras' "escuras"

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━

🔥 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐬𝐞𝐣𝐚 𝐬𝐞𝐥𝐚𝐝𝐚 𝐞𝐦 𝐟𝐨𝐠𝐨,
𝐪𝐮𝐞 𝐬𝐞𝐮 𝐠𝐫𝐢𝐦𝐨́𝐫𝐢𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐟𝐢𝐞́𝐢𝐬,
𝐞 𝐪𝐮𝐞 𝐚 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐜𝐨𝐧𝐪𝐮𝐢𝐬𝐭𝐞
𝐮𝐦 𝐥𝐮𝐠𝐚𝐫 𝐧𝐨 𝐓𝐫𝐨𝐧𝐨 𝐏𝐫𝐨𝐟𝐚𝐧𝐨.

━━━━━━━━━━━ 𖤐 ━━━━━━━━━━━`,
A7:`✦🗺️📖 𝐀-𝟕 — 𝐌𝐀𝐑𝐆𝐄𝐍𝐒 𝐃𝐄 𝐌𝐔𝐍𝐃𝐎𝐒 📖🗺️✦

🌿 𝐍𝐎𝐌𝐄:
Maria Teste

🧭 𝐔𝐒𝐄𝐑:
@mariateste

📖 𝐌𝐔𝐍𝐃𝐎/𝐎𝐁𝐑𝐀:
Reino de Vidro

🔗 𝐋𝐈𝐍𝐊:
https://example.com/obra?x=1&y=ç

━━━━━━━━━━━ ✦ ━━━━━━━━━━━

📜 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
Sim

🌌 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬?
3, 7

🗝️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬?
2

🌿 Você tem algum gatilho?
Aranhas 🔥

🗺️ Sua obra possui algum gatilho?
Violência, ação & 'sombras' "escuras"

━━━━━━━━━━━ ✦ ━━━━━━━━━━━

🌿 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐚𝐛𝐫𝐚 𝐜𝐚𝐦𝐢𝐧𝐡𝐨𝐬,
𝐪𝐮𝐞 𝐬𝐞𝐮 𝐦𝐮𝐧𝐝𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐟𝐢𝐞́𝐢𝐬,
𝐞 𝐪𝐮𝐞 𝐚 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐚𝐭𝐫𝐚𝐯𝐞𝐬𝐬𝐞 𝐟𝐫𝐨𝐧𝐭𝐞𝐢𝐫𝐚𝐬
𝐩𝐞𝐥𝐚𝐬 𝐌𝐚𝐫𝐠𝐞𝐧𝐬 𝐝𝐞 𝐌𝐮𝐧𝐝𝐨𝐬.

━━━━━━━━━━━ ✦ ━━━━━━━━━━━`,
A17:`⚔️🌑🖤 𝐀-𝟏𝟕 — 𝐋𝐀̂𝐌𝐈𝐍𝐀 𝐒𝐎𝐌𝐁𝐑𝐈𝐀 🖤🌑⚔️

🗡️ 𝐍𝐎𝐌𝐄:
Maria Teste

⚔️ 𝐔𝐒𝐄𝐑:
@mariateste

📖 𝐎𝐁𝐑𝐀:
Reino de Vidro

⚫ 𝐋𝐈𝐍𝐊:
https://example.com/obra?x=1&y=ç

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━

🌒 𝐒𝐞𝐮 𝐩𝐫𝐨́𝐥𝐨𝐠𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟏𝐊 𝐝𝐞 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬?
Sim

⚔️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝐦𝐚𝐢𝐬 𝐝𝐞 𝟒.𝟏𝐊?
𝐐𝐮𝐚𝐢𝐬? (𝐀𝐩𝐞𝐧𝐚𝐬 𝐧𝐮́𝐦𝐞𝐫𝐨𝐬)
3, 7

🛡️ 𝐀𝐥𝐠𝐮𝐦 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨 𝐭𝐞𝐦 𝟓𝟎𝟎 𝐨𝐮 𝐦𝐞𝐧𝐨𝐬?
𝐐𝐮𝐚𝐢𝐬? (𝐀𝐩𝐞𝐧𝐚𝐬 𝐧𝐮́𝐦𝐞𝐫𝐨𝐬)
2

🖤 Você tem algum gatilho?
Aranhas 🔥

⚔️  Sua obra possui algum gatilho?
Violência, ação & 'sombras' "escuras"

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━

🖤 𝐁𝐨𝐚𝐬-𝐯𝐢𝐧𝐝𝐚𝐬, 𝐚𝐮𝐭𝐨𝐫𝐚/𝐚𝐮𝐭𝐨𝐫.

𝐐𝐮𝐞 𝐬𝐮𝐚 𝐡𝐢𝐬𝐭𝐨́𝐫𝐢𝐚 𝐬𝐞𝐣𝐚 𝐚𝐟𝐢𝐚𝐝𝐚 𝐜𝐨𝐦𝐨 𝐮𝐦𝐚 𝐥𝐚̂𝐦𝐢𝐧𝐚,
𝐪𝐮𝐞 𝐜𝐚𝐝𝐚 𝐩𝐚́𝐠𝐢𝐧𝐚 𝐜𝐨𝐫𝐭𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨, 𝐞 𝐪𝐮𝐞 𝐬𝐮𝐚 𝐨𝐛𝐫𝐚 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞
𝐥𝐞𝐢𝐭𝐨𝐫𝐞𝐬 𝐝𝐢𝐠𝐧𝐨𝐬 𝐝𝐞 𝐩𝐨𝐫𝐭𝐚́-𝐥𝐚. 𝐒𝐞𝐣𝐚 𝐛𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚̀
𝐋𝐚̂𝐦𝐢𝐧𝐚 𝐒𝐨𝐦𝐛𝐫𝐢𝐚.

━━━━━━━━━━━ ⚔️ ━━━━━━━━━━━`
};

describe("formatadores de WhatsApp",()=>{
  it.each([
    ["A1",formatWhatsAppA1],["A6",formatWhatsAppA6],["A7",formatWhatsAppA7],["A17",formatWhatsAppA17],
  ] as const)("mantém o template %s byte a byte",(sub,format)=>{
    const record={...base,sub} as Submission;
    expect(format(record)).toBe(expected[sub]);
  });
});
