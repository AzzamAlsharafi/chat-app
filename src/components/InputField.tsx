import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface InputFieldProps {
  title: string;
  value: string;
  matchRe?: RegExp; 
  minimum: number;
  setValue: (value: string) => void;
}

export default function InputField({ title, value, matchRe, minimum, setValue }: InputFieldProps) {
  const isMatch = !matchRe || value.toLowerCase().match(matchRe);
  const isInvalid = minimum > value.length || !isMatch;
  
  return (
    <FormControl isInvalid={isInvalid}>
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