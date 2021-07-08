import { getClient } from "../utils/pgClient";
export const handler = async () => {
  const client = getClient()
  await client.connect()

  // Category

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

  // CategoryInfo

  const categoryInfoInsert = `
    INSERT INTO category_info(category_id, info) VALUES
      ('machinery', 'Some Machinery Info'),
      ('ergonomics', 'Some Ergonomics Info'),
      ('work-stress', 'Some Work Stress Info'),
      ('anxiety', 'Some Anxiety Info'),
      ('depression', 'Some Depression Info'),
      ('eating-healthy', 'Some Eating Healthy Info'),
      ('exercise', 'Some Exercise Info')
  `

  await client.query(categoryInfoInsert)

  // Article
  const articleInsert = `
    INSERT INTO article(category_id, title, url, image, description) VALUES
      ('machinery', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('machinery', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('ergonomics', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('ergonomics', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('work-stress', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('work-stress', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('anxiety', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('anxiety', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('depression', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('depression', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('eating-healthy', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('eating-healthy', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('exercise', 'Some Google Article 1', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description'),
      ('exercise', 'Some Google Article 2', 'https://google.com', 'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png', 'Some description')
  `

  await client.query(articleInsert)

  // Video

  return "OK";
};
