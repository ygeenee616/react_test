function ParentComponent() {
  const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  return (
    <ChildComponent {...person} />
  );
}
function ChildComponent({ name, age, city }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}
