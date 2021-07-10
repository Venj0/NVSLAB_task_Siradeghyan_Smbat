export const CategoriesUrl = "https://api.thecatapi.com/v1/categories"

interface iUrlData {
  categoryId:number | 1
  limit?:number
  page?:number
}

export const CatsUrl = (urlData:iUrlData):string=> `https://api.thecatapi.com/v1/images/search?`+
  `limit=${urlData?.limit||10}`+
  `&page=${urlData?.page||1}`+
  (urlData.categoryId>0?`&category_ids=${urlData?.categoryId}`:"")
