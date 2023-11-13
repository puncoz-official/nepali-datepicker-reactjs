import {
  arrow,
  autoUpdate,
  FloatingArrow,
  FloatingFocusManager,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react"
import React, { FunctionComponent, ReactNode, useRef } from "react"

import { useData } from "@/hooks"
import { Types } from "#/Data.ts"

const ARROW_HEIGHT = 7
const GAP = 2

interface Props {
  input: ReactNode
  calendar: ReactNode
}
const FloatingContainer: FunctionComponent<Props> = (props) => {
  const { state, setData } = useData()

  const arrowRef = useRef(null)

  const {
    refs,
    context,
    floatingStyles,
    middlewareData,
  } = useFloating({
    open: state.isCalendarOpen,
    onOpenChange: (isOpen) => {
      setData({ type: Types.SET_CALENDAR_OPEN, isOpen })
    },
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(ARROW_HEIGHT + GAP),
    ],
    whileElementsMounted: autoUpdate,
  })

  const arrowX = middlewareData.arrow?.x ?? 0
  const arrowY = middlewareData.arrow?.y ?? 0
  const transformX = arrowX + ARROW_HEIGHT / 2
  const transformY = arrowY + ARROW_HEIGHT

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    initial: {
      transform: "scale(0)",
    },
    common: ({ side }) => ({
      transformOrigin: {
        top: `${transformX}px calc(100% + ${ARROW_HEIGHT}px)`,
        bottom: `${transformX}px ${-ARROW_HEIGHT}px`,
        left: `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px`,
        right: `${-ARROW_HEIGHT}px ${transformY}px`,
      }[side],
    }),
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  const id = useId()

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {props.input}
      </div>

      {state.isCalendarOpen && (
        <FloatingFocusManager context={context} modal={false}>
          {isMounted ? (
            <div ref={refs.setFloating} style={floatingStyles} aria-labelledby={id} {...getFloatingProps()}>
              <div style={transitionStyles}>
                <FloatingArrow ref={arrowRef}
                               context={context}
                               className={`
                                  ndp-fill-white dark:ndp-fill-slate-800
                               `} />
                {props.calendar}
              </div>
            </div>
          ) : <div />}
        </FloatingFocusManager>
      )}
    </>
  )
}

export default FloatingContainer
