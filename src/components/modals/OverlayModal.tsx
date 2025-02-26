type OverlayModalProps = {
  onCancelHandler?: () => void
  children: React.ReactNode
}
export const OverlayModal = ({
  onCancelHandler,
  children,
}: OverlayModalProps) => {
  return (
    <div onClick={onCancelHandler}>
      <div className="z-15 w-full h-full fixed left-0 top-0"></div>
      <div
        className="z-20 absolute mt-1"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
