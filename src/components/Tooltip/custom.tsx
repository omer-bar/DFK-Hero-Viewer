import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Popover, { PopoverProps } from '../Popover'

const TooltipContainer = styled.div`
  width: 400px;
  padding: 0.6rem 1rem;
  line-height: 100%;
  font-weight: 400;
`

interface TooltipProps extends Omit<PopoverProps, 'content'> {
  element: React.ReactNode
}

export default function CustomTooltip({ element, ...rest }: TooltipProps) {
  return <Popover content={<TooltipContainer>{element}</TooltipContainer>} {...rest} />
}

export function CustomMouseoverTooltip({ children, ...rest }: Omit<TooltipProps, 'show'>) {
  const [show, setShow] = useState(false)
  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])
  return (
    <CustomTooltip {...rest} show={show}>
      <div onMouseEnter={open} onMouseLeave={close}>
        {children}
      </div>
    </CustomTooltip>
  )
}
