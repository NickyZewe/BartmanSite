import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactHero from "../components/ContactHero";

const InqueryPage = () => {
  const [, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47d5dbd1-8b19-4fe8-ba01-2f2873e856e8");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      navigate("/success");
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <Flex px={10} py={5}>
      <VStack justify={"center"} align={"left"} p={5}>
        <ContactHero />
        <Box border={"solid"} borderColor={"#c7c7c7"} p={5} borderRadius={20}>
          <VStack justify={"center"} align={"left"}>
            <Heading fontFamily={"open-sans"} fontWeight={"light"}>
              {" "}
              Let's Connect{" "}
            </Heading>
            <Text>
              Whether you are a fellow filmmaker, have a project in mind, or
              someone interested in discussing creative opportunities, don't
              hesitate to reach out.
            </Text>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="access_key" value="" />

              <FormControl isRequired color={"none"}>
                <FormLabel pt={5}>First name</FormLabel>
                <Input
                  variant={"flushed"}
                  placeholder="First name"
                  type="text"
                  name=" First name"
                />
                <FormLabel pt={5}>Last name</FormLabel>
                <Input
                  variant={"flushed"}
                  placeholder="Last name"
                  type="text"
                  name=" Last name"
                />
                <FormLabel pt={5}>Email</FormLabel>
                <Input
                  variant={"flushed"}
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <FormLabel pt={5}>Message</FormLabel>
                <Textarea
                  pt={5}
                  name="message"
                  placeholder="Type Here"
                  required
                  variant={"flushed"}
                ></Textarea>
              </FormControl>
              <Spacer />
              <Input
                variant={"flushed"}
                type="submit"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "transform .15s ease-in",
                  cursor: "pointer",
                }}
              />
            </form>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
};

export default InqueryPage;
