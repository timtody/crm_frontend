import React, { useEffect, useState } from "react";
import {
  chakra,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Container,
  Stack,
  Box,
  Button,
  Center,
} from "@chakra-ui/react";
import _ from "lodash";

import Form from "./Form";

import { useForm } from "react-hook-form";

export default function CustomerDetail(props) {
  const [state, setState] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  //console.log(watch("example"));

  useEffect(() => {
    fetch("http://127.0.0.1:8000/customers/" + props.match.params.id)
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  return (
    <Center>
      <Box borderWidth="1px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel>Branch</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            //value={state.companytype?.companytype || ""}
            ref={register}
            defaultValue={state.companytype?.companytype || ""}
            name="companyType"
          />
          <FormLabel>Name</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            defaultValue={state.companyname || ""}
            ref={register({ required: true })}
            name="companyName"
          />
          <FormLabel>Street</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            defaultValue={state.street || ""}
            ref={register({ required: true })}
            name="street"
          />
          <FormLabel>StreetNo</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            defaultValue={state.house || ""}
            ref={register({ required: true })}
            name="streetNo"
          />
          <FormLabel>City</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            defaultValue={state.city || ""}
            ref={register({ required: true })}
            name="city"
          />
          <FormLabel>EmployeeName</FormLabel>
          <Input
            variant="flushed"
            //placeholder="Flushed"
            defaultValue={state.employee?.codename || ""}
            ref={register({ required: true })}
            name="codeName"
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Center>
  );
}
