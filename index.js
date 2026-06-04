const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Bot läuft! Dein Trading-Tool ist bereit.'));

bot.launch();
console.log('Bot gestartet...');
