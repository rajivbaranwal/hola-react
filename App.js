const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" },
  "i am h1 tag"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
