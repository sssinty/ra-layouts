import { useState } from "react"
import {products} from './products'
import IconSwitch from '../components/IconSwitch'
import CardsView from "./CardsView"
import ListView from "./ListView"

function Store() {
  const [state, setState] = useState(true)

  const iconSwicth = () => {
    setState(!state);
  }
  return (
  <>
    <IconSwitch icon={state} onSwitch={iconSwicth} />
    {state ? <CardsView cards={products} /> : <ListView item={products} />}
  </>
  ) 
}
export default Store;