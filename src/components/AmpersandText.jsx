export default function AmpersandText({ children }) {
  return children.split('&').flatMap((part, index) => (
    index === 0
      ? [part]
      : [
          <span key={`ampersand-${index}`} className="ampersand">&</span>,
          part,
        ]
  ))
}
