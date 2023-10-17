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

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setselectedFruit(e.target.value);
    };

    return(
        <div>
            <h2>Choose a fruit </h2>
            <select value={selectedFruit} onChange={handleChange}>
                {fruits.map((fruit) => (
                    <option key={fruit} value={fruit}>{fruit}</option>
                ))}

            </select>
            {selectedFruit ! == 'Choose a fruit' && <p>Item Selected {selectedFruit}</p>}
        </div>
    );
};
export default FruitSelection;