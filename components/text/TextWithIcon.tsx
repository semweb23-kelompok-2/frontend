import { Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface textWithIconProps {
  icon: string;
  children: string;
  color?: string;
}

function TextWithIcon({ icon, children, color = "white" }: textWithIconProps) {
  return (
    <Flex gap="2" py="1" alignItems="center" color={color}>
      <Text>{children}</Text>
      <Icon icon={icon} width="24" height="24" />
    </Flex>
  );
}

export default TextWithIcon;
