import { z } from "zod";

export const Infer = () => {
  const hobbies = ["Sleep", "Eat", "Drink"] as const;
  const UserSchema = z
    .object({
      username: z.string(),
      age: z.number().optional(),
      hobbies: z.enum(hobbies),
    })
    .omit({ hobbies: true });
  type User = z.infer<typeof UserSchema>;

  const user: User = {
    username: "userABC",
  };
  const user2 = {
    username: "userABC",
    hobbies: "Sleep",
    age: 20,
    location: "Taipei",
  };

  const result = UserSchema.safeParse(user2);
  console.log(result.success && result.data);

  return (
    <div>
      <h1>Infer</h1>
      <h2>{user.username}</h2>
      <h2>{user.age ?? "lack of age"}</h2>
    </div>
  );
};
