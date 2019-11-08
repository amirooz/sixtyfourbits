import React from 'react'
import { cx, css } from 'emotion'

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      'large material-icons',
      className,
      css`
        color: #333;
        vertical-align: text-bottom;
      `
    )}
  />
))


