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
