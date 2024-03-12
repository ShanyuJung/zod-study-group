import { FormEvent, useState } from "react";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(2, { message: "至少要兩個字" }),
  email: z.string().email(),
  age: z.number().min(20),
});

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(18);
  const [error, setError] = useState<{
    name?: string[];
    email?: string[];
    age?: string[];
  } | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const result = UserSchema.safeParse({ name, email, age });

    if (!result.success) {
      setError(result.error.flatten().fieldErrors);
      return;
    }
    setTimeout(() => {
      window.alert("成功");
    }, 500);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <h3>name:</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && error.name && (
            <h3 style={{ color: "red" }}>{error.name}</h3>
          )}
        </div>
        <div className="input-container">
          <h3>email:</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && error.email && (
            <h3 style={{ color: "red" }}>{error.email}</h3>
          )}
        </div>
        <div className="input-container">
          <h3>age:</h3>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
          {error && error.age && <h3 style={{ color: "red" }}>{error.age}</h3>}
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};
