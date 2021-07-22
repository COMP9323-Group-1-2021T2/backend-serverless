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

export type UpdateCategoryVideoRequest = {
  title: string;
  url: string;
  image: string;
  description: string;
};


export type UpdateCategoryArticleRequest = {
  title: string;
  url: string;
  image: string;
  description: string;
};

export type CreateQuestionRequest = {
  question: string;
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
  data: Video;
};

export type DeleteCategoryResponse = {
  status: string;
};

export type DeleteCategoryVideoResponse = {
  status: string;
};

export type DeleteCategoryArticleResponse = {
  status: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type UpdateCategoryVideoResponse = {
  data: Video;
};

export type UpdateCategoryArticleResponse = {
  data: Article;
};

export type CreateQuestionResponse = {
  data: Question;
}

export type GetQuestionsResponse = {
  data: Question[];
}

export type GetAdminQuestionsResponse = {
  data: Question[];
}

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

export type Question = {
  id: string;
  question: string;
  answer: string;
  answered_by: string;
  answered_at: string;
  created_at: string;
}

export type JwtClaims = {
  id: string;
  login_type: string;
}

export type RequestContext = {
  id: string;
}
