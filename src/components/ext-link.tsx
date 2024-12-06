import { FunctionalComponent } from "preact"

interface ExtLinkProps {
  href: string
  children: preact.ComponentChildren
}

const ExtLink: FunctionalComponent<ExtLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class="relative text-blue-600 hover:text-blue-700 underline hover:decoration-2 decoration-blue-400 underline-offset-4 hover:decoration-blue-500 transition"
    >
      {children}
      <span class="relative ml-1 inline-block text-sm scale-135" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

export default ExtLink
