This is a [Next.js](https://nextjs.org/) project, using the Next Pages router and a Postgres database.

## Getting Started

Follow these steps to set up the project on your local machine:

1. Start the project by running:

   ```
   docker-compose up --build
   ```

   This command will build and start all the necessary containers (frontend, backend, and database).

1. Once everything is up and running, you can access:
   - Frontend: https://port-5173--main--tab-spawn--admin.ropeshq.com/
   - Backend: https://port-3001--main--tab-spawn--admin.ropeshq.com/


1. Install dependencies:
   ```
   npm install
   ```

1. Set up your environment variables:
   - Copy the `.env.example` file to `.env.local`
   - Update the `POSTGRES_URL` in the `.env.local` file with your Postgres connection string

1. Seed the database:
   ```
   npm run seed
   ```

1. Run the development server:
   ```
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Database Connection

The project uses the `pg` package to connect to a Postgres database. The connection is set up in `lib/db.js`. Make sure your Postgres server is running and accessible with the credentials provided in your `.env.local` file.

## API Routes

The sample API route is located at `pages/api/sample.js`. It demonstrates how to query the database and return results. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Frontend

The homepage (`pages/index.js`) shows how to fetch data from the API and display it in the React component.

Good luck with your assignment!


## Reference Docs

- [Next.js](https://nextjs.org/docs)
- [Postgres client](https://node-postgres.com/features/queries)
- [Styling using Tailwind CSS](https://tailwindcss.com/docs/utility-first)