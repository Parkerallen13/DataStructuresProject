import {Text} from '@mantine/core';
import HeaderButtons from "../components/HeaderButtons";
import classes from '../App.module.css'

export default function HomePage() {
  return (
    <div className={classes.homeContainer}>
      <Text className={classes.headerText}>Data Structures</Text>
    <HeaderButtons/>
    <Text className={classes.bodyText}>filler text</Text>

    </div>
  )
}
