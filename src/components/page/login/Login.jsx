import React, { useContext, useEffect, useLayoutEffect } from "react";
import {
  Button,
  Center,
  LightMode,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputControl from "../../shared/ui/InputControl";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../../context/http-service/serviceContext";

function LoginPage() {
  const { authService, setUserId } = useContext(ServiceContext);
  const toast = useToast()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function submit(userForm) {
      authService.login(userForm)
      .then(user => setUserId(user.id))
      .catch(e => {        
        toast({
          title: e.message,
          status: "error",
          isClosable: true,
        })
      })
   
     
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
              name="username"
              label="Account name"
              placeholder="Account name..."
              rules={{ required: true }}
            />

            <InputControl
              control={control}
              name="email"
              label="email"
              placeholder="e-mail..."
              type="email"
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
