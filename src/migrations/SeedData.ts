import { getClient } from "../utils/pgClient";
export const handler = async () => {
  const client = getClient()
  await client.connect()

  const categoriesInsert = `
    INSERT INTO category(id, name, parent_id) VALUES
      ('ohs', 'Occupational Health and Safety', NULL),
      ('mental', 'Mental Health', NULL),
      ('physical', 'Physical Health', NULL),
      ('machinery', 'Machinery', 'ohs'),
      ('ergonomics', 'Ergonomics', 'ohs'),
      ('work-stress', 'Work Stress', 'ohs'),
      ('anxiety', 'Anxiety', 'mental'),
      ('depression', 'Depression', 'mental'),
      ('eating-healthy', 'Eating Healthy', 'physical'),
      ('exercise', 'Exercise', 'physical')
  `

  await client.query(categoriesInsert)

  const categoryInfoInsert = `
    INSERT INTO category(category_id, info) VALUES
      ('machinery', 'Some Machinery Info'),
      ('ergonomics', 'Some Ergonomics Info'),
      ('work-stress', 'Some Work Stress Info'),
      ('anxiety', 'Some Anxiety Info'),
      ('depression', 'Some Depression Info'),
      ('eating-healthy', 'Some Eating Healthy Info'),
      ('exercise', 'Some Exercise Info')
  `

  await client.query(categoryInfoInsert)

  return "OK";
};
