import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/actors", element: <Actors /> },
  { path: "/directors", element: <Directors /> },
];

test("renders the Home component on route '/'", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  const { getByText } = render(<RouterProvider router={router} />);
  expect(getByText("Home Page")).toBeInTheDocument();
});
