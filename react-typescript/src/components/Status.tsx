type StatusProp = {
  status: "fetching" | "fetched" | "error";
};

export const Status = (props: StatusProp) => {
  let message;
  if (props.status === "fetching") {
    message = "Loading...";
  } else if (props.status === "fetched") {
    message = "Data fetched successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <h2>Status - {message}</h2>
  );
};
