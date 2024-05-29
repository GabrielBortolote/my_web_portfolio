export default function ViewWrapper({ light, children, className}) {
  return (
    <div className={`
      w-full
      h-screen
      overflow-hidden
      ${light ? 'fontr-light' : 'bg-dark'}
      ${light ? 'text-dark' : 'text-light'}
      ${className}
    `}>
      {children}
    </div>
  )
}