import { Error400 } from "./Error400";
import { Error500 } from "./Error500";
import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router"
import './ErrorBoundary.scss';

type PropTypes = {
  children: React.ReactNode
};

export function ErrorBoundary() {
  const errorJson = useRouteError()

  const errorObj = JSON.parse(errorJson?.message)

  if (errorObj >= 400 && errorObj.status < 500) return <Error400/>
  else if (errorObj.status >= 500) return <Error500/>
}