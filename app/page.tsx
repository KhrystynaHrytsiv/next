import {createUser} from "@/app/actions/user";

export default function Home() {

  return (
    <>
      <form action={createUser}>
          <div>
              <input name={'name'} placeholder={'name'}/>
          </div>
          <div>
              <input name={'email'} placeholder={'email'}/>
          </div>
          <div>
              <input name={'password'} placeholder={'password'}/>
          </div>
          <button type='submit'>Send</button>
      </form>
    </>
  );
}
