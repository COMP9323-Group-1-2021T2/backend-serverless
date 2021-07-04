export type HelloNameBody = {
  name: string;
};

// API Responses
export type GetCategoriesResponse = {
  data: Category[];
}

// Data models

export type Category = {
  id: string;
  name: string;
  parent_id: null | string;
}
