require('dotenv').config();

console.log("Bem-vindo ao robot de automação de teste de software");

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  //Define o tamanho da página
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
  });
  // - Acessa a página de login
  await page.goto('https://www.pexels.com/pt-br/join-consumer/');
  
  // Login e senha
  await page.type('[name="user[first_name]"]', 'Witney')
  await page.type('[type="email"]', 'witneyreinande@')
  await page.type('[type="password"]', 'Udv2M%s9!Q?,NzC')

  await page.click('[class="rd__button rd__button--full-width"]')

 
})();
