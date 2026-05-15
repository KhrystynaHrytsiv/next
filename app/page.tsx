import Form from "next/form";
import {getMeals, saveMeal} from "@/src/server-actions/saveAction";

export default async function Home() {
    const mealsArr = await getMeals();
  return (
    <>
      <Form action={saveMeal}>
        <input type={'text'} name={'title'} className='border'/>
        <button>save</button>
      </Form>

        <div>
            {mealsArr.map(meal => <div key={meal.id}>{meal.title}</div>)}
        </div>
    </>
  );
}
