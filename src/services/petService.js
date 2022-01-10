import { request } from './requester';

// const baseUrl = 'https://softuni-custom-server-test.herokuapp.com/jsonstore';
const baseUrl = 'http://localhost:3030/data';

export const getAll =() => request(`${baseUrl}/pets`);

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