import React, {useState} from "react";
import './FruitSelection.css';

const fruits = [
    'Apple',
    'Orange',
    'Banana',
    'Grape',
    'Kiwi',
    'Mango',
    'Pear',
    'Pineapple',
    'Strawberry',
    'Blueberry',
    'Raspberry',
    'Blackberry',
    'Cherry',
    'Watermelon',
    'Peach',
    'Plum',
    'Lemon',
    'Lime',
    'Coconut',
    'Pomegranate',
    'Cantaloupe',
    'Honeydew',
    'Fig',
    'Guava',
    'Apricot',
    'Nectarine',
    'Passion Fruit',
    'Dragon Fruit',
    'Papaya',
    'Lychee',
    'Avocado'
];

const FruitSelection:React.FC = () => {
    const [selectedFruit, setselectedFruit] = useState<string>('');
    const [filteredFruits, setfilteredFruits] = useState<string[]>(fruits)
    const [showdropDown, setShowdropdown] =useState<boolean>(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setselectedFruit(searchValue);
        const filtered = fruits.filter(fruit => fruit.toLowerCase().includes(searchValue.toLowerCase()));
        setfilteredFruits(filtered);
    };
    const handleSelect = (fruit:string) =>{
        setselectedFruit(fruit);
        setShowdropdown(false);
        setfilteredFruits(fruits);
    }

    return(
        <div className="fruit-selection-container">
            <h2>Choose a fruit </h2>
            {selectedFruit && <p className="selected-fruit">Item Selected</p>}
           <div className="custom-dropdown">
            <input
            className="fruit-input"
            type = "text"
            placeholder="Search for a fruit...."
            list="fruits"
            value={selectedFruit}
            onClick={() => setShowdropdown(true)}
            onChange={handleChange}
            />
          {showdropDown && (
          <ul className="dropdown-list">
            {filteredFruits.map((fruit) => (
                <li key={fruit} onClick={() => handleSelect(fruit)}>{fruit}</li>
            ))}
          </ul>
          )}
          </div>
            </div>
           
        
    );
};
export default FruitSelection;