import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface InputPasswordFieldProps {
  title: string;
  value: string;
  minimum: number;
  match?: string;
  setValue: (value: string) => void;
  isVisible: boolean;
  toggleVisible: () => void;
}

export default function InputPasswordField({
  title,
  value,
  minimum,
  match,
  setValue,
  isVisible,
  toggleVisible,
}: InputPasswordFieldProps) {
  const isMatch = !match || value === match;
  const isInvalid = minimum > value.length || !isMatch;

  return (
    <FormControl isInvalid={isInvalid}>
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
