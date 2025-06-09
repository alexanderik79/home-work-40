import { useState } from 'react';


const map = {
    'й': 'q', 'ц': 'w', 'у': 'e', 'к': 'r', 'е': 't',
    'н': 'y', 'г': 'u', 'ш': 'i', 'щ': 'o', 'з': 'p',
    'ф': 'a', 'і': 's', 'в': 'd', 'а': 'f', 'п': 'g',
    'р': 'h', 'о': 'j', 'л': 'k', 'д': 'l',
    'я': 'z', 'ч': 'x', 'с': 'c', 'м': 'v', 'и': 'b',
    'т': 'n', 'ь': 'm', 'ї': ']', 'є': '\'', 'х': '[',

    'Й': 'Q', 'Ц': 'W', 'У': 'E', 'К': 'R', 'Е': 'T',
    'Н': 'Y', 'Г': 'U', 'Ш': 'I', 'Щ': 'O', 'З': 'P',
    'Ф': 'A', 'І': 'S', 'В': 'D', 'А': 'F', 'П': 'G',
    'Р': 'H', 'О': 'J', 'Л': 'K', 'Д': 'L',
    'Я': 'Z', 'Ч': 'X', 'С': 'C', 'М': 'V', 'И': 'B',
    'Т': 'N', 'Ь': 'M', 'Ї': '}', 'Є': '"', 'Х': '{',
};

const ukrainianToLatin = (text) =>
  text.split('').map(char => map[char] || char).join('');


function ControlledForm() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);
    setTranslated(ukrainianToLatin(input));
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <textarea
        value={text}
        onChange={handleChange}
        rows="5"
        cols="40"
        placeholder="Пиши крилицею"
      />
      <p>Трансліт: {translated}</p>
    </>
  );
}

export default ControlledForm;