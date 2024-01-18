"use client";

import SectionContainer from "@/app/components/Shared/SectionContainer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useNotifications } from "../../../hooks/useNotifications";
import { useLinks } from "../../../context/LinksContext";
import Loading from "@/app/components/Loading";

const RegisterPage = () => {
  const router = useRouter();

  const { isLoading, setIsLoading } = useLinks();

  const { notifySucess, notifyWarning } = useNotifications();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return notifyWarning("Passwords do not match");
    }

    try {
      setIsLoading(true);

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
        notifySucess("User created successfully");
        router.push("/auth/login");
      } else if (res.status === 401) {
        notifyWarning("Email already exists, try with another");
      } else {
        notifyWarning("Username already exists, try with another");
      }
    } catch (error) {
      notifyWarning(`${error}`);
    } finally {
      setIsLoading(false);
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
          {errors.username && errors.username.message && (
            <span className="text-red-500 text-xs">
              {errors.username.message as React.ReactNode}
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
          {errors.confirmPassword && errors.confirmPassword.message && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword.message as React.ReactNode}
            </span>
          )}
        </label>

        <button
          disabled={isLoading}
          className="w-full my-2 bg-Cyan font-bold text-white p-3 rounded-lg lg:hover:brightness-125 transition"
        >
          Register
        </button>
        {isLoading && <Loading />}
      </form>
    </SectionContainer>
  );
};

export default RegisterPage;
