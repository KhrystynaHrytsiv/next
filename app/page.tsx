import Form from "next/form";

export default function Home() {
  return (
    <>
    {/*<form action={'/submit'}>*/}
    {/*  <input type={'text'} name={'login'} placeholder={'login'} className='border-1 m-2'/>*/}
    {/*  <input type={'text'} name={'password'} placeholder={'password'} className='border-1 m-2'/>*/}
    {/*  <button className='border-1'>submit</button>*/}
    {/*</form>*/}

      <Form action={'/submit'} >
        <input type={'text'} name={'name'} className='border-1'/>
        <button> submit</button>
      </Form>
    </>
  );
}
