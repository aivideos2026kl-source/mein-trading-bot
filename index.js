const { Telegraf } = require('telegraf');

// Hier wird der Token aus der Railway-Variable gelesen
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Trading Bot ist online und bereit!'));

bot.launch();
console.log('Bot wurde gestartet...');
