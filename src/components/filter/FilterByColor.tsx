import { useState } from 'react';

interface ColorFilterProps {
  colors: string[];
  onChange?: (value: string[]) => void;
}

const FilterByColor: React.FC<ColorFilterProps> = ({ colors, onChange }) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorChange = (color: string) => {
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    
    setSelectedColors(newSelectedColors);

    if (onChange) {
      onChange(newSelectedColors);
    }
  };

  return (
    <div className="flex flex-row gap-2">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-4 h-4 rounded-full ${selectedColors.includes(color)
            ? 'border-2 border-black'
            : 'border border-transparent'
            }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
};

export default FilterByColor;
