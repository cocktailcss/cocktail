# 🍸 Cocktail
[![npm version](https://img.shields.io/npm/v/cocktailcss.svg)](https://www.npmjs.com/package/cocktailcss)

<br />

* [What is Cocktail](#what-is-cocktail)
* [Difference from others](#difference-from-others)
* [Getting started](#getting-started)
  * [CDN](#cdn)
  * [Download](#download)
  * [NPM](#npm)
  * [Source](#source)
* [Docs](#docs)
  * [Breakpoints](#breakpoints)
  * [📗 Contents](#contents)
* [License](#license)

<br />

# What is Cocktail

Cocktail is a helper set of CSS utility classes for most frequently used styles. It's modular, human-readable and easy to use as building blocks for your layout, elements spacing, text alignment, etc.

Provided styles are well enough for most basic styling use cases. It helps you develop much faster if you don't aim for pixel perfect design.

- Standalone with no dependencies  
- Flexbox and 12-column grid  
- `rem` units for scalable layouts
- No `!important` rules
- Mobile-first breakpoints where it matters
- `6.61 kB` gziped

<br />

# Difference from others

Tools like [Tachyons](https://tachyons.io/), [Tailwind](https://tailwindcss.com/), [Basscss](http://basscss.com/) and [Blueprint](https://blueprintcss.io/) provide great functionality with similar approach. But they might be quite overwhelming and bloated with redunant or rarely used styles, old-fashion tweaks like clearfixes, float grids, etc. Also they are known for violating simple CSS class name conventions, making them hard to read and impossible to use with some tools (e.g. [Pug](https://github.com/pugjs/pug) templating).

Cocktail aims for modern standard. It utilizes most frequently used styles and adheres [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle to create a solid ground for basic styling. The rest you can (and should) write on your own.

<br />

# Getting started

Link Cocktail CSS stylesheet in your project before all other stylesheets with one of the options below. Next you might refer to [docs](#docs) for classes usage details.

## CDN

The latest minified production ready stylesheet is available via https://unpkg.com/cocktailcss:
```html
<head>
  <link rel="stylesheet" href="https://unpkg.com/cocktailcss">
</head>
```
## Download
Download [`cocktail.css`](https://raw.githubusercontent.com/lyutkin/cocktailcss/master/cocktail.css) or minified production ready [`cocktail.min.css`](https://raw.githubusercontent.com/lyutkin/cocktailcss/master/cocktail.min.css). Put it in your project and link to it:
```html
<head>
  <link rel="stylesheet" href="style/cocktail.min.css">
</head>
```

## NPM
Install package with `npm install cocktailcss`.

<br />

## Source

Cocktail is built with [Sass (SCSS)](https://sass-lang.com/) and [Gulp](https://gulpjs.com/). You can customize your build the way you want. First, clone repository and install dependencies:
```bash
git clone https://github.com/lyutkin/cocktailcss.git
cd cocktailcss
npm install
```

Run `npm start` to start gulp task watcher. It will watch for `.scss` files changes and update `cocktail.css` and `cocktail.min.css`.

<br />

# Docs

## Breakpoints

Classes that support mobile-first breakpoints are marked with :heavy_check_mark: symbol in `Breakpoint support` table column. These classes might have a specific suffix to enable style at given breakpoint.

| Device  | Suffix | Media query  |
| - | - | - |
| Smartphone | `sm` | `@media screen and (min-width: 576px)` |
| Tablet | `md` | `@media screen and (min-width: 768px)` |
| Netbook | `lg` | `@media screen and (min-width: 992px)` |
| Notebook | `xl` | `@media screen and (min-width: 1200px)` |
| Desktop | `xxl` | `@media screen and (min-width: 1600px)` |

<br />

Usage examples:

| Class  | Description |
| - | - |
| `flex--xxl` | `1600px` and above set `display: flex`  |
| `hidden--md` | `768px` and above set `display: none`  |
| `text-left--lg` | `992px` and above set `text-align: left`  |

<br />

## Contents

| Flow | Spacing | Appearance | Text |
| - | - | - | - |
| [Display](#display)<br />[Flex](#flex)<br />[Grid](#grid)<br />[Overflow](#overflow)<br />[Position](#position)<br />[Z-index](#z-index)<br />[Float](#float)<br />[Trigger](#trigger) | [Width](#width)<br />[Height](#height)<br />[Margin](#margin)<br />[Padding](#padding) | [Border](#border)<br />[Background](#background)<br />[Cursor](#cursor) | [Font](#font)<br />[Text](#text)<br />[Color](#color)<br /> |

<br />

### Display
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `block` | `display: block` | :heavy_check_mark: |
| `inline-block` | `display: inline-block` | :heavy_check_mark: |
| `inline` | `display: inline` | :heavy_check_mark: |
| `flex` | `display: flex` | :heavy_check_mark: |
| `inline-flex` | `display: inline-flex` | :heavy_check_mark: |
| `grid` | `display: grid`<br />`grid-template-columns: repeat(12, 1fr)` | :heavy_check_mark: |
| `hidden` | `display: none` | :heavy_check_mark: |

<br />

### Flex
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `justify-start` | `justify-content: flex-start` | :heavy_check_mark: |
| `justify-end` | `justify-content: flex-end` | :heavy_check_mark: |
| `justify-center` | `justify-content: center` | :heavy_check_mark: |
| `justify-between` | `justify-content: space-between` | :heavy_check_mark: |
| `justify-around` | `justify-content: space-around` | :heavy_check_mark: |
| | | |
| `items-start` | `align-items: flex-start` | :heavy_check_mark: |
| `items-end` | `align-items: flex-end` | :heavy_check_mark: |
| `items-center` | `align-items: center` | :heavy_check_mark: |
| `items-baseline` | `align-items: baseline` | :heavy_check_mark: |
| `items-stretch` | `align-items: stretch` | :heavy_check_mark: |
| | | |
| `flex-column` | `flex-direction: column` | :heavy_check_mark: |
| `flex-row` | `flex-direction: row` | :heavy_check_mark: |
| `flex-wrap` | `flex-wrap: wrap` | :heavy_check_mark: |
| `flex-nowrap` | `flex-wrap: nowrap` | :heavy_check_mark: |
| `flex-wrap-reverse` | `flex-wrap: wrap-reverse` | :heavy_check_mark: |
| `flex-column-reverse` | `flex-direction: column-reverse` | :heavy_check_mark: |
| `flex-row-reverse` | `flex-direction: row-reverse` | :heavy_check_mark: |
| | | |
| `flex-no-grow` | `flex-grow: 0` | :heavy_check_mark: |
| `flex-grow` | `flex-grow: 1` | :heavy_check_mark: |
| `flex-no-shrink` | `flex-shrink: 0` | :heavy_check_mark: |
| `flex-shrink` | `flex-shrink: 1` | :heavy_check_mark: |
| `flex-basis-auto` | `flex-basis: auto` | :heavy_check_mark: |
| `flex-no-basis` | `flex-basis: 0` | :heavy_check_mark: |

<br />

### Grid
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `grid-column-1` | `grid-column: span 1 / span 1` | :heavy_check_mark: |
| `grid-column-2` | `grid-column: span 2 / span 2` | :heavy_check_mark: |
| `grid-column-3` | `grid-column: span 3 / span 3` | :heavy_check_mark: |
| `grid-column-4` | `grid-column: span 4 / span 4` | :heavy_check_mark: |
| `grid-column-5` | `grid-column: span 5 / span 5` | :heavy_check_mark: |
| `grid-column-6` | `grid-column: span 6 / span 6` | :heavy_check_mark: |
| `grid-column-7` | `grid-column: span 7 / span 7` | :heavy_check_mark: |
| `grid-column-8` | `grid-column: span 8 / span 8` | :heavy_check_mark: |
| `grid-column-9` | `grid-column: span 9 / span 9` | :heavy_check_mark: |
| `grid-column-10` | `grid-column: span 10 / span 10` | :heavy_check_mark: |
| `grid-column-11` | `grid-column: span 11 / span 11` | :heavy_check_mark: |
| `grid-column-12` | `grid-column: span 12 / span 12` | :heavy_check_mark: |
| | | |
| `grid-column-start-1` | `grid-column-start: 1` | :heavy_check_mark: |
| `grid-column-start-2` | `grid-column-start: 2` | :heavy_check_mark: |
| `grid-column-start-3` | `grid-column-start: 3` | :heavy_check_mark: |
| `grid-column-start-4` | `grid-column-start: 4` | :heavy_check_mark: |
| `grid-column-start-5` | `grid-column-start: 5` | :heavy_check_mark: |
| `grid-column-start-6` | `grid-column-start: 6` | :heavy_check_mark: |
| `grid-column-start-7` | `grid-column-start: 7` | :heavy_check_mark: |
| `grid-column-start-8` | `grid-column-start: 8` | :heavy_check_mark: |
| `grid-column-start-9` | `grid-column-start: 9` | :heavy_check_mark: |
| `grid-column-start-10` | `grid-column-start: 10` | :heavy_check_mark: |
| `grid-column-start-11` | `grid-column-start: 11` | :heavy_check_mark: |
| `grid-column-start-12` | `grid-column-start: 12` | :heavy_check_mark: |
| | | |
| `grid-column-gap-0` | `grid-column-gap: 0` | :heavy_check_mark: |
| `grid-column-gap-1` | `grid-column-gap: 0.25rem` | :heavy_check_mark: |
| `grid-column-gap-2` | `grid-column-gap: 0.5rem` | :heavy_check_mark: |
| `grid-column-gap-3` | `grid-column-gap: 1rem` | :heavy_check_mark: |
| `grid-column-gap-4` | `grid-column-gap: 2rem` | :heavy_check_mark: |
| `grid-column-gap-5` | `grid-column-gap: 3rem` | :heavy_check_mark: |
| `grid-column-gap-6` | `grid-column-gap: 4rem` | :heavy_check_mark: |
| `grid-column-gap-7` | `grid-column-gap: 5rem` | :heavy_check_mark: |
| | | |
| `grid-row-gap-0` | `grid-row-gap: 0` | :heavy_check_mark: |
| `grid-row-gap-1` | `grid-row-gap: 0.25rem` | :heavy_check_mark: |
| `grid-row-gap-2` | `grid-row-gap: 0.5rem` | :heavy_check_mark: |
| `grid-row-gap-3` | `grid-row-gap: 1rem` | :heavy_check_mark: |
| `grid-row-gap-4` | `grid-row-gap: 2rem` | :heavy_check_mark: |
| `grid-row-gap-5` | `grid-row-gap: 3rem` | :heavy_check_mark: |
| `grid-row-gap-6` | `grid-row-gap: 4rem` | :heavy_check_mark: |
| `grid-row-gap-7` | `grid-row-gap: 5rem` | :heavy_check_mark: |
| | | |
| `grid-gap-0` | `grid-gap: 0` | :heavy_check_mark: |
| `grid-gap-1` | `grid-gap: 0.25rem` | :heavy_check_mark: |
| `grid-gap-2` | `grid-gap: 0.5rem` | :heavy_check_mark: |
| `grid-gap-3` | `grid-gap: 1rem` | :heavy_check_mark: |
| `grid-gap-4` | `grid-gap: 2rem` | :heavy_check_mark: |
| `grid-gap-5` | `grid-gap: 3rem` | :heavy_check_mark: |
| `grid-gap-6` | `grid-gap: 4rem` | :heavy_check_mark: |
| `grid-gap-7` | `grid-gap: 5rem` | :heavy_check_mark: |

<br />

### Overflow
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `overflow-hidden` | `overflow: hidden` | :heavy_check_mark: |
| `overflow-auto` | `overflow: auto` | :heavy_check_mark: |

<br />

### Position
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `relative` | `position: relative` | :heavy_check_mark: |
| `absolute` | `position: absolute` | :heavy_check_mark: |
| `fixed` | `position: fixed` | :heavy_check_mark: |
| | | |
| `top-0` | `top: 0` | :heavy_check_mark: |
| `right-0` | `right: 0` | :heavy_check_mark: |
| `bottom-0` | `bottom: 0` | :heavy_check_mark: |
| `left-0` | `left: 0` | :heavy_check_mark: |
| | | |
| `top-full` | `top: 100%` | :heavy_check_mark: |
| `right-full` | `right: 100%` | :heavy_check_mark: |
| `bottom-full` | `bottom: 100%` | :heavy_check_mark: |
| `left-full` | `left: 100%` | :heavy_check_mark: |
| | | |
| `fill` | `top: 0`<br />`right: 0`<br />`bottom: 0`<br />`left: 0` | :heavy_check_mark: |
| | | |
| `center-x` | `left: 50%`<br />`transform: translateX(-50%)` | :heavy_check_mark: |
| `center-y` | `top: 50%`<br />`transform: translateY(-50%)` | :heavy_check_mark: |
| `center` | `top: 50%`<br />`left: 50%`<br />`transform: translate(-50%, -50%)` | :heavy_check_mark: |

<br />

### Z-index
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `z-index-1` | `z-index: 1` | :x: |
| `z-index-2` | `z-index: 2` | :x: |
| `z-index-3` | `z-index: 3` | :x: |

<br />

### Float
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `float-left` | `float: left` | :x: |
| `float-right` | `float: right` | :x: |

<br />

### Trigger
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `toggle-trigger` | Toggle display for `toggle-content` general sibling <sup>1</sup> | :x: |
| `hover-trigger` | Hover display for `hover-content` child <sup>2</sup> | :x: |

```css
/*1*/
.toggle-trigger:checked ~ .toggle-content {
  display: block;
}
```

```css
/*2*/
.hover-trigger:hover .hover-content,
.hover-trigger:focus .hover-content {
  display: block;
}
```

<br />

### Width
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `max-width-full` | `max-width: 100%` | :heavy_check_mark: |
| `min-width-full` | `min-width: 100%` | :heavy_check_mark: |
| `width-full` | `width: 100%` | :heavy_check_mark: |
| `width-auto` | `width: auto` | :heavy_check_mark: |

<br />

### Height
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `max-height-full` | `max-height: 100%` | :heavy_check_mark: |
| `min-height-full` | `min-height: 100%` | :heavy_check_mark: |
| `height-full` | `height: 100%` | :heavy_check_mark: |

<br />

### Margin
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `margin-top-0` | `margin-top: 0` | :heavy_check_mark: |
| `margin-top-1` | `margin-top: 0.25rem` | :heavy_check_mark: |
| `margin-top-2` | `margin-top: 0.5rem` | :heavy_check_mark: |
| `margin-top-3` | `margin-top: 1rem` | :heavy_check_mark: |
| `margin-top-4` | `margin-top: 2rem` | :heavy_check_mark: |
| `margin-top-5` | `margin-top: 4rem` | :heavy_check_mark: |
| `margin-top-6` | `margin-top: 8rem` | :heavy_check_mark: |
| | | |
| `margin-right-0` | `margin-right: 0` | :heavy_check_mark: |
| `margin-right-1` | `margin-right: 0.25rem` | :heavy_check_mark: |
| `margin-right-2` | `margin-right: 0.5rem` | :heavy_check_mark: |
| `margin-right-3` | `margin-right: 1rem` | :heavy_check_mark: |
| `margin-right-4` | `margin-right: 2rem` | :heavy_check_mark: |
| `margin-right-5` | `margin-right: 4rem` | :heavy_check_mark: |
| `margin-right-6` | `margin-right: 8rem` | :heavy_check_mark: |
| | | |
| `margin-bottom-0` | `margin-bottom: 0` | :heavy_check_mark: |
| `margin-bottom-1` | `margin-bottom: 0.25rem` | :heavy_check_mark: |
| `margin-bottom-2` | `margin-bottom: 0.5rem` | :heavy_check_mark: |
| `margin-bottom-3` | `margin-bottom: 1rem` | :heavy_check_mark: |
| `margin-bottom-4` | `margin-bottom: 2rem` | :heavy_check_mark: |
| `margin-bottom-5` | `margin-bottom: 4rem` | :heavy_check_mark: |
| `margin-bottom-6` | `margin-bottom: 8rem` | :heavy_check_mark: |
| | | |
| `margin-left-0` | `margin-left: 0` | :heavy_check_mark: |
| `margin-left-1` | `margin-left: 0.25rem` | :heavy_check_mark: |
| `margin-left-2` | `margin-left: 0.5rem` | :heavy_check_mark: |
| `margin-left-3` | `margin-left: 1rem` | :heavy_check_mark: |
| `margin-left-4` | `margin-left: 2rem` | :heavy_check_mark: |
| `margin-left-5` | `margin-left: 4rem` | :heavy_check_mark: |
| `margin-left-6` | `margin-left: 8rem` | :heavy_check_mark: |
| | | |
| `margin-x-0` | `margin-left: 0`<br />`margin-right: 0` | :heavy_check_mark: |
| `margin-x-1` | `margin-left: 0.25rem`<br />`margin-right: 0.25rem` | :heavy_check_mark: |
| `margin-x-2` | `margin-left: 0.5rem`<br />`margin-right: 0.5rem` | :heavy_check_mark: |
| `margin-x-3` | `margin-left: 1rem`<br />`margin-right: 1rem` | :heavy_check_mark: |
| `margin-x-4` | `margin-left: 2rem`<br />`margin-right: 2rem` | :heavy_check_mark: |
| `margin-x-5` | `margin-left: 4rem`<br />`margin-right: 4rem` | :heavy_check_mark: |
| `margin-x-6` | `margin-left: 8rem`<br />`margin-right: 8rem` | :heavy_check_mark: |
| | | |
| `margin-y-0` | `margin-top: 0`<br />`margin-bottom: 0` | :heavy_check_mark: |
| `margin-y-1` | `margin-top: 0.25rem`<br />`margin-bottom: 0.25rem` | :heavy_check_mark: |
| `margin-y-2` | `margin-top: 0.5rem`<br />`margin-bottom: 0.5rem` | :heavy_check_mark: |
| `margin-y-3` | `margin-top: 1rem`<br />`margin-bottom: 1rem` | :heavy_check_mark: |
| `margin-y-4` | `margin-top: 2rem`<br />`margin-bottom: 2rem` | :heavy_check_mark: |
| `margin-y-5` | `margin-top: 4rem`<br />`margin-bottom: 4rem` | :heavy_check_mark: |
| `margin-y-6` | `margin-top: 8rem`<br />`margin-bottom: 8rem` | :heavy_check_mark: |
| | | |
| `margin-0` | `margin-top: 0`<br />`margin-right: 0`<br />`margin-bottom: 0`<br/>`margin-left: 0` | :heavy_check_mark: |
| `margin-1` | `margin-top: 0.25rem`<br />`margin-right: 0.25rem`<br />`margin-bottom: 0.25rem`<br/>`margin-left: 0.25rem` | :heavy_check_mark: |
| `margin-2` | `margin-top: 0.5rem`<br />`margin-right: 0.5rem`<br />`margin-bottom: 0.5rem`<br/>`margin-left: 0.5rem` | :heavy_check_mark: |
| `margin-3` | `margin-top: 1rem`<br />`margin-right: 1rem`<br />`margin-bottom: 1rem`<br/>`margin-left: 1rem` | :heavy_check_mark: |
| `margin-4` | `margin-top: 2rem`<br />`margin-right: 2rem`<br />`margin-bottom: 2rem`<br/>`margin-left: 2rem` | :heavy_check_mark: |
| `margin-5` | `margin-top: 4rem`<br />`margin-right: 4rem`<br />`margin-bottom: 4rem`<br/>`margin-left: 4rem` | :heavy_check_mark: |
| `margin-6` | `margin-top: 8rem`<br />`margin-right: 8rem`<br />`margin-bottom: 8rem`<br/>`margin-left: 8rem` | :heavy_check_mark: |
| | | |
| `margin-x-auto` | `margin-left: auto`<br />`margin-right: auto` | :heavy_check_mark: |
| `margin-y-auto` | `margin-top: auto`<br />`margin-bottom: auto` | :heavy_check_mark: |

<br />

### Padding
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `padding-top-0` | `padding-top: 0` | :heavy_check_mark: |
| `padding-top-1` | `padding-top: 0.25rem` | :heavy_check_mark: |
| `padding-top-2` | `padding-top: 0.5rem` | :heavy_check_mark: |
| `padding-top-3` | `padding-top: 1rem` | :heavy_check_mark: |
| `padding-top-4` | `padding-top: 2rem` | :heavy_check_mark: |
| `padding-top-5` | `padding-top: 4rem` | :heavy_check_mark: |
| `padding-top-6` | `padding-top: 8rem` | :heavy_check_mark: |
| | | |
| `padding-right-0` | `padding-right: 0` | :heavy_check_mark: |
| `padding-right-1` | `padding-right: 0.25rem` | :heavy_check_mark: |
| `padding-right-2` | `padding-right: 0.5rem` | :heavy_check_mark: |
| `padding-right-3` | `padding-right: 1rem` | :heavy_check_mark: |
| `padding-right-4` | `padding-right: 2rem` | :heavy_check_mark: |
| `padding-right-5` | `padding-right: 4rem` | :heavy_check_mark: |
| `padding-right-6` | `padding-right: 8rem` | :heavy_check_mark: |
| | | |
| `padding-bottom-0` | `padding-bottom: 0` | :heavy_check_mark: |
| `padding-bottom-1` | `padding-bottom: 0.25rem` | :heavy_check_mark: |
| `padding-bottom-2` | `padding-bottom: 0.5rem` | :heavy_check_mark: |
| `padding-bottom-3` | `padding-bottom: 1rem` | :heavy_check_mark: |
| `padding-bottom-4` | `padding-bottom: 2rem` | :heavy_check_mark: |
| `padding-bottom-5` | `padding-bottom: 4rem` | :heavy_check_mark: |
| `padding-bottom-6` | `padding-bottom: 8rem` | :heavy_check_mark: |
| | | |
| `padding-left-0` | `padding-left: 0` | :heavy_check_mark: |
| `padding-left-1` | `padding-left: 0.25rem` | :heavy_check_mark: |
| `padding-left-2` | `padding-left: 0.5rem` | :heavy_check_mark: |
| `padding-left-3` | `padding-left: 1rem` | :heavy_check_mark: |
| `padding-left-4` | `padding-left: 2rem` | :heavy_check_mark: |
| `padding-left-5` | `padding-left: 4rem` | :heavy_check_mark: |
| `padding-left-6` | `padding-left: 8rem` | :heavy_check_mark: |
| | | |
| `padding-x-0` | `padding-left: 0`<br />`padding-right: 0` | :heavy_check_mark: |
| `padding-x-1` | `padding-left: 0.25rem`<br />`padding-right: 0.25rem` | :heavy_check_mark: |
| `padding-x-2` | `padding-left: 0.5rem`<br />`padding-right: 0.5rem` | :heavy_check_mark: |
| `padding-x-3` | `padding-left: 1rem`<br />`padding-right: 1rem` | :heavy_check_mark: |
| `padding-x-4` | `padding-left: 2rem`<br />`padding-right: 2rem` | :heavy_check_mark: |
| `padding-x-5` | `padding-left: 4rem`<br />`padding-right: 4rem` | :heavy_check_mark: |
| `padding-x-6` | `padding-left: 8rem`<br />`padding-right: 8rem` | :heavy_check_mark: |
| | | |
| `padding-y-0` | `padding-top: 0`<br />`padding-bottom: 0` | :heavy_check_mark: |
| `padding-y-1` | `padding-top: 0.25rem`<br />`padding-bottom: 0.25rem` | :heavy_check_mark: |
| `padding-y-2` | `padding-top: 0.5rem`<br />`padding-bottom: 0.5rem` | :heavy_check_mark: |
| `padding-y-3` | `padding-top: 1rem`<br />`padding-bottom: 1rem` | :heavy_check_mark: |
| `padding-y-4` | `padding-top: 2rem`<br />`padding-bottom: 2rem` | :heavy_check_mark: |
| `padding-y-5` | `padding-top: 4rem`<br />`padding-bottom: 4rem` | :heavy_check_mark: |
| `padding-y-6` | `padding-top: 8rem`<br />`padding-bottom: 8rem` | :heavy_check_mark: |
| | | |
| `padding-0` | `padding-top: 0`<br />`padding-right: 0`<br />`padding-bottom: 0`<br/>`padding-left: 0` | :heavy_check_mark: |
| `padding-1` | `padding-top: 0.25rem`<br />`padding-right: 0.25rem`<br />`padding-bottom: 0.25rem`<br/>`padding-left: 0.25rem` | :heavy_check_mark: |
| `padding-2` | `padding-top: 0.5rem`<br />`padding-right: 0.5rem`<br />`padding-bottom: 0.5rem`<br/>`padding-left: 0.5rem` | :heavy_check_mark: |
| `padding-3` | `padding-top: 1rem`<br />`padding-right: 1rem`<br />`padding-bottom: 1rem`<br/>`padding-left: 1rem` | :heavy_check_mark: |
| `padding-4` | `padding-top: 2rem`<br />`padding-right: 2rem`<br />`padding-bottom: 2rem`<br/>`padding-left: 2rem` | :heavy_check_mark: |
| `padding-5` | `padding-top: 4rem`<br />`padding-right: 4rem`<br />`padding-bottom: 4rem`<br/>`padding-left: 4rem` | :heavy_check_mark: |
| `padding-6` | `padding-top: 8rem`<br />`padding-right: 8rem`<br />`padding-bottom: 8rem`<br/>`padding-left: 8rem` | :heavy_check_mark: |

<br />

### Border
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `border-round` | `border-radius: 100%` | :x: |
| `border-rounded-1` | `border-radius: 0.125rem` | :x: |
| `border-rounded-2` | `border-radius: 0.25rem` | :x: |
| `border-rounded-3` | `border-radius: 0.5rem` | :x: |
| `border-rounded-max` | `border-radius: 9999px` | :x: |

<br />

### Background
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `bg-center` | `background-position: center center` | :x: |
| `bg-top` | `background-position: center top` | :x: |
| `bg-right` | `background-position: right center` | :x: |
| `bg-bottom` | `background-position: center bottom` | :x: |
| `bg-left` | `background-position: left center` | :x: |
| | | |
| `bg-cover` | `background-size: cover` | :x: |
| `bg-contain` | `background-size: contain` | :x: |
| `bg-width-full` | `background-size: 100% auto` | :x: |
| `bg-height-full` | `background-size: auto 100%` | :x: |
| | | |
| `bg-no-repeat` | `background-repeat: no-repeat` | :x: |
| | | |
| `bg-fixed` | `background-attachment: fixed` | :x: |
| | | |
| `bg-white` | `background-color: white` | :x: |

<br />

### Cursor
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `cursor-default` | `cursor: default` | :x: |
| `cursor-pointer` | `cursor: pointer` | :x: |
| `cursor-wait` | `cursor: wait` | :x: |
| `cursor-progress` | `cursor: progress` | :x: |
| `cursor-not` | `cursor: not-allowed` | :x: |
| `cursor-help` | `cursor: help` | :x: |
| `cursor-zoom-in` | `cursor: zoom-in` | :x: |
| | | |
| `no-select` | `user-select: none` | :x: |
| `no-pointer-events` | `pointer-events: none` | :x: |

<br />

### Font
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `font-xs` | `font-size: 0.75rem` | :heavy_check_mark: |
| `font-sm` | `font-size: 0.875rem` | :heavy_check_mark: |
| `font-nl` | `font-size: 1rem` | :heavy_check_mark: |
| `font-lg` | `font-size: 1.25rem` | :heavy_check_mark: |
| `font-xl` | `font-size: 1.5rem` | :heavy_check_mark: |
| `font-2xl` | `font-size: 1.875rem` | :heavy_check_mark: |
| `font-3xl` | `font-size: 2.25rem` | :heavy_check_mark: |
| `font-4xl` | `font-size: 3rem` | :heavy_check_mark: |
| `font-5xl` | `font-size: 4rem` | :heavy_check_mark: |
| | | |
| `font-light` | `font-weight: 300` | :x: |
| `font-normal` | `font-weight: normal` | :x: |
| `font-medium` | `font-weight: 500` | :x: |
| `font-bold` | `font-weight: bold` | :x: |
| `font-black` | `font-weight: 900` | :x: |
| | | |
| `font-italic` | `font-style: italic` | :x: |

<br />

### Text
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `text-center` | `text-align: center` | :heavy_check_mark: |
| `text-left` | `text-align: left` | :heavy_check_mark: |
| `text-right` | `text-align: right` | :heavy_check_mark: |
| | | |
| `text-top` | `vertical-align: top` | :x: |
| `text-middle` | `vertical-align: middle` | :x: |
| `text-bottom` | `vertical-align: bottom` | :x: |
| `text-baseline` | `vertical-align: baseline` | :x: |
| | | |
| `text-nowrap` | `white-space: nowrap` | :x: |
| `text-break` | `word-break: break-all` | :x: |
| `text-dots` | `text-overflow: ellipsis` | :x: |
| | | |
| `text-tight` | `line-height: 1.25` | :x: |
| `text-average` | `line-height: 1.5` | :x: |
| `text-loose` | `line-height: 2` | :x: |
| | | |
| `text-upper` | `text-transform: uppercase` | :x: |
| `text-lower` | `text-transform: lowercase` | :x: |
| | | |
| `no-list` | `list-style: none` | :x: |

<br />

### Color
[↑ Back to contents](#contents)

| Class  | Style  | Breakpoint support |
| - | - | :-: |
| `color-white` | `color: white` | :x: |
| `color-black` | `color: black` | :x: |

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
