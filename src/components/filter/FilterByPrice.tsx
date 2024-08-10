import React, { useState } from "react";
import { Slider } from "antd";

interface RangeFilterProps {
  min: number;
  max: number;
  step?: number;
  selected?: [number, number];
  onChange?: (value: number[]) => void;
}

const FilterByPrice: React.FC<RangeFilterProps> = ({
  min,
  max,
  step = 1,
  selected,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<number[]>(
    selected || [min, max]
  );

  const handleRangeChange = (value: number[]) => { 
    setSelectedValue(value as [number, number]);
    onChange && onChange(value);
  };

  return (
    <div className="mb-4">
      <div className="mt-2">
        <div className="flex flex-col items-center">
          <Slider
            range
            step={step}
            min={min}
            max={max}
            value={selectedValue}
            onChange={handleRangeChange}
            className="w-full"
          />
          <div className="flex justify-between w-full mt-2">
            <span>{selectedValue[0]}₫</span>
            <span>{selectedValue[1]}₫</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
