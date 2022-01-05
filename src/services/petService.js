// const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore';
const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
   let response = await fetch(`${baseUrl}/pets`);
   if(response.status !== 204) {
      let pets = await response.json();
      let result = Object.values(pets);
      return result;

   } else {
      return [];
   }
};

export const getOne = async (petId) => {
   let response = await fetch(`${baseUrl}/pets/${petId}`);
   let pet = await response.json();
   return pet;
};


export const create = async (petData, token) => {
   let response = await fetch(`${baseUrl}/pets`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json',
         'X-Authorization': token,
      },
      body: JSON.stringify(petData)
   });
   let pets = await response.json();

   return pets;
};