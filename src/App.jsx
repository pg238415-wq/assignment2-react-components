import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  const cards = [
    {
      id: 1,
      title: "HTML & CSS",
      description: "Building responsive and attractive web pages.",
      category: "Frontend"
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Learning modern JavaScript and interactive web features.",
      category: "Programming"
    },
    {
      id: 3,
      title: "React.js",
      description: "Creating reusable components and dynamic interfaces.",
      category: "React"
    }
  ];

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="app">
      <Header />

      <main>
        {/* Home Section */}
        <section className="hero" id="home">
          <h1>React Components Practice</h1>

          <p>
            Learning reusable components, props, state, events,
            and dynamic rendering.
          </p>

          <Button
            text={`You clicked ${count} times`}
            onClick={handleClick}
          />
        </section>

        {/* Cards Section */}
        <section className="cards-section" id="cards">
          <h2>Reusable Cards</h2>

          <div className="cards-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                category={card.category}
              />
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="form-section" id="form">
          <Form />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;