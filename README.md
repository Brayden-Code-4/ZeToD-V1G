# ZeToD Frontend

Production-ready landing page and auth flow for **ZeToD** (Zero To Deploy) — an open-source platform that evaluates real Python developer skills.

## Stack

- React + Vite (JavaScript)
- Tailwind CSS v4
- React Router DOM
- Axios
- Lucide React

## Project structure

```
src/
├── components/
│   ├── auth/          LoginForm, RegisterForm
│   ├── layout/        Navbar, Footer
│   ├── sections/      Hero, Stats, Features, HowItWorks, Testimonials, FAQ
│   └── ui/            Button, Card, Container, SectionTitle, Logo
├── pages/             Home, Login, Register
├── router/            AppRouter.jsx
├── services/          api.js (Axios + backend)
├── data/              Static content
└── hooks/             useInView
```

## Local development

```bash
npm install
npm run dev
```

Windows PowerShell (if `npm` is blocked):

```powershell
npm.cmd run dev
```

## Backend

Set the API URL in `.env`:

```env
VITE_API_URL=https://zetod-backend.onrender.com
```

Axios is configured in `src/services/api.js` with:

- Health check: `GET /`
- Login: `POST /api/auth/login`
- Register: `POST /api/auth/register`
- JWT token stored in `localStorage` as `zetod_token`

**Start Assessment** routes users to `/login` first, then connects to backend authentication.

## Routes

| Path        | Page     |
|-------------|----------|
| `/`         | Landing  |
| `/login`    | Sign in  |
| `/register` | Sign up  |

## Deploy (Vercel)

1. Import the repo on [vercel.com](https://vercel.com)
2. Root directory: `frontend` (monorepo) or `.` (standalone)
3. Framework: **Vite**
4. Build: `npm run build` → Output: `dist`
5. Env var: `VITE_API_URL=https://zetod-backend.onrender.com`

## Git

```bash
git add .
git commit -m "Add frontend landing page"
git push
```
