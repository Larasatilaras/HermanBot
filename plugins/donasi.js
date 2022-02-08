let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *myIndosat:* [6285759662798]
┣➥ *Dana:* [6285759662798]
┣➥ *Gopay:* [6285759662798]
┣➥ *Ovo:* [6285759662798]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6285759662798*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
