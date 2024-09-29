require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('7669526908:AAGS5xV6lLMBSAIO9ZZkIUN2FyLlt1wkApU');

const mainMenu = Markup.keyboard([
    ['📢 Телеграм канал', '📚 Уроки'],
    ['🆘 Допомога', '📂 Користне']
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
    ctx.reply('Ось посилання на наш Telegram канал: https://t.me/WebCraftChanel');
});

bot.hears('📚 Уроки', (ctx) => {
    ctx.reply('Оберіть урок:', lessonsMenu);
});

bot.hears('JavaScript', (ctx) => {
    ctx.reply('https://www.w3schools.com/js/default.asp');
});

bot.hears('Python', (ctx) => {
    ctx.reply('https://www.w3schools.com/python/default.asp');
});

bot.hears('Node.js', (ctx) => {
    ctx.reply('https://www.w3schools.com/nodejs/default.asp');
});

bot.hears('React', (ctx) => {
    ctx.reply('https://www.w3schools.com/react/default.asp');
});

bot.hears('⬅️ Назад', (ctx) => {
    ctx.reply('Повертаємось на головне меню:', mainMenu);
});

bot.hears('🆘 Допомога', (ctx) => {
    ctx.reply('Допомогти тобі в любому напрямку можуть тут [https://t.me/Berlog_Of_Programmers]');
});

bot.hears('📂 Користне', (ctx) => {
    ctx.reply('Оберіть:', materialsMenu);
});

bot.hears('🎨 Дизайн', (ctx) => {
    ctx.reply('1. https://gamma.app/ 2. https://coolors.co/palettes/popular 3. https://uicolors.app/');
});

bot.hears('💻 Програмування', (ctx) => {
    ctx.reply('1. https://roadmap.sh/ 2. https://www.freecodecamp.org/ 3. https://mockapi.io/projects');
});

bot.hears('🖥️ Софт', (ctx) => {
    ctx.reply('Покищо тут пусто 😕');
});

bot.launch();

console.log('Бот запущено!');
