import React, {ChangeEvent, useState} from "react";

interface FruitSelectionComboBoxProps{

}
interface FruitSelectionState{

}
const fruits =['Apple', 'Orange', 'Banana', 'Grape','Kiwi','Mango', 'Pear','Pineapple' ];
const FruitSelection:React.FC = () => {
    const [searchTerm, setsearchTerm] = useState<string>('');
    const [selectedFruit, setselectedFruit] = useState<string>('');
   const handleSelect = (fruit:string) =>{
        setselectedFruit(fruit);
        setsearchTerm(''); //clear the search term when an item is selected
    };
    const filterFruits = fruits.filter((fruit) => {
        if(!searchTerm){
            return true;

        }
        return fruit.includes(searchTerm);
        
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setselectedFruit(e.target.value);
    };

    return(
        <div>
            <h2>Choose a fruit </h2>
            <input
            type = "text"
            placeholder="Search for a fruit ..."
            list="fruits"
            value={selectedFruit}
            onChange={handleChange}
            />
            <datalist id="fruits"> 
            {fruits.map((fruit) => (
                <option key={fruit} value={fruit} />
            ))}
            </datalist>
            {selectedFruit && <p>Item Selected is {selectedFruit}</p>}
           
        </div>
    );
};
export default FruitSelection;