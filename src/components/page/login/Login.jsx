import React, { useEffect, useLayoutEffect } from "react";
import {
  Button,
  Center,
  Heading,
  LightMode,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm, useWatch } from "react-hook-form";
import InputControl from "../../shared/ui/InputControl";
import { Link } from "react-router-dom";

function LoginPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function submit(credentials) {
    console.log("🚀 ~ file: Login.jsx ~ line 23 ~ submit ~ credentials", credentials)
  }

  return (
    <form onSubmit={handleSubmit(submit)} style={{ flex: 1 }}>
      <Center width="full" padding="4" height="full">
        <VStack width="25%" spacing="16">
          <Text fontSize="3xl" textAlign="center">
            Login
          </Text>

          <VStack spacing="4" width="full">
            <InputControl
              control={control}
              name="userNeme"
              label="Account name"
              placeholder="Account name..."
              rules={{ required: true }}
            />

            <InputControl
              control={control}
              name="password"
              label="Password"
              placeholder="Password..."
              type="password"
              rules={{ required: true }}
            />
          </VStack>

          <LightMode>
            <Button colorScheme="teal" type="submit" width="full">
              Login
            </Button>
          </LightMode>
          <Link to="/sign-up">
            <Text fontSize="lg" textAlign="center">
              Create account
            </Text>
          </Link>
        </VStack>
      </Center>
    </form>
  );
}

export default LoginPage;
