const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore';

export const getAll = async () => {
   let response = await fetch(`${baseUrl}/pets`);
   let pets = await response.json();
   let result = Object.values(pets);
   return result;
};

export const create = async (petData) => {
   let response = await fetch(`${baseUrl}/pets`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(petData)
   });
   let pets = await response.json();

   return pets;
};