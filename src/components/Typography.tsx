import React, { ReactNode } from 'react'

interface TypographyProps {
as?: string,
children: string | JSX.Element| ReactNode | JSX.Element[],
className?: string

}

const Typography = ({as:As="P", className,children, ...rest}:TypographyProps) => {
  return (
    <p className={`font-Raleway ${className}`} {...rest}>{children}</p>
  )
}

export default Typography