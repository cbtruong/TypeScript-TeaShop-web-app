import { useState } from 'react';
import FilterByTag from './FilterByTag';
import FilterByPrice from './FilterByPrice';
import FilterBySize from './FilterBySize';
import FilterByColor from './FilterByColor';

interface ProductFilterProps {
  FilterByTag?: boolean;
  FilterByPrice?: boolean;
  FilterBySize?: boolean;
  FilterByColor?: boolean;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ ...props }) => {
  const [openCollection, setOpenCollection] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openColor, setOpenColor] = useState(false);

  const [collection, setCollection] = useState<string | undefined>();
  const [price, setPrice] = useState<number[] | undefined>([5, 15]);
  const [size, setSize] = useState<string | undefined>();
  const [color, setColor] = useState<string[] | undefined>([]);

  const handleCollectionChange = (value: string) => {
    setCollection(value);
  };

  const handlePriceChange = (value: number[]) => {
    setPrice(value as [number, number]);
  };

  const handleSizeChange = (value: string) => {
    setSize(value);
  };

  const handleColorChange = (value: string[]) => {
    setColor(value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-extra italic text-h1 text-gray">
        Filter
      </h1>
      <span className="w-full h-[0.2px] bg-gray my-3"></span>
      {props.FilterByTag && (
        <>
          <button onClick={() => setOpenCollection(!openCollection)}>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-extra italic text-gray">
                Collection
              </h2>
              <i className={`${!openCollection ? 'bx bx-plus' : 'bx bx-minus'} text-2xl`}></i>
            </div>
          </button>
          {openCollection && (
            <FilterByTag
              options={[
                { label: 'All', value: 'all' },
                { label: 'Classic', value: 'classic' },
                { label: 'Herbal Tea', value: 'herbal' },
                { label: 'Special Edition', value: 'special' },
              ]}
              selected={collection}
              onChange={handleCollectionChange}
            />
          )}
          <span className="w-full h-[0.2px] bg-gray my-3"></span>
        </>
      )}
      {props.FilterByPrice && (
        <>
          <button onClick={() => setOpenPrice(!openPrice)}>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-extra italic text-gray">
                Price
              </h2>
              <i className={`${!openPrice ? 'bx bx-plus' : 'bx bx-minus'} text-2xl`}></i>
            </div>
          </button>
          {openPrice && (
            <FilterByPrice
              min={5}
              max={15}
              selected={price as [number, number]}
              onChange={handlePriceChange}
            />
          )}
          <span className="w-full h-[0.2px] bg-gray my-3"></span>
        </>
      )}
      {props.FilterBySize && (
        <>
          <button onClick={() => setOpenSize(!openSize)}>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-extra italic text-gray">
                Size
              </h2>
              <i className={`${!openSize ? 'bx bx-plus' : 'bx bx-minus'} text-2xl`}></i>
            </div>
          </button>
          {openSize && (
            <FilterBySize
              options={[
                { label: '125Gr', value: '125gr' },
                { label: '200Gr', value: '200gr' },
                { label: '300Gr', value: '300gr' },
              ]}
              selected={size}
              onChange={handleSizeChange}
            />
          )}
          <span className="w-full h-[0.2px] bg-gray my-3"></span>
        </>
      )}
      {props.FilterByColor && (
        <>
          <button onClick={() => setOpenColor(!openColor)}>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-lg font-extra italic text-gray">
                Color
              </h2>
              <i className={`${!openColor ? 'bx bx-plus' : 'bx bx-minus'} text-2xl text-gray`}></i>
            </div>
          </button>
          {openColor && (
            <FilterByColor
              colors={['#CA5C3B', '#00ff00', '#0000ff']}
              onChange={handleColorChange}
            />
          )}
          <span className="w-full h-[0.2px] bg-gray my-3"></span>
        </>
      )}

      <div className="mt-8">
        <p className="text-gray-700">
          Selected filters:
          {collection && ` Collection: ${collection}`}
          {price && ` Price: ${price}₫`}
          {size && ` Size: ${size}`}
          {color && ` Color: ${color.join(', ')}`}
        </p>
      </div>
    </div>
  );
};

export default ProductFilter;
