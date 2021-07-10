import axios                      from "axios";
import { CategoriesUrl, CatsUrl } from "./constants";


interface iUrlData {
  categoryId: number,
  limit?: number,
  page?: number
}

export const service = {
  getCategories: async () => {
    try {
      const data = await axios.get(CategoriesUrl)
      return data.data
    } catch (e) {
      console.error(e.message)
    }
  },
  getCats      : async (urlData: iUrlData) => {
    try {
      const data = await axios.get(CatsUrl(urlData))
      return data.data
    } catch (e) {
      console.error(e.message)
    }

  }
}
