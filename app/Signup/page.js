import { useRouter } from 'next/router';
import React, { useState } from 'react'

const page = () => {
    const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      router.push("/login");
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Sign up</legend>

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="My awesome page" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="my-awesome-page" />

                <label className="label">Password</label>
                <input type="text" className="input" placeholder="Name" />
                <button className="btn btn-neutral mt-4">Sign up</button>
            </fieldset>
        </div>
    )
}

export default page
