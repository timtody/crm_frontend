import React from "react";
import { chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ({ children }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map((child) => {
        return React.cloneElement(child, { ref: register });
      })}
    </chakra.form>
  );
}
