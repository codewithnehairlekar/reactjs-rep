import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Ooops</h2>
      <h3>Something Went Wrong</h3>
      <h4>
        {error.status}:{error.statusText}
      </h4>
    </div>
  );
};
export default ErrorPage;
