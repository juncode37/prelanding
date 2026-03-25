# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static pre-landing page (прелендинг) for a women's fashion buyer service ("Fashion Hub"), designed for Yandex Direct ad traffic. No build system — plain HTML/CSS/JS opened directly in a browser.

## Architecture

Single-page layout (`index.html`) with supporting legal pages under `pages/`. CSS is split into three layers:

- `css/base.css` — CSS variables (theme tokens), reset, typography, shared utilities (`.section`, `.reveal`, `.divider`)
- `css/components.css` — UI components (buttons, cards, stat-cards, pull-quote, etc.)
- `css/layout.css` — section-level layout (hero, footer, final-cta, terms-block, multi-info grid)

`js/main.js` handles scroll-reveal via `IntersectionObserver` (adds `.visible` to `.reveal` elements) and stubs for Yandex.Metrika goal tracking.

## Key Placeholders to Replace Before Going Live

- `https://ВАШ-МАГАЗИН.ru` — shop URL with UTM params (3 occurrences in `index.html`)
- Yandex.Metrika counter ID `XXXXXXXX` — in the commented-out `<script>` block in `<head>` and in `main.js`
- Phone/email in footer: `+7 (000) 123-45-67` / `info@example.ru`

## CSS Conventions

All theme values are CSS custom properties in `:root` inside `base.css`. Modify colors and spacing there rather than inline. Key tokens: `--rose`, `--gold`, `--bg`, `--text-body`, `--max-width` (720px), `--section-pad-y/x`.

## Legal / Ad-labeling

The `.ad-label` banner at top of page is required by Russian advertising law (ФЗ «О Рекламе»). The `pages/` directory contains: `privacy.html`, `terms.html`, `oferta.html`, `contacts.html`, `advertiser.html`.
