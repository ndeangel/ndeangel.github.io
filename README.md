# ndeangel.github.io

Personal website of Nicolas De Angelis: a one-page [Jekyll](https://jekyllrb.com/) site published with
GitHub Pages (built on the [Particle](https://github.com/nrandecker/particle) theme, heavily modified).

## Where to edit what

| What | Where |
|---|---|
| Name, tagline, bio, e-mail, GitHub user, phone icon, site URL | `_config.yml` |
| Education & Experience (timeline cards) | `_data/timeline.yml` |
| "Code" and "Software" logos | `_data/software.yml` (put the image in `assets/img/`) |
| Research projects | `_includes/projects.html` |
| Publications and talks (one `<details>` block per year) | `_includes/publications_talks.html` |
| Teaching & outreach | `_includes/teaching.html` |
| Slides, posters and CV (PDF) | `docs/` |
| Page skeleton, `<head>`, SEO tags | `_layouts/`, `_includes/head.html` |
| Look and feel | `src/styles/*.scss` |
| Hero animation script | `src/js/app.js` |

Unfinished spots in the publications list are marked with `{% comment %} TODO … {% endcomment %}`.
They are invisible on the site; `grep -n TODO _includes/publications_talks.html` lists them.

## Run it locally

You need Ruby with Bundler (for Jekyll) and Node.js 18 or newer (only to compile the CSS/JS).

```sh
bundle install          # Jekyll + GitHub Pages gems (rewrites Gemfile.lock if it changed)
npm install             # sass + terser
npm run build           # src/styles -> assets/css/main.css, src/js -> assets/js/main.js
bundle exec jekyll serve --livereload      # http://127.0.0.1:4000
```

If `jekyll serve` fails on a recent Ruby, try `bundle update github-pages` first.

## CSS and JavaScript

GitHub Pages does not run npm, so the compiled `assets/css/main.css` and `assets/js/main.js` are
committed. After changing anything in `src/`, run `npm run build` and commit the regenerated files.
`npm run watch:css` recompiles the stylesheet on every save.

## Publishing

Push to the branch that GitHub Pages serves (Settings → Pages). GitHub builds the site itself; there is
no workflow file. Keep each file below 100 MiB (GitHub blocks larger ones, and warns above 50 MiB) and the
published site below 1 GB. The PDFs in `docs/` are by far the heaviest part of the repository.

## Layout of the repository

```
_config.yml  index.html  404.html  robots.txt  favicon.ico
_layouts/    default.html (home page), simple.html (404)
_includes/   head, header, about, timeline, software, projects, publications_talks, teaching, footer, scripts
_data/       timeline.yml, software.yml
src/         SCSS and JS sources (not published)
assets/      css/, js/, fonts/, img/   (compiled CSS/JS, self-hosted fonts, WebP/SVG images)
docs/        PDF slides, posters, CV
```

## Licences

The site code is MIT-licensed (see `LICENSE.txt`, theme by Nathan Randecker). Fonts, icons and scripts
bundled with the site are credited in `assets/LICENSES.txt`.
