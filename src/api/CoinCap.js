import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function GetApi(asset, filter, quantity) {
  /*
  { asset } -->  [Obrigatório]
  Pastas da API: '/assets', '/market', ...
  { asset Exemplo} --> [GetApi('/assets', null, null) ou GetApi('/assets')]

  { filter } -->   [Opcional | Quando não nulo, { quantity } é ignorado]
  Caso queira filtar um elemento específico. Funcionando para '/assets'.
  { filter Exemplo} --> [GetApi('/assets', 'BTC', null) ou GetApi('/assets', 'BTC')]
  
  { quantity } --> [Opcional | Quando não nulo, resume-se que o { filter } seja nulo]
  Filtro de array por quantidade: 10 resulta nos 10 primeiros itens do array.
  { quantity Exemplo} --> [GetApi('/assets', null, 10)]
  */

  const [post, setPost] = React.useState(null);
  const baseURL = `https://api.coincap.io/v2${asset}`;

  console.log(asset, filter, quantity)

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {

      if (filter == null && quantity == null) {
        setPost(response.data.data)
        return
      }

      if (filter) {
        response.data.data.forEach(element => {
          if (element.symbol == filter) {
            setPost(element)
          }
        })
        return
      }

      if (quantity) {
        let slicedArray = response.data.data.slice(0, quantity)
        setPost(slicedArray)
        return
      }
    });
  }, []);

  if (!post) return null;

  return post
}