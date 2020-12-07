# youtube-search

![Imgur](https://i.imgur.com/NV9ZoAR.png)
![Imgur](https://i.imgur.com/arXd4PW.png)

## Getting Started

### Installation

```bash
yarn
```

### Run the project

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo

Here is a working live demo : https://youtube-search.vercel.app

## Technologies

- React
- Redux
- TypeScript
- styled-components
- Responsive Web Design
- Infinite Scroll

#### Tools

- ESLint
- Prettier

## Features

#### Strongly Typed JavaScript

Using `TypeScript` to save time for catching errors and providing fixes before you run code.

#### Ensuring Code Quality and Keep Style Consistent

Using `ESLint` and `Prettier` as the code linter and formatter to enforces a consistent style, find and fix problems.

#### Infinite Scroll

Infinite scrolling is a web-design technique that loads content continuously as the user scrolls down the page, eliminating the need for pagination. Using `Intersection Observer API` under the hood, rather than constantly checking the distance from the top.

## Description

1. Enter some `keywords` in the search box to get the relative video results from YouTube
2. You can `see` a collection of search results that match the keywords
3. Scroll down to load more videos without pagination for a better `browsing experience`
4. `Cache` the previous results into redux, so there is no need to fetch the same result again
