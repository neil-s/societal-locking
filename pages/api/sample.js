import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    const result = await db.query('SELECT name FROM sample_table LIMIT 1');
    const sampleName = result.rows[0]?.name || 'No sample found';
    res.status(200).json({ name: sampleName });
  } catch (error) {
    console.error('Error fetching sample:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
