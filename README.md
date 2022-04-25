## Junior Guru

This talk was part of my presentation for [Junior Guru](https://junior.guru/)
organisation. Junior Guru is a platform for junior developers and switchers, who
wants to join IT. Creator of this club is
[Honza Javorek](https://www.instagram.com/honza.javorek/). Everybody, not only
juniors are welcome [here](https://junior.guru/club/).

## About Next.JS

[Next.js](https://nextjs.org/) is open source web framework based on
[React.js](https://reactjs.org/) library. Main features of this framework are:

1. Different types of rendering - client side, server side, pre-rendering
2. Image optimalisation
3. Font optimalisation
4. Better SEO
5. Easy routing
6. Navigating with Link component between pages

## About app

In this example of the app, we have created:

1. Page with Server Side Rendering
2. Page with Static Generation
3. Page with Incremental Static Generation
4. Routing
5. Dynamic routing
6. Next Link
7. Next Router
8. Next Head
9. Next Layout
10. Styling in CSS modules
11. Styling with Tailwind
12. Api Routes

This app is about tweeting and about chickends. Backend is supported with Prisma
ORM connected to local PostgreSQL database.

## Setup Prisma

1. Create local PostgreSQL database
2. Setup env variable to connect to the database in secret .env file with name
   DATABASE_URL
3. Run

```bash
npm install
# or
yarn install
```

4. Run

```bash
npx prisma db push
```

5. Run

```bash
npx prisma studio
```

for data manipulation 6. Run

```bash
npx prisma generate
```

## Start this project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
