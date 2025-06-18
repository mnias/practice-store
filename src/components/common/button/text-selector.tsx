interface Props {
  texts: string[];
  selectedText?: string;
  onChange: (text: string) => void;
}

export default function TextSelector({ texts, selectedText, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {texts.map(text => (
        <button
          key={text}
          className={`min-w-fit cursor-pointer rounded-[62px] px-4 py-2 whitespace-nowrap ${selectedText === text ? 'bg-black text-white' : 'bg-gray-200 text-gray-60'}`}
          onClick={() => onChange(text)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
