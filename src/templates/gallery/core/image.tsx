import React, { FC, memo } from 'react'
import { Styled }          from "."


interface iProps {
  id: number | string
  url: string
}


export const Image: FC<iProps> = memo(
  ({url, id}) => {

    return (
      <Styled.Image>
        <img src={url} alt={id.toString()}/>
      </Styled.Image>


    )
  }
)

