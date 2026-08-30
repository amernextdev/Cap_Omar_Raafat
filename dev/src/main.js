// ==============
//  CSS
// ==============
import '/src/style.css'

// ==============
// Data JSON
// ==============
import botDataJson from '/src/data/chatbot-data.json';

// ==============
//  Services JS
// ==============

// ==============
// Components JS
// ==============
// import '/src/components/header/header.js';
import { MenuBot } from '/src/components/chatbot/chatbot.js';
import '/src/components/hero/hero.js';


// ==============
// Start
// ==============
let bot;

async function startBot() {
  bot = MenuBot.init({
    containerId: "chatbot-container",
    data: botDataJson,        // استيراد مباشر بدل fetch (أنضف مع Vite)
    mode: "floating"
  });
}

startBot();

document.getElementById("my-custom-open-btn").addEventListener("click", () => {
  if (bot) bot.open();
});