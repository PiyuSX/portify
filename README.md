# Portify

![Portify](https://user-cdn.hackclub-assets.com/01a1d8dd-07b3-7425-a57f-8d58b844000b/journal-1794639725610.png)

A place to find a portfolio template for yourself.

Portify is a portfolio template library where you can pick a template, add your own info and show your work to the world. The idea is pretty simple: you dont need to code a whole website from scratch just to show what you build.

## What I'm building

- A growing library of portfolio templates
- Every template is made with Next.js and Tailwind CSS
- All the info stays in one data file so no need to dig in components
- Dark and light mode
- Easy deploy on Vercel

I'm still working on it, so some parts may change as the project grows.

##How it works -Every template lives in its own folder.Inside it theres a data file where you put your name, bio, skills, projects and socials, we call it the data.js. Once you edit it the whole site changes automaticaly and you just add your own images in the public folder and its ready to deploy.

#Templates -template1 is the first one, a minimal portfolio with projects, skills, github activity, reels and a contact section -More templates coming soon

#Future plans -Add more templates -Add more customization options -Add live preview for every template -Add a simple guide for deploying

## Built with

- Next.js
- React
- Tailwind CSS
- react-icons
- react-github-calendar

## Running locally

Clone the repository:

```
git clone https://github.com/PiyuSX/portify.git
cd portify
```

Go inside the template you want Then

```
cd template1
npm install
npm run dev
```

Open http://localhost:3000 in your browser and its done.

You'll also need to change the data in the data.js file for your own setup. Also if you use images from other sites like github, add the host in next.config.mjs or next/image will give error.

## Status

Portify is a work in progress. I'm building it step by step and figuring things out along the way.

## License

MIT Licence
