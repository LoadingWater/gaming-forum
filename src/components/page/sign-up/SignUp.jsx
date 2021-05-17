import React from "react";
import {
  Button,
  Center,
  LightMode,
  Text,
  VStack,
  Icon,
  HStack
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputControl from "../../shared/ui/InputControl";
import { Link } from "react-router-dom";

function SignUpPage() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
  });

  function submit(credentials) {
    console.log("🚀 ~ file: SignUp.jsx ~ line 21 ~ submit ~ credentials", credentials)
  }

  return (
    <form onSubmit={handleSubmit(submit)} style={{ flex: 1 }}>
      <Center width="full" padding="4">
        <VStack width="25%" spacing="6">
          <Text fontSize="3xl" textAlign="center">
            Sign Up
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
              name="email"
              label="e-mail"
              placeholder="e-mail..."
              type="password"
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
              Create an account
            </Button>
          </LightMode>
            <Link to="/">
              <Text fontSize="lg" textAlign="center">
                I have an account
              </Text>
            </Link>
            <Text fontSize="lg" textAlign="center">
              Create With
            </Text>
            <VStack width="full" flex="1">
              <HStack width="full" justifyContent="space-between">
                <Icon viewBox="0 0 800 800" boxSize="4rem">
                  <circle cx="256" cy="256" fill="#8C9EFF" id="ellipse" r="256"/><path d="M372.4,168.7c0,0-33.3-26.1-72.7-29.1l-3.5,7.1c35.6,8.7,51.9,21.2,69,36.5  c-29.4-15-58.5-29.1-109.1-29.1s-79.7,14.1-109.1,29.1c17.1-15.3,36.5-29.2,69-36.5l-3.5-7.1c-41.3,3.9-72.7,29.1-72.7,29.1  s-37.2,54-43.6,160c37.5,43.3,94.5,43.6,94.5,43.6l11.9-15.9c-20.2-7-43.1-19.6-62.8-42.3c23.5,17.8,59.1,36.4,116.4,36.4  s92.8-18.5,116.4-36.4c-19.7,22.7-42.6,35.3-62.8,42.3l11.9,15.9c0,0,57-0.3,94.5-43.6C409.6,222.7,372.4,168.7,372.4,168.7z   M208.7,299.6c-14.1,0-25.5-13-25.5-29.1s11.4-29.1,25.5-29.1c14.1,0,25.5,13,25.5,29.1S222.8,299.6,208.7,299.6z M303.3,299.6  c-14.1,0-25.5-13-25.5-29.1s11.4-29.1,25.5-29.1s25.5,13,25.5,29.1S317.3,299.6,303.3,299.6z" fill="#FFFFFF" id="logo"/>
                </Icon>
                <Icon viewBox="0 0 400 400" boxSize="3.5rem">
                  <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                </Icon>
                <Icon viewBox="0 0 150 150" boxSize="4rem">
                  <path fill="#78a1d1" d="M89,26c0,0-4.774,1.394-9.157,1.491c-0.075-0.191-0.136-0.388-0.218-0.576	C85.019,23.428,86.5,19,86.5,19s-5.276,2.871-10.191,2.989C73.312,18.915,69.132,17,64.5,17C55.387,17,48,24.387,48,33.5	c0,1.514,0.221,2.973,0.603,4.365C25.768,36.375,14.75,22.141,13.193,20C11.798,22.421,11,25.505,11,28.5	c0,6.163,3.662,11.981,9,14.5c-6,0-9-2-9-2c0,8.502,6.627,15.486,15,16c-1.882,0.668-3.889,1-6,1c-0.907,0-2.213-0.074-3.084-0.203	L17,58c2.669,6.311,9.747,10.797,17,11c-5.571,4.98-13.44,8-21.5,8H11c6,4,14.111,6,22.5,6C59.734,83,81,61.734,81,35.5	c0,0-0.026-2.441-0.035-2.662C86,30,89,26,89,26z"/><path fill="#1f212b" d="M33.5,84c-8.901,0-17.088-2.19-23.055-6.168c-0.367-0.244-0.53-0.7-0.402-1.122	C10.17,76.288,10.56,76,11,76h1.5c6.9,0,13.688-2.247,18.981-6.227c-6.783-1.044-12.906-5.48-15.402-11.384l-0.087-0.211	c-0.137-0.332-0.085-0.714,0.136-0.997c0.221-0.284,0.578-0.426,0.935-0.374C17.916,56.934,19.186,57,20,57	c0.362,0,0.721-0.011,1.077-0.031C14.587,54.55,10,48.272,10,41c0-0.369,0.203-0.708,0.528-0.882	c0.324-0.175,0.718-0.156,1.026,0.05c0.018,0.011,1.556,0.992,4.572,1.513C12.357,38.497,10,33.597,10,28.5	c0-3.153,0.848-6.434,2.327-9c0.169-0.293,0.475-0.481,0.813-0.499c0.345-0.022,0.663,0.137,0.862,0.41	c1.897,2.608,12.269,15.475,33.317,17.352C47.107,35.67,47,34.578,47,33.5C47,23.851,54.851,16,64.5,16	c4.6,0,8.917,1.762,12.206,4.972c4.49-0.256,9.268-2.824,9.316-2.85c0.358-0.195,0.804-0.152,1.12,0.112	c0.314,0.264,0.437,0.694,0.306,1.083c-0.057,0.169-1.277,3.702-5.326,7.015c3.434-0.379,6.56-1.281,6.598-1.292	c0.411-0.119,0.856,0.037,1.103,0.391c0.245,0.354,0.236,0.825-0.022,1.169c-0.123,0.164-2.98,3.932-7.825,6.809	c0.012,0.8,0.025,2.081,0.025,2.081C82,62.243,60.243,84,33.5,84z M14.605,77.935C19.861,80.572,26.434,82,33.5,82	C59.141,82,80,61.141,80,35.5c0,0-0.025-2.404-0.034-2.623c-0.015-0.375,0.182-0.727,0.508-0.911	c2.363-1.332,4.271-2.943,5.601-4.237c-1.757,0.356-4.018,0.712-6.209,0.761c-0.008,0-0.016,0-0.022,0	c-0.41,0-0.78-0.251-0.931-0.634l-0.097-0.261c-0.034-0.094-0.067-0.189-0.107-0.281c-0.195-0.449-0.037-0.974,0.374-1.24	c2.518-1.627,4.136-3.479,5.125-4.923c-2.062,0.829-5.004,1.768-7.874,1.836c-0.313,0.024-0.546-0.102-0.74-0.301	C72.646,19.665,68.706,18,64.5,18C55.953,18,49,24.953,49,33.5c0,1.348,0.191,2.728,0.567,4.101	c0.085,0.312,0.015,0.646-0.189,0.896c-0.205,0.25-0.525,0.382-0.84,0.366c-20.368-1.33-31.542-12.596-35.164-17.002	C12.492,23.877,12,26.222,12,28.5c0,5.753,3.386,11.217,8.427,13.596c0.423,0.2,0.651,0.667,0.549,1.123	C20.874,43.675,20.468,44,20,44c-3.725,0-6.363-0.743-7.911-1.359c0.783,7.179,6.639,12.911,13.972,13.361	c0.475,0.029,0.863,0.388,0.929,0.858s-0.208,0.923-0.656,1.082C24.357,58.645,22.226,59,20,59c-0.395,0-0.899-0.014-1.425-0.044	C21.45,64.167,27.587,67.82,34.028,68c0.41,0.012,0.771,0.271,0.911,0.656c0.141,0.385,0.033,0.816-0.272,1.089	C29.301,74.542,22.085,77.469,14.605,77.935z"/><path fill="#1f212b" d="M52.569,35c-0.256,0-0.475-0.196-0.497-0.457l-0.021-0.218C52.025,34.049,52,33.772,52,33.5	c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,0.241,0.024,0.486,0.048,0.73l0.021,0.226c0.024,0.275-0.18,0.518-0.454,0.542	C52.6,35,52.584,35,52.569,35z"/><path fill="#1f212b" d="M52.681,32c-0.028,0-0.057-0.002-0.085-0.007c-0.271-0.046-0.455-0.305-0.409-0.577	c0.185-1.086,0.509-2.138,0.965-3.126c0.117-0.251,0.415-0.36,0.663-0.245c0.251,0.116,0.36,0.413,0.245,0.664	c-0.419,0.908-0.718,1.875-0.887,2.874C53.131,31.828,52.92,32,52.681,32z"/><path fill="#1f212b" d="M55.581,26c-0.119,0-0.238-0.042-0.334-0.128c-0.205-0.185-0.223-0.5-0.038-0.706	C57.586,22.519,60.973,21,64.5,21c3.073,0,6.033,1.141,8.335,3.212c0.205,0.185,0.222,0.501,0.037,0.706	c-0.187,0.206-0.501,0.223-0.707,0.037C70.048,23.05,67.326,22,64.5,22c-3.244,0-6.359,1.397-8.547,3.834	C55.854,25.944,55.718,26,55.581,26z"/><path fill="#1f212b" d="M33.5,79c-0.205,0-0.407-0.008-0.609-0.016l-0.401-0.014c-0.276-0.006-0.495-0.234-0.49-0.51	c0.006-0.276,0.236-0.474,0.51-0.49l0.42,0.014C33.119,77.992,33.308,78,33.5,78c0.276,0,0.5,0.224,0.5,0.5S33.776,79,33.5,79z"/><path fill="#1f212b" d="M47.5,76.647c-0.208,0-0.401-0.13-0.473-0.337c-0.09-0.261,0.048-0.546,0.31-0.636	c10.88-3.758,19.9-11.917,24.746-22.385c0.116-0.251,0.413-0.36,0.664-0.244s0.359,0.414,0.244,0.664	c-4.96,10.714-14.192,19.063-25.328,22.91C47.609,76.639,47.554,76.647,47.5,76.647z"/><path fill="#1f212b" d="M36.5,78.884c-0.26,0-0.48-0.201-0.499-0.465c-0.019-0.275,0.189-0.515,0.464-0.534	c1.671-0.116,3.333-0.33,4.942-0.634c0.272-0.051,0.533,0.127,0.584,0.398s-0.127,0.533-0.398,0.584	c-1.646,0.312-3.348,0.53-5.058,0.649C36.523,78.884,36.511,78.884,36.5,78.884z"/>
                </Icon>
              </HStack>
            </VStack>
        </VStack>
      </Center>
    </form>
  );
}

export default SignUpPage;
