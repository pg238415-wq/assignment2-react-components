import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Thank you, ${name}! Your form has been submitted.`);

    setName("");
    setEmail("");
  }

  return (
    <div className="form-container">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default Form;