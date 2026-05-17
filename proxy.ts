import {NextRequest, NextResponse} from "next/server";

    export const proxy = async (request:NextRequest) =>{
    console.log('middleware');
   //  const login = request.cookies.get('login');
   //  const password = request.cookies.get('password');
   // const token = await fetch('https://jsonplaceholder.typicode.com/users',{
   //      method: 'POST', body: JSON.stringify({
   //          key1:login,
   //          key2:password,
   //      })
   //  }).then(res => res.json());

    // const token = 'sefcsvdsvds';
    // const response = NextResponse.next({
    //     headers:{
    //         Authorization: token
    //     }
    // });
    // return response;
     return new NextResponse('vsd cdvs', {headers:{'aaa':'qqqq'}})

    //
    // if (request.url.startsWith('/api')){
    //     //some action
    // } else if (request.url.startsWith('/dsa')){
    //     //.....
    // }

};
export const config ={
    matcher: '/auth'
}