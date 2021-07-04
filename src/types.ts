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
