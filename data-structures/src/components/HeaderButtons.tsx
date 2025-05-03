import { Button, SimpleGrid } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <SimpleGrid cols={8}>
      <Button onClick={() => navigate("/ds1")}>ds1</Button>
      <Button onClick={() => navigate("/ds2")}>ds2</Button>
      <Button onClick={() => navigate("/ds3")}>ds3</Button>
      <Button onClick={() => navigate("/ds4")}>ds4</Button>
      <Button onClick={() => navigate("/ds5")}>ds5</Button>
      <Button onClick={() => navigate("/ds6")}>ds6</Button>
      <Button onClick={() => navigate("/ds7")}>ds7</Button>
      <Button onClick={() => navigate("/ds8")}>ds8</Button>
    </SimpleGrid>
  );
}
