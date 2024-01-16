"use client";

import SectionContainer from "@/app/components/Shared/SectionContainer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <SectionContainer className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-full md:w-1/2">
        <h1 className="text-VeryDarkBlue font-bold text-4xl mb-4">Register</h1>

        <label className="text-slate-500 mb-2 block text-sm">
          Username:
          <input
            type="text"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            className="p-3 rounded mb-2 bg-Gray text-VeryDarkBlue w-full"
            placeholder="Username123"
          />
          {errors.username && (
            <span className="text-red-500 text-xs">
              {errors.username.message}
            </span>
          )}
        </label>

        <label className="text-slate-500 mb-2 block text-sm">
          Email:
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="p-3 rounded mb-2 bg-Gray text-VeryDarkBlue w-full"
            placeholder="youremail@mail.com"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </label>

        <label className="text-slate-500 mb-2 block text-sm">
          Password:
          <input
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="p-3 rounded mb-2 bg-Gray text-VeryDarkBlue w-full"
            placeholder="********"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </label>

        <label className="text-slate-500 mb-2 block text-sm">
          Confirm Password:
          <input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
            })}
            className="p-3 rounded mb-2 bg-Gray text-VeryDarkBlue w-full"
            placeholder="********"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <button className="w-full mt-2 bg-Cyan font-bold text-white p-3 rounded-lg lg:hover:brightness-125 transition">
          Register
        </button>
      </form>
    </SectionContainer>
  );
};

export default RegisterPage;
