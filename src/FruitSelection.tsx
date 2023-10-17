import React, {useState} from "react";
import './FruitSelection.css';

const fruits =['Apple', 'Orange', 'Banana', 'Grape','Kiwi','Mango', 'Pear','Pineapple' ];
const FruitSelection:React.FC = () => {
    const [selectedFruit, setselectedFruit] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setselectedFruit(e.target.value);
    };

    return(
        <div className="fruit-selection-container">
            <h2>Choose a fruit </h2>
            {selectedFruit && <p className="selected-fruit">Item Selected</p>}
            <input
            className="fruit-input"
            type = "text"
            placeholder="Search for a fruit...."
            list="fruits"
            value={selectedFruit}
            onChange={handleChange}
            />
            
            <datalist id="fruits"> 
            {fruits.map((fruit) => (
                <option key={fruit} value={fruit} />
            ))}
            </datalist>
            
            
           
        </div>
    );
};
export default FruitSelection;