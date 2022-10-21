import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React from "react";
import FormGroup from "../components/FormGroup";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8
          ? "Password is too short"
          : value.length > 255
          ? "Password is too long"
          : null,
    },
  });

  const handleError = (errors: typeof form.errors) => {
    console.log(errors);

    if (errors.password) {
      showNotification({ message: "Please fill password field", color: "red" });
    }
    if (errors.email) {
      showNotification({
        message: "Please provide a valid email",
        color: "red",
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = form.validate();

    if (errors.hasErrors) {
      return handleError(errors.errors);
    }

    register(form.values);
  };

  return (
    <div>
      <form className="max-w-lg bg-white p-4 border-[1px] border-gray-200 rounded-2xl">
        <FormGroup
          label="Email"
          htmlFor="email"
          inputType="email"
          inputName="email"
          {...form.getInputProps("email")}
        />

        <FormGroup
          label="Password"
          htmlFor="password"
          inputType="password"
          inputName="password"
          {...form.getInputProps("password")}
        />

        <button onClick={submitHandler}>Complete</button>
      </form>
    </div>
  );
};

export default Register;
