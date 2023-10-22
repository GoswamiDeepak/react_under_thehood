function customRender(reactElement, container) {
  /*
  //Noob type
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
  */
 
  //Pro type
  const domElement = document.createElement(reactElement.type); //--creaating the element
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

//
const reactElement = {
  type: "a",
  props: {
    href: "https://react.dev",
    target: "_blank",
  },
  children: "click me to visit react documentation",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
