const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Default target if REDIRECT_URL not set
const TARGET = process.env.REDIRECT_URL || 'http://127.0.0.1:8828';

app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${TARGET}">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>𝙂𝙍𝙊𝙒 𝙔𝙊𝙐𝙍 𝘼𝘾𝘾𝙊𝙐𝙉𝙏 𝙃𝙀𝙍𝙀</title>
    <style>body{font-family:system-ui,Segoe UI,Roboto,Arial;margin:0;padding:40px;background:#071428;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh} .c{max-width:720px;text-align:center} a{color:#00d1a1;background:#042;display:inline-block;padding:10px 14px;border-radius:8px;text-decoration:none}</style>
  </head>
  <body>
    <div class="c">
      <h1>𝙂𝙧𝙤𝙬 𝙮𝙤𝙪𝙧 𝙖𝙘𝙘𝙤𝙪𝙣𝙩 𝙝𝙚𝙧𝙚</h1>
      <p>When you are here, you are said to be directed to ${TARGET}</p>
      <p><a href="${TARGET}">Now continue ▶</a></p>
    </div>
  </body>
  </html>`;
  res.send(html);
});

app.get('/api/target', (req,res)=> res.json({target: TARGET}));

app.listen(port, ()=> console.log(`Server running on port ${port}`));
