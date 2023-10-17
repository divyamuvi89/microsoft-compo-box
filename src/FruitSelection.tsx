import React, {useState} from "react";

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

    return(
        <div>
            <h2>Choose a fruit:</h2>
            <input 
            type = "text"
            placeholder="Enter your Selection"
            
            />
        </div>
    )
}
export default FruitSelection;