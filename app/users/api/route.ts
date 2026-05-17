export async function GET(request:Request, response:Response){
    console.log('get request route handler');
    // // const users = [
    // //             {name: 'vasya', age: 31, status: false},
    // //             {name: 'petya', age: 30, status: true},
    // //             {name: 'kolya', age: 29, status: true},
    // //             {name: 'olya', age: 28, status: false},
    // //             {name: 'max', age: 30, status: true},
    // //             {name: 'anya', age: 31, status: false},
    // //             {name: 'oleg', age: 28, status: false},
    // //             {name: 'andrey', age: 29, status: true},
    // //             {name: 'masha', age: 30, status: true},
    // //             {name: 'yulia', age: 31, status: false},
    // //             {name: 'ivan', age: 31, status: true}
    // //         ];
    //
    // const users = await fetch('https://jsonplaceholder.typicode.com/users')
    //           .then(response => response.json());
    // console.log(request);
    // console.log(response);
    response.headers.set('xxx', 'qwedfv')
    return Response.json({message: request.url, status:200})
}
export const POST = async () =>{
    console.log('post request route handler');
    return Response.json({message: 'post request route handler'})
}