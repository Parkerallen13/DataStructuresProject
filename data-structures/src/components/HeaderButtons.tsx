import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "../App.module.css";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div className={classes.homeContainer}>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/AABB")}>AABB</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/LinkedLists")}>LinkedLists</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/BinarySearch")}>BinarySearch</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/Huffman")}>Huffman</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/Graphs")}>Graphs</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/StateMachine")}>StateMachine</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/Voroni")}>Voroni</Button>
      <Button className={classes.buttonsContainer} onClick={() => navigate("/Hashes")}>Hashes</Button>
    </div>
  );
}
