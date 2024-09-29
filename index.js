const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('7669526908:AAGS5xV6lLMBSAIO9ZZkIUN2FyLlt1wkApU');

const mainMenu = Markup.keyboard([
    ['📢 Телеграм канал', '📚 Уроки'],
    ['🆘 Допомога', '📂 Матеріали']
]).resize();

const lessonsMenu = Markup.keyboard([
    ['JavaScript', 'Python'],
    ['Node.js', 'React'],
    ['⬅️ Назад']
]).resize();

const materialsMenu = Markup.keyboard([
    ['🎨 Дизайн', '💻 Програмування'],
    ['🖥️ Софт', '⬅️ Назад']
]).resize();

bot.start((ctx) => {
    ctx.reply('Привіт, це бот WebCraft. Тут ти можеш знайти багато корисного!', mainMenu);
});

bot.hears('📢 Телеграм канал', (ctx) => {
    ctx.reply('Ось посилання на наш Telegram канал: https://t.me/YOUR_CHANNEL_LINK');
});

bot.hears('📚 Уроки', (ctx) => {
    ctx.reply('Оберіть урок:', lessonsMenu);
});

bot.hears('JavaScript', (ctx) => {
    ctx.reply('HelloWorld JS');
});

bot.hears('Python', (ctx) => {
    ctx.reply('Привіт, Python');
});

bot.hears('Node.js', (ctx) => {
    ctx.reply('HelloWorld Node.js');
});

bot.hears('React', (ctx) => {
    ctx.reply('HelloWorld React');
});

bot.hears('⬅️ Назад', (ctx) => {
    ctx.reply('Повертаємось на головне меню:', mainMenu);
});

bot.hears('🆘 Допомога', (ctx) => {
    ctx.reply('HelloWorld');
});

bot.hears('📂 Матеріали', (ctx) => {
    ctx.reply('Оберіть матеріал:', materialsMenu);
});

bot.hears('🎨 Дизайн', (ctx) => {
    ctx.reply('HelloWorld Дизайн');
});

bot.hears('💻 Програмування', (ctx) => {
    ctx.reply('HelloWorld Програмування');
});

bot.hears('🖥️ Софт', (ctx) => {
    ctx.reply('HelloWorld Софт');
});

bot.launch();

console.log('Бот запущено!');
