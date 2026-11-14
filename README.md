# Alireza Borji — Engineering Portfolio

A responsive, bilingual Persian/English portfolio for embedded systems, firmware and electronics work. All professional content is based on the supplied October 2026 resume. No framework, build process or backend is required.

## Preview

Screenshot placeholder: add a real screenshot at `assets/images/preview.png` after publication. Project visuals are explicitly labeled illustrations rather than product photographs.

## Technologies

Semantic HTML5, CSS3 and vanilla JavaScript. Persian typography uses Vazirmatn for body text and headings. Google Fonts are optional network assets with local fallback fonts. The page itself and resume work without an internet connection.

## Local usage

Open `index.html` directly in a browser. Optional preview: `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Structure

```text
index.html (Persian, default)
en.html (English)
js/fa.js (Persian content dictionary)
css/style.css
css/responsive.css
js/main.js
assets/icons/favicon.svg
assets/images/profile/
assets/images/projects/
assets/resume/alireza-borji-resume.pdf
README.md
.gitignore
.nojekyll
```

## Publish on GitHub Pages

1. Create a GitHub repository and upload these files, keeping `index.html` at its root.
2. Select the `main` branch as your default branch.
3. Open **Repository → Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose **main** and **/ (root)**, then click **Save**.
6. Wait for the Pages deployment to complete. GitHub displays your site URL on the same page, typically `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.
7. Add your real canonical URL and `og:url` to the HTML head. They are intentionally omitted until the final URL is known.

No deployment has been performed by this project. All internal URLs are relative, so repository subpaths work.

## Customize

- Replace `assets/resume/alireza-borji-resume.pdf` to update the downloadable and viewable resume.
- Edit `portfolio` in `js/main.js` to update categorized skills, projects and experience. Project `github` and `demo` values are null where no URL was supplied; add verified URLs to show the links.
- The `image` field is reserved for future product photography. To display photographs, replace the `.project-art` rendering with an image using meaningful alt text and `loading="lazy"`.
- Set the LinkedIn placeholder (`YOUR_LINKEDIN_URL`) in `index.html` once the URL is known. The current placeholder is text rather than a broken link.
- Company name transliterations can be updated to their official English spellings. Dates retain the Solar Hijri calendar used in the resume, avoiding unsupported Gregorian precision.
- Change CSS variables in `css/style.css` to customize the palette.
- Persian is the default at `index.html` (`lang="fa"`, `dir="rtl"`); English is at `en.html` (`lang="en"`, `dir="ltr"`). The header language link switches between them. Both pages work directly from disk and share the same resume.
- Update static content in both HTML pages; translate dynamic content in `js/fa.js`. Technical names and protocols keep their standard Latin spelling. Both pages share `js/main.js`, styles, filtering and mobile navigation.

## Content and privacy

Public contact information and the full resume are included as requested. No age, marital status or street address is repeated on the website. The original downloadable PDF retains its original contents. Public repository source and demo links were not supplied for the projects, and none have been invented.

## License

No open-source license has been selected. Personal resume, identity and content remain the owner's. Add an appropriate LICENSE file before offering the code under an open-source license.
