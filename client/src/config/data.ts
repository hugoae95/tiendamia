if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export const API_PROVIDER = process.env.API_PROVIDER;
