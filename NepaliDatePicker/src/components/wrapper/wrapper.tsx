import {
  autoUpdate,
  FloatingFocusManager,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react"
import React, { FunctionComponent, ReactNode, useState } from "react"

import { useData } from "@/components"

type Props = {
  input: ReactNode
  calendar: ReactNode
}
const Wrapper: FunctionComponent<Props> = (props) => {
  const { state } = useData()
  const [isOpen, setOpen] = useState<boolean>(false)

  const { refs, context, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: setOpen,
    middleware: [],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  const id = useId()

  return (
    <div className={`nepali-datepicker ${state.classNames.wrapper || ""}`} data-theme={state.theme}>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {props.input}
      </div>

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div ref={refs.setFloating} style={floatingStyles} aria-labelledby={id} {...getFloatingProps()}>
            {props.calendar}
          </div>
        </FloatingFocusManager>
      )}
    </div>
  )
}
export default Wrapper
