# Portfolio

A runnable portfolio site with a contact form powered by Web3Forms. No database required.

## How to run

1. **Requirements**: Node.js (>= 20 recommended).

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure the contact form** (optional but recommended):
   - Copy `.env.example` to `.env`.
   - Get a free access key at [web3forms.com](https://web3forms.com).
   - Set `VITE_WEB3FORMS_ACCESS_KEY` in `.env` to your key. Contact form submissions will be sent to the email associated with that key.

4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:5000). No database is required.

## Production

```bash
npm run build
npm run start
```

Set `PORT` in the environment if needed (default 5000). Ensure `VITE_WEB3FORMS_ACCESS_KEY` is set at build time so the contact form works in the built client.
