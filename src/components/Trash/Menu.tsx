import {Drinks} from "./Drinks.tsx";
import {DrinkImages} from "./DrinkImages.tsx";
import {AddDrink} from "./AddDrink.tsx";

function Menu () {
    return (
        <>
    <Drinks/>
    <DrinkImages
        links={[
            'https://img.freepik.com/free-photo/cup-of-coffee-with-a-heart-drawn-in-foam_1286-70.jpg?1',
            'https://miychay.com/upload/iblock/7c6/7c664063ba5e6215cb3567de3330c187.jpg',
            'https://aqua-work.ru/image/stakan-vody.jpg'
        ]}/>
    <AddDrink/>
            </>)
}