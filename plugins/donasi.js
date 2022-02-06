let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *myXL:* [6287832147584]
┣➥ *Dana:* [6287832147584]
┣➥ *Gopay:* [6287832147584]
┣➥ *Ovo:* [6287832147584]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6287832147584*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
