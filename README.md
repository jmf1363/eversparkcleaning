# EverSpark Cleaning Co. — Website

Static marketing site for EverSpark Cleaning Co. (Traverse City, MI), hosted free on GitHub Pages
at the custom domain **eversparkcleaning.com**.

## Stack
- Plain HTML/CSS/JS, no build step, no framework.
- Contact form submits via [FormSubmit.co](https://formsubmit.co) (free, no signup) directly to
  `marisaflange@gmail.com`. **The first real submission after go-live will trigger a one-time
  "activate this form" confirmation email from FormSubmit to that inbox — it must be clicked
  once**, or subsequent submissions won't be delivered.
- `CNAME` file at repo root tells GitHub Pages which custom domain to serve.

## Local preview
Just open `index.html` in a browser, or run a tiny local server:
```
cd website
python3 -m http.server 8000
```

## Deploy
Pushing to `main` auto-publishes via GitHub Pages (configured in repo Settings → Pages,
source: `main` branch, `/` root). No CI needed for a static site this size.

## Updating content
Edit `index.html` directly — services, about copy, service area, and contact section are all
plain sections near the top of the file. Colors/spacing live in `styles.css` (`:root` variables
at the top match the brand logo: navy `#0e3a5f`, teal `#14b8c4`).

## Roadmap (not built yet)
- Online scheduling/booking widget
- Payment processing (e.g. Stripe) once the business is ready
- Phone number once call forwarding is set up
