import React, { FC, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector }             from "react-redux";
import { RootState }                            from "@vj-store";
import { Actions }                              from "@vj-store/actions";
import { Styled, Image }                        from "./core"


interface iProps {
}

let oldActiveCategory = -1

const Gallery: FC<iProps> = memo(
  () => {
    const [page, setPage] = useState<number>(1)
    const cats = useSelector((state: RootState) => state.cats)
    const statusBar = useSelector((state: RootState) => state.global.statusBar)
    const activeCategory = useSelector((state: RootState) => state.global.activeCategory)
    const dispatch = useDispatch()

    useEffect(() => {
      if (oldActiveCategory !== activeCategory) {
        oldActiveCategory = activeCategory
        Actions.setCats(1, activeCategory, dispatch).then(r => r)
        setPage(1)
      }
    }, [activeCategory,dispatch])
    const viewMore = () => {
      Actions.addCats(page + 1, activeCategory, dispatch).then(r => r)
      setPage(page + 1)
    }

    return (
      <Styled.Gallery status={statusBar}>
        {cats.map((cat, index) => <Image key={`${cat.id}_${index}`} {...cat}/>)}
        {
          cats.length > 0
            ? <div className="view-more" onClick={viewMore}>view more</div>
            : null
        }
      </Styled.Gallery>
    )
  }
)

export default Gallery