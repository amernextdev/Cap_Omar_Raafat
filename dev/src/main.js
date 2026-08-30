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
import '/src/components/header/header.js';
import "/src/components/problem/problem.js";
import "/src/components/how-it-works/how-it-works.js";
import "/src/components/offer/offer.js";
import "/src/components/transforms/transforms.js";
import "/src/components/testimonials/testimonials.js";
import "/src/components/pricing/pricing.js";
import "/src/components/about/about.js";
import "/src/components/faq/faq.js";
import "/src/components/cta/cta.js";
import "/src/components/footer/footer.js";
import "/src/components/floating-actions/floating-actions.js";
import { MenuBot } from '/src/components/chatbot/chatbot.js';


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