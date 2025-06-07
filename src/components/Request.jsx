import { useEffect, useState } from 'react';

function Request() {
  const [data, setData] = useState(null);

  const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';
  const productId = 1;
  const company = 'AutoPlus';

  useEffect(() => {
    fetch(`https://car-dealer-app.botdepo.shop/api/products/product/${productId}/${company}`, {
      headers: {
        'X-API-Key': apiKey
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);

      })
      .catch((error) => {
        console.error('Ошибка:', error);
      });
  }, []);


  return (

    <>
    <h1>Request With useEffect</h1>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
          <p>Trade: {data.make}</p>
          <p>Model: {data.model}</p>
          <p>Year: {data.year}</p>
          <img src={data.photoList?.[0]} alt={data.name} width={300} />
        </div>
      ) : (
        <p>Np data</p>
      )}
    </>
  );
}

export default Request;
