export type HelloNameBody = {
  name: string;
};

// API Responses
export type GetCategoriesResponse = {
  data: Category[];
}

export type GetCategoryInfoResponse = {
  data: CategoryInfo;
}

export type GetCategoryArticlesResponse = {
  data: Article[];
}

export type GetCategoryVideosResponse = {
  data: Video[];
}

// Data models

export type Category = {
  id: string;
  name: string;
  parent_id: null | string;
}

export type CategoryInfo = {
  id: string;
  category_id: string;
  info: string;
}

export type Article = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  image: string;
  description: string;
}

export type Video = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  image: string;
  description: string;
}
