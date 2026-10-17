/** Supports **bold** phrases without treating the content as HTML. */
export function InlineBold({ text }: { text: string }) {
  return text.split(/\*\*([^*]+)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}
