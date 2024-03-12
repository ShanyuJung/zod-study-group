import { z } from "zod";

export const Parse = () => {
  const MessageSchema = z.string();
  const message = "Hello World";
  console.log(MessageSchema.parse(message)); // Hello World

  const ArraySchema = z.array(MessageSchema);
  const arr = ["1", "2"];
  const arr2 = ["1", "2", "7", 3];
  const arr3 = undefined;

  const render = (arr: any) => {
    try {
      return ArraySchema.parse(arr).map((i) => <h3 key={i}>{i}</h3>);
    } catch (err) {
      return <h3>Error</h3>;
    }
  };

  return (
    <div>
      <h1>Parse</h1>
      <h2>{MessageSchema.parse(message)}</h2>
      <div>{render(arr)}</div>
      <div>{render(arr2)}</div>
      <div>{render(arr3)}</div>
    </div>
  );
};
