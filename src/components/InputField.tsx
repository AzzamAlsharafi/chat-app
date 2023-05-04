import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface InputFieldProps {
  title: string;
  value: string;
  setValue: (value: string) => void;
}

export default function InputField({ title, value, setValue }: InputFieldProps) {
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