import { z } from "zod";

export const SafeParse = () => {
  const MessageSchema = z.string();
  const ArraySchema = z.array(MessageSchema);

  const arr = ["1", "2"];
  const arr2 = ["1", "2", "7", 3];
  const arr3 = undefined;
  const validationResult = ArraySchema.safeParse(arr2);

  if (validationResult.success) {
    console.log(validationResult.data);
  } else {
    console.log(validationResult.error.issues);
    console.log(validationResult.error.issues.map((i) => i.message));
  }

  return (
    <div>
      <h1>SafeParse</h1>
      <div>
        {validationResult.success
          ? validationResult.data.map((i) => <h3 key={i}>{i}</h3>)
          : validationResult.error.issues.map((i) => i.message)}
      </div>
    </div>
  );
};
