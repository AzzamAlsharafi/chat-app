import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { Login } from "../pocketbase";
import InputField from "./InputField";
import InputPasswordField from "./InputPasswordField";

export default function LogInButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPassVisible, setPassVisible] = useBoolean();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loginUser = () => {
    Login(username, password);
    onClose()
  };

  return (
    <>
      <Button rounded={"full"} px={6} onClick={onOpen} colorScheme="blue">
        Log In
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5}>
              <InputField
                title="Username / Email"
                minimum={0}
                value={username}
                setValue={setUsername}
              />

              <InputPasswordField
                title="Password"
                value={password}
                minimum={0}
                setValue={setPassword}
                isVisible={isPassVisible}
                toggleVisible={setPassVisible.toggle}
              />

              <Center>
                <Button
                  my={5}
                  px={20}
                  rounded={"full"}
                  colorScheme="blue"
                  onClick={loginUser}
                >
                  Log In
                </Button>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}