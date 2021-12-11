import MealItem from "./MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Butter Chicken',
        description: 'Straight from the heart of India',
        price: 14.99
    },
    {
        id: 'm2',
        name: 'Chicken Masala',
        description: 'Straight from the heart of India',
        price: 14.99
    },
    {
        id: 'm3',
        name: 'Curry',
        description: 'Straight from the heart of India',
        price: 14.99
    }
];

//name, price, description
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS
        .map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} 
            description={meal.description} price={meal.price}></MealItem>)

    return <ul class="list-group">{mealsList}</ul>
}

export default AvailableMeals;