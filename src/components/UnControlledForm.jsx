import { useRef } from 'react';

function UnControlledForm() {
  const inputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputRef.current.value}`);
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <h1>UnControlled Form</h1>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default UnControlledForm;
