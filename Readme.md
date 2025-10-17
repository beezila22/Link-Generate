# Kazi Bora Redirect

Simple redirect templates for GitHub Pages (static) and Node/Express (Heroku/Render).

## Deploy GitHub Pages (static)
1. Rename `static-index.html` to `index.html` and push to your repo root.
2. Settings → Pages → Source = `main` branch / root.

## Deploy Node app to Heroku
1. Enter `node-app/` folder, init git, commit files.
2. `heroku create` then `git push heroku main`.
3. Set env var: `heroku config:set REDIRECT_URL="https://1818:18:18:18:0"`.

## Deploy to Render
1. Create new Web Service on Render and connect to GitHub repo.
2. Build/Start: `npm start` and set Environment Variable `REDIRECT_URL`.
