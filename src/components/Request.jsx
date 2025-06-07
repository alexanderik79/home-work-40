import { useEffect, useState } from 'react';

function Request() {
  const [data, setData] = useState(null);

  const apiKey = '0190ed4a-9d93-4b55-ac50-96123dbc39e6';

  useEffect(() => {
    fetch('https://car-dealer-app.botdepo.shop/api/products/category/1/AutoPlus', {
        headers: {
            'X-API-Key': apiKey
        }
    })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка:', error);

      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </>
  );
}

export default Request;
