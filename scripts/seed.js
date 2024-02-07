const { db } = require('@vercel/postgres');
const {
    users,
    disney_films,
    disney_animations,
    disney_series,
    marvel_films,
    marvel_series,
    starwars_films,
    starwars_series,
} = require('../app/lib/placeholder-data');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

        console.log(`Created "users" table`);

        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                INSERT INTO users (name, email, password)
                VALUES (${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedDisneyFilms(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS disney_films (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "disney_films" table`);

        const insertedDisneyFilms = await Promise.all(
            disney_films.map(
                (film) => client.sql`
                INSERT INTO disney_films (tmdb_id, title, date)
                VALUES (${film.tmdb_id}, ${film.title}, ${film.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedDisneyFilms.length} Disney films`);

        return {
            createTable,
            disney_films: insertedDisneyFilms,
        };
    } catch (error) {
        console.error('Error seeding disney_films:', error);
        throw error;
    }
}

async function seedDisneyAnimations(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS disney_animations (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "disney_animations" table`);

        const insertedDisneyAnimations = await Promise.all(
            disney_animations.map(
                (animation) => client.sql`
                INSERT INTO disney_animations (tmdb_id, title, date)
                VALUES (${animation.tmdb_id}, ${animation.title}, ${animation.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedDisneyAnimations.length} Disney animation films`);

        return {
            createTable,
            disney_animations: insertedDisneyAnimations,
        };
    } catch (error) {
        console.error('Error seeding disney_animations:', error);
        throw error;
    }
}

async function seedDisneySeries(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS disney_series (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "disney_series" table`);

        const insertedDisneySeries = await Promise.all(
            disney_series.map(
                (serie) => client.sql`
                INSERT INTO disney_series (tmdb_id, title, date)
                VALUES (${serie.tmdb_id}, ${serie.title}, ${serie.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedDisneySeries.length} Disney series`);

        return {
            createTable,
            disney_series: insertedDisneySeries,
        };
    } catch (error) {
        console.error('Error seeding disney_series:', error);
        throw error;
    }
}

async function seedMarvelFilms(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS marvel_films (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "marvel_films" table`);

        const insertedMarvelFilms = await Promise.all(
            marvel_films.map(
                (film) => client.sql`
                INSERT INTO marvel_films (tmdb_id, title, date)
                VALUES (${film.tmdb_id}, ${film.title}, ${film.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedMarvelFilms.length} Marvel films`);

        return {
            createTable,
            marvel_films: insertedMarvelFilms,
        };
    } catch (error) {
        console.error('Error seeding marvel_films:', error);
        throw error;
    }
}

async function seedMarvelSeries(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS marvel_series (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "marvel_series" table`);

        const insertedMarvelSeries = await Promise.all(
            marvel_series.map(
                (serie) => client.sql`
                INSERT INTO marvel_series (tmdb_id, title, date)
                VALUES (${serie.tmdb_id}, ${serie.title}, ${serie.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedMarvelSeries.length} Marvel series`);

        return {
            createTable,
            marvel_series: insertedMarvelSeries,
        };
    } catch (error) {
        console.error('Error seeding marvel_series:', error);
        throw error;
    }
}

async function seedStarwarsFilms(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS starwars_films (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "starwars_films" table`);

        const insertedStarwarsFilms = await Promise.all(
            starwars_films.map(
                (film) => client.sql`
                INSERT INTO starwars_films (tmdb_id, title, date)
                VALUES (${film.tmdb_id}, ${film.title}, ${film.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedStarwarsFilms.length} Starwars films`);

        return {
            createTable,
            starwars_films: insertedStarwarsFilms,
        };
    } catch (error) {
        console.error('Error seeding starwars_films:', error);
        throw error;
    }
}

async function seedStarwarsSeries(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS starwars_series (
                    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                    tmdb_id INT NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    date VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "starwars_series" table`);

        const insertedStarwarsSeries = await Promise.all(
            starwars_series.map(
                (serie) => client.sql`
                INSERT INTO starwars_series (tmdb_id, title, date)
                VALUES (${serie.tmdb_id}, ${serie.title}, ${serie.date})
                ON CONFLICT (id) DO NOTHING;
            `,
            ),
        );

        console.log(`Seeded ${insertedStarwarsSeries.length} Starwars series`);

        return {
            createTable,
            starwars_series: insertedStarwarsSeries,
        };
    } catch (error) {
        console.error('Error seeding starwars_series:', error);
        throw error;
    }
}


async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedDisneyFilms(client);
    await seedDisneyAnimations(client);
    await seedDisneySeries(client);
    await seedMarvelFilms(client);
    await seedMarvelSeries(client);
    await seedStarwarsFilms(client);
    await seedStarwarsSeries(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
