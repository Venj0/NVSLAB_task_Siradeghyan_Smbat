import React, { FC, memo, useEffect } from 'react'
import { useDispatch, useSelector }   from "react-redux";
import { RootState }                  from "@vj-store";
import { Actions }                    from "@vj-store/actions";
import { Styled }                     from "./core"


interface iProps {
}

const Navbar: FC<iProps> = memo(
  () => {
    const categories = useSelector((state: RootState) => state.categories)
    const activeCategory = useSelector((state: RootState) => state.global.activeCategory)
    const statusBar = useSelector((state: RootState) => state.global.statusBar)

    const dispatch = useDispatch()

    useEffect(() => {
      if (!categories.length) {
        Actions.getCategories(dispatch).then(r => r)
      }
      if (window.innerWidth < 768 && statusBar) Actions.toggleStatusBar(dispatch)


    }, [categories.length, dispatch,statusBar])

    const changeCategory = (id: number | string) =>
      Actions.changeActiveCategory(+id, dispatch)

    const toggleStatusBar = () =>
      Actions.toggleStatusBar(dispatch)

    return (
      <Styled.Navbar status={statusBar}>
        <div className="status-bar item" onClick={toggleStatusBar}><span/><span/><span/></div>
        {
          categories.map((category) =>
            <div className={`item ${activeCategory === category.id && "active"}`} key={category.id}
                 onClick={() => changeCategory(category.id)}>{category.name}</div>)
        }
      </Styled.Navbar>
    )
  }
)

export default Navbar as React.FC;