import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Outets from "./Outets";
import { Home, About, CurrencyConverter,Todolist } from "./component";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // console.log("main", useCurrencyInfo());

  // const urlmain = async (currency = "usd") => {
  //   const responce = await fetch(
  //     `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
  //   );

  //   return responce.json();
  // };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outets />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about/:id",
          element: <About />,
        },
        // {
        //   path: "/currency-convertor",
        //   loader: urlmain,
        //   element: <CurrencyConverter />,
        // },
        {
          path: "currency-convertor",
          element: <CurrencyConverter />,
        },
        {
          path: "todo-list",
          element: <Todolist />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
