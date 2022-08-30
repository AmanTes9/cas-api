export const Routes = {
  config: {
    version: "/v1/",
    api_docs: "/api-docs",
    imagePath: "/static/images",
  },
  default: {
    base: "/",
    singleId: "/:id",
  },

  common: {
    product: "/product",
    product_search: "/search/:key",
    category: "/category",
  },

  user: {
    base: "/user",
  },
  admin: {
    base: "/admin",
  },
};
