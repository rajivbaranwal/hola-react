/**
 * <div id="parent">
 * <div id="child">
 * <h1></h1>
 * </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "i am h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "i am h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "abc" },
  "i am h1 tag"
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
