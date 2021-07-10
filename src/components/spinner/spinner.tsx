import { FC,memo } from "react";

interface iProps {}

export const Spinner: FC<iProps> = memo(() => {
    return (
      <div><h1>Loading...</h1></div>
    )
  }
)
