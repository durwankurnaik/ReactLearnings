type GreetProps = {
  name: string;
  num?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <>
      <div>
        Welcome {props.name} to the Typescript-React world!!! You really need
        {props.num}
      </div>
    </>
  );
};
