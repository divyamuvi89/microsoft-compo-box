import React, {ChangeEvent, useState} from "react";

interface FruitSelectionComboBoxProps{

}
interface FruitSelectionState{

}
const fruits =['Apple', 'Orange', 'Banana', 'Grape','Kiwi','Mango', 'Pear','Pineapple' ];
const FruitSelection = () => {
    const [selectedFruit, setselectedFruit] = useState('Choose a fruit');
    const handleSelect = (fruit:string) =>{
        setselectedFruit(fruit);
    };
    const filterFruits = (input:string):string[] => {
        return fruits.filter((fruit) => 
        fruit.includes(input));
        
    };

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        handleSelect(filterFruits(e.target.value)[0]);
    };

    return(
        <div>
            <h2>Choose a fruit:</h2>
            <input 
            type = "text"
            placeholder="Enter your Selection"
            onChange={handleChange}
            
            />
            <ul>
                {filterFruits(selectedFruit || '').map((fruit) => (
                    <li key={fruit} onClick={()=> handleSelect(fruit)}>{fruit}</li>
                ))}
            </ul>
            {selectedFruit !=='Choose a fruit' && <p>Item Selected: {selectedFruit}</p>}
        </div>
    );
};
export default FruitSelection;