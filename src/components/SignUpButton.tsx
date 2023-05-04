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

import { Login, NewUser } from "../pocketbase";
import InputField from "./InputField";
import InputPasswordField from "./InputPasswordField";

export default function SignUpButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPassVisible, setPassVisible] = useBoolean();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const createUser = () => {
    NewUser({ username, email, password, passwordConfirm, name });
  };

  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return (
    <>
      <Button rounded={"full"} px={6} onClick={onOpen}>
        Sign up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={5}>
              <InputField
                title="Username"
                value={username}
                minimum={3}
                setValue={setUsername}
              />

              <InputField
                title="Full Name"
                value={name}
                minimum={1}
                setValue={setName}
              />

              <InputField
                title="Email"
                value={email}
                minimum={1}
                matchRe={re}
                setValue={setEmail}
              />

              <InputPasswordField
                title="Password"
                value={password}
                minimum={8}
                setValue={setPassword}
                isVisible={isPassVisible}
                toggleVisible={setPassVisible.toggle}
              />

              <InputPasswordField
                title="Confirm Password"
                value={passwordConfirm}
                minimum={8}
                match={password}
                setValue={setPasswordConfirm}
                isVisible={isPassVisible}
                toggleVisible={setPassVisible.toggle}
              />

              <Center>
                <Button
                  my={5}
                  px={20}
                  rounded={"full"}
                  colorScheme="blue"
                  onClick={createUser}
                >
                  Sign up
                </Button>
              </Center>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
