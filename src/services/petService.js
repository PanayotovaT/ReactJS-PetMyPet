import * as request from './requester';

// const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore';
const baseUrl = 'http://localhost:3030/data';

export const getAll =() => request.get(`${baseUrl}/pets`);

export const getOne = async (petId, signal) => {
   let response = await fetch(`${baseUrl}/pets/${petId}`, {signal});
   let pet = await response.json();
   return pet;
};

export const getMyPets = (userId) => {
   let query = encodeURIComponent(`_ownerId="${userId}"`);
   return request.get(`${baseUrl}/pets?where=${query}`);

   
};

export const update = (petId, petData) => {
   request.put(`${baseUrl}/pets/${petId}`, petData);
};

export const create = async (petData, token) => {
   let response = await fetch(`${baseUrl}/pets`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json',
         'X-Authorization': token,
      },
      body: JSON.stringify({ ...petData, likes: [] })
   });
   let pets = await response.json();

   return pets;
};

export const del = (petId, accessToken) => {
   return fetch(`${baseUrl}/pets/${petId}`, {
      method: 'Delete',
      headers: {
         'Content-Type': 'application/json',
         'X-Authorization': accessToken
      },
   }).then(res => res.json());
};

export const like = (petId, pet, accessToken) => {
   return fetch(`${baseUrl}/pets/${petId}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         'X-Authorization': accessToken
      },
      body: JSON.stringify(pet)
   }).then(res => res.json())
   .catch(err =>{
       console.log(err);
      }); 
};

