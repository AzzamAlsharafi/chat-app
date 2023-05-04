import {
  Button,
  Center,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
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

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { NewUser } from "../pocketbase";

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
    onClose()
  };

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
                setValue={setUsername}
              />

              <InputField title="Full Name" value={name} setValue={setName} />

              <InputField title="Email" value={email} setValue={setEmail} />

              <InputPasswordField
                title="Password"
                value={password}
                setValue={setPassword}
                isVisible={isPassVisible}
                toggleVisible={setPassVisible.toggle}
              />

              <InputPasswordField
                title="Confirm Password"
                value={passwordConfirm}
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

interface InputFieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

function InputField({ title, value, setValue }: InputFieldProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={title}>{title}</FormLabel>
      <Input
        id={title}
        placeholder={title}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormControl>
  );
}

interface InputPasswordFieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
  isVisible: boolean;
  toggleVisible: () => void;
}

function InputPasswordField({
  title,
  value,
  setValue,
  isVisible,
  toggleVisible,
}: InputPasswordFieldProps) {
  return (
    <FormControl>
      <FormLabel htmlFor={title}>{title}</FormLabel>
      <InputGroup>
        <Input
          id={title}
          type={isVisible ? "text" : "password"}
          placeholder={title}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <InputRightElement w="12">
          <IconButton
            h="7"
            size="sm"
            onClick={toggleVisible}
            icon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
            aria-label={isVisible ? "Show password" : "Hide password"}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
