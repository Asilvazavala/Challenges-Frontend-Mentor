"use client";

import SectionContainer from "@/app/components/Shared/SectionContainer";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useNotifications } from "../../../hooks/useNotifications";

const LoginPage = () => {
  const router = useRouter();

  const { notifySucess, notifyWarning } = useNotifications();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      notifyWarning(`${res.error}`);
    } else {
      notifySucess("Successful login");
      router.push("/");
      router.refresh();
    }
  });

  return (
    <SectionContainer className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-full md:w-1/2">
        {error !== "" && (
          <span className="bg-red-500 text-lg text-white p-2 rounded w-fit">
            {error}
          </span>
        )}
        <h1 className="text-VeryDarkBlue font-bold text-4xl my-4">Log in</h1>

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
          {errors.email && errors.email.message && (
            <span className="text-red-500 text-xs">
              {errors.email.message as React.ReactNode}
            </span>
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
          {errors.password && errors.password.message && (
            <span className="text-red-500 text-xs">
              {errors.password.message as React.ReactNode}
            </span>
          )}
        </label>

        <button className="w-full mt-2 bg-Cyan font-bold text-white p-3 rounded-lg lg:hover:brightness-125 transition">
          Log in
        </button>
      </form>
    </SectionContainer>
  );
};

export default LoginPage;
