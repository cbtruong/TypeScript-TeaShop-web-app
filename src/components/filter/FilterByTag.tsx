import { useEffect, useState } from "react";

interface FilterProps {
  options: {
    label: string;
    value: string;
  }[];
  selected?: string;
  onChange?: (value: string) => void;
}

const FilterByTag: React.FC<FilterProps> = ({
  options,
  selected = "all",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  const handleOptionChange = (value: string) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <div className="mb-4">
      <ul className="mt-2">
        {options.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer text-sm italic p-1 rounded ${
              selectedValue === option.value ? "text-black font-bold" : "text-gray"
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByTag;