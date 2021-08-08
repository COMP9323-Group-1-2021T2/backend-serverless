import { getClient } from "../utils/pgClient";
export const handler = async () => {
  const client = getClient()
  await client.connect()
  
  //Seed Database with data for demonstration and testing purposes

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
  const videosInsert = `
    INSERT INTO video(category_id, title, url, image, description) VALUES
      ('machinery', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('machinery', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('ergonomics', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('ergonomics', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('work-stress', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('work-stress', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('anxiety', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('anxiety', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('depression', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('depression', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('eating-healthy', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('eating-healthy', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus'),
      ('exercise', 'UNSW Arts, Design & Architecture | Shape the future through creativity', 'https://www.youtube.com/watch?v=WLoiup-VrN4', 'http://i3.ytimg.com/vi/WLoiup-VrN4/maxresdefault.jpg', 'UNSW Arts, Design & Architecture (ADA) is a community of students, staff, alumni and industry partners from across the Schools of Art & Design, Arts & Media, Built Environment, Education, Humanities & Languages, and Social Sciences. Through creativity, collaboration, and inclusion, our diverse faculty unites to seek and solve our greatest challenges. Find out more at: www.ada.unsw.edu.au'),
      ('exercise', 'UNSW On Campus Accommodation', 'https://www.youtube.com/watch?v=ioreNkycmJY', 'http://i3.ytimg.com/vi/ioreNkycmJY/maxresdefault.jpg', 'Some Campus')
  `


  await client.query(videosInsert)

  return "OK";
};
