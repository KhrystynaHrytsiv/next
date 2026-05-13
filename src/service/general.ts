export const generalService = {
    getAll: async <T, >(endpoint:string):Promise<T[]> => await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
              .then(response => response.json()),
    getById: async <T,>(endpoint:string, id:string):Promise<T> => await fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
              .then(response => response.json())

};
