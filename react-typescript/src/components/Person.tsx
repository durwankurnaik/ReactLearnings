type PersonInfo = {
  name: {
    first: string;
    last: string;
  };
  age: number;
};

export const Person = (props: PersonInfo) => {
  return (
    <div>
      My name is {props.name.first} {props.name.last} and I am {props.age} years
      old
    </div>
  );
};
