import { Error400 } from "./Error400";
import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router"
import './ErrorBoundary.scss';

type PropTypes = {
  children: React.ReactNode
};

export function ErrorBoundary() {
  const error = useRouteError()
    console.log(error) 
    return <Error400/>
}