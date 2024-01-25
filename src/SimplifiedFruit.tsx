import React, { useState } from 'react';

const fruits = [
  '🍏 Apple', '🍊 Orange', '🍌 Banana', '🍇 Grape', '🥝 Kiwi', '🥭 Mango',
  '🍈 Pear', '🍍 Pineapple', '🍓 Strawberry', 'Blueberry', 'Raspberry',
  'Blackberry', 'Cherry', 'Watermelon', 'Peach', 'Plum', 'Lemon', 'Lime',
  'Coconut', 'Pomegranate', 'Cantaloupe', 'Honeydew', 'Fig', 'Guava',
  'Apricot', 'Nectarine', 'Passion Fruit', 'Dragon Fruit', 'Papaya',
  'Lychee', 'Avocado'
];

const SimplifiedFruitSelection: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(e.target.value);
  };

  return (
    <div className="fruit-selection-container">
      <h2>Choose a fruit</h2>
      {selectedFruit && <p className="selected-fruit">Item Selected</p>}
      <div className="custom-dropdown">
        <select
          className="fruit-input"
          value={selectedFruit}
          onChange={handleSelect}
        >
          <option value="">Search for a fruit....</option>
          {fruits.map((fruit) => (
            <option key={fruit} value={fruit}>{fruit}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SimplifiedFruitSelection;
