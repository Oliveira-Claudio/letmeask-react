import { ButtonHTMLAttributes } from "react"

import '../styles/button.scss'

type ButtonPorps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button (props: ButtonPorps) {
  return (
    <button className="button" {...props} />
  )
}

