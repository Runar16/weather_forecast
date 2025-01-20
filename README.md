## ➤ Prerequisites

- [Node.js](https://nodejs.org/en/)

## ➤ Technology

This project uses the following technology

- [React](https://reactjs.org/) A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org) A React framework
- [Create Next App](https://nextjs.org/docs/app/api-reference/cli/create-next-app) Create Next.js app using the default template
- [Tailwindcss](https://tailwindcss.com) A utility-first CSS framework.
- [Typescript](https://www.typescriptlang.org/) Types added to Javascript.
- [HeroUI](https://www.chartjs.org/) Table and dropdown component
- [Cypress](https://www.cypress.io/) e2e testing

## ➤ How to run

You need to have Node.js npm or something equivalent. If you don't you can find instructions on how to get it here https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run cypress tests:

```bash
npm install
npm run dev
npm run cy:open
```

## ➤ Code

I used create next app to start off with a template.
HeroUI to create the dropdown and table components with some modifications for my use cases.
Tailwind for the css.
The communication with the [vedur.is api](https://www.vedur.is/um-vi/vefurinn/xml/) is done in app/lib/data.ts. 
The app/page.tsx is run server side while the components found in app/ui are run client side.

## ➤ Assumptions and design decisions 

I used Nextjs since it seemed relatively quick and simple to use.

The biggest issue I encountered was since you can only get the weather forecast by station id I needed a way to get all the stations and their ID. Since the vedur API doesn't have an endpoint get the stations ID I started to look at ways to scrape it from their website, but the more I thought about it it would be better to just allow selecting some of the most common ones to avoid cluttering the UI with alot of weather stations that are rarely used. So I just picked one station for each [part of the country](https://en.wikipedia.org/wiki/Regions_of_Iceland) and manually created the public/stations.json file. This obviously is not an ideal solution since the stations could change and if that were to happen I would need to manually update the stations.json.

I used the URL to access what weather station was selected like it is done in the [NextJS tutorial](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination).

I made the site in english since the project description I received was in english.

## ➤ Known issues/bugs

Double clicking an item in the dropdown makes the dropdown not display anything but the table still works.

It's rebuilding more often than needed in some cases

## ➤ Areas for Future Consideration

Contact vedur.is and ask them how they would recommend solving this issue of getting their station ids programmatically.

Add a way to select between icelandic and english

Use images rather than description since each description has a corresponding image found [here](https://www.vedur.is/vedur/frodleikur/greinar/nr/748) and maybe also do the same for wind direction.

Write more test cases

Add a way to select between dark and light mode
