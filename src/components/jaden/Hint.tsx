import { ReactNode } from 'react'

type Props = {
  solution: string
}

export const Hint = ({ solution }: Props) => {
  const source = 'images/' + solution + '.png'
  return (
    <div className="items-center">
      {/* <h1>Hint</h1> */}
      <img
        src={source}
        className="h-56 rounded-xl border-2 border-amber-600"
      ></img>
    </div>
  )
}
