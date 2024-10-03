const db = require('../lib/db');

async function seed() {
  try {
    // Create the sample table
    await db.query(`
      CREATE TABLE IF NOT EXISTS sample_table (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `);

    // Insert a sample row
    await db.query(`
      INSERT INTO sample_table (name) VALUES ($1)
      ON CONFLICT (id) DO NOTHING
    `, ['Wanda Wallace']);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seed();
