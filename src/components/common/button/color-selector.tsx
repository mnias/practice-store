'use client';

interface Props {
  colors: string[];
  selectedColor?: string;
  onChange: (color: string) => void;
}

export default function ColorSelector({ colors, selectedColor, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map(color => (
        <button
          key={color}
          className="relative h-8 w-8 cursor-pointer rounded-full"
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        >
          {selectedColor === color && (
            <svg
              className="absolute inset-0 h-full w-full p-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke={'white'}
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
}
