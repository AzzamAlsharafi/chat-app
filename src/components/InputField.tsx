import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface InputFieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

export function InputField({ title, value, setValue }: InputFieldProps) {
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

export function InputPasswordField({
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
