# SeerStone

Marketing site for SeerStone — an AI-native consumer goods group.

## Stack

Static HTML/CSS/JS. No build step. Deploys directly to Vercel as a static site.

## Local preview

Open `index.html` in a browser, or serve the directory:

```bash
npx serve .
```

Then visit:

- `/` — Homepage
- `/about`, `/platform`, `/ai-marketing`, `/fulfillment`, `/korea`, `/careers`, `/contact`
- `/mobile` — Internal review tool: every page rendered inside iPhone frames on a pan/zoom canvas. Not linked from the public nav.

## Structure

```
index.html
about.html
platform.html
ai-marketing.html
fulfillment.html
korea.html
careers.html
contact.html
mobile.html           # internal preview canvas
ios-frame.jsx         # iOS device chrome (used by mobile.html)
design-canvas.jsx     # pan/zoom canvas (used by mobile.html)
assets/
  globals.css
  components.js
  images/             # hero photography + editorial maps
  videos/             # homepage hero loop
vercel.json
```
