import MealItem from "../MealItem/MealItem";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";

function AvailableMeals(props) {
  return (
    <Card className={classes.meals}>
      <ul>
        {props.meals.map((item) => (
          <li>
            <MealItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals;
