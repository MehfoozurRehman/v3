# Developer Portfolio v3

Third version of a personal developer portfolio: a React single-page site with swipeable project sliders, sections for services, skills, testimonials and a blog, and a contact form that sends email through EmailJS.

**Status:** Working demo. The sections render and the contact form is wired to EmailJS, but the repo has no tests, the blog and testimonial content are hard-coded, and no live URL is recorded.

## The problem

A developer needs a public site that shows their work, the services they offer and the people they have worked with, and that lets visitors send an inquiry without running a back end. This is the third iteration of that site.

## What it does

- Project showcase with Swiper sliders on the portfolio section (`src/screens/Porfolio/Portfolio.js`).
- Project details page for individual projects (`src/screens/ProjectDetailsPage/`).
- Sections for about, services, skills, testimonials and a blog, each with its own component and stylesheet under `src/screens/`.
- Contact form that sends through `emailjs-com` (`src/screens/Contact/Contact.js`).
- Header, jumbotron and footer shared across the page.

## How it's built

- React 17 with React Router v5 and plain CSS, one stylesheet per screen.
- Each section is a folder in `src/screens/`, and `App.js` assembles them.
- Carousels use Swiper 7 through `react-id-swiper`.
- The contact form posts from the browser with EmailJS, so there is no server code in this repo.
- Built with Create React App (`react-scripts` 5). The start, build and test scripts pass `--openssl-legacy-provider`, which is needed on newer Node versions.
- Firebase Hosting is configured through `firebase.json` and `.firebaserc`.

## Running it locally

```bash
pnpm install   # or npm install / yarn
pnpm start     # or npm start, then open http://localhost:3000
```

Other scripts: `build` (production bundle), `test` (react-scripts test runner), `firebase` (runs `firebase deploy`) and `deploy` (build, then firebase).

## What's left

- No test files exist, although the test script is configured.
- Blog posts and testimonials are hard-coded in their components.
- The EmailJS IDs are written in `Contact.js` rather than read from configuration.
- The app is on React 17 and React Router 5, which are both behind current releases.
- No live URL is recorded in the repo.
