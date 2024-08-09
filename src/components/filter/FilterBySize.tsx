import { useState } from "react";

interface FilterProps {
  options: {
    label: string;
    value: string;
  }[];
  selected?: string;
  onChange?: (value: string) => void;
}

const FilterBySize: React.FC<FilterProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const handleOptionChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <div className="mb-4">
      <div className="mt-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              id={option.value}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleOptionChange(option.value)}
            />
            <label
              htmlFor={option.value}
              className="ml-2 block text-sm text-gray-900 cursor-pointer"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBySize;