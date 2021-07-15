// API Requests
export type CreateCategoryRequest = {
  id: string;
  name: string;
  parent_id: string;
  info: string;
};

export type CreateCategoryArticleRequest = {
  title: string;
  url: string;
  image: string;
  description: string;
};

export type CreateCategoryVideoRequest = {
  title: string;
  url: string;
  image: string;
  description: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

// API Responses
export type GetCategoriesResponse = {
  data: Category[];
};

export type GetCategoryInfoResponse = {
  data: CategoryInfo;
};

export type GetCategoryArticlesResponse = {
  data: Article[];
};

export type GetCategoryVideosResponse = {
  data: Video[];
};

export type CreateCategoryResponse = {
  data: Category;
};

export type CreateCategoryArticleResponse = {
  data: Article;
};

export type CreateCategoryVideoResponse = {
  data: Article;
};

export type DeleteCategoryResponse = {
  status: string;
};

export type LoginResponse = {
  accessToken: string;
};

// Data models

export type Category = {
  id: string;
  name: string;
  parent_id: null | string;
};

export type CategoryInfo = {
  id: string;
  category_id: string;
  info: string;
};

export type Article = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  image: string;
  description: string;
};

export type Video = {
  id: string;
  category_id: string;
  title: string;
  url: string;
  image: string;
  description: string;
};

export type User = {
  id: string;
  email: string;
  login_type: string;
  password: string;
}

export type JwtClaims = {
  id: string;
  login_type: string;
}
