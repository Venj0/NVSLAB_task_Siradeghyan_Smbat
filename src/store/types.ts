export const Types = {
  categories :{
    getAll:"get_all_categories"
  },
  cats:{
    set:"set_cats",
    add:"add_cats",

  },
  activeCategory:"set_activeCategory",
  statusBar:"toggle_status_bar"
}


interface iCategory  {
  id:number|string,
  name:"string"
}
export type tCategories =iCategory[]

interface iCat  {
  breeds: []
  categories: iCategory[]
  height: number
  id: string | number
  url: string
  width: number
}
export type tCats =iCat[]

export type tGlobal ={
  activeCategory:number,
  statusBar:boolean
}

