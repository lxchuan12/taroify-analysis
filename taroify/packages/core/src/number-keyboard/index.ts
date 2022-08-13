import NumberKeyboardElement, { NumberKeyboardProps } from "./number-keyboard"
import NumberKeyboardButton from "./number-keyboard-button"
import NumberKeyboardHeader from "./number-keyboard-header"
import NumberKeyboardKey from "./number-keyboard-key"
import NumberKeyboardSidebar from "./number-keyboard-sidebar"

interface NumberKeyboardInterface {
  (props: NumberKeyboardProps): JSX.Element

  Key: typeof NumberKeyboardKey
  Button: typeof NumberKeyboardButton
  Header: typeof NumberKeyboardHeader
  Sidebar: typeof NumberKeyboardSidebar
}

const NumberKeyboard = NumberKeyboardElement as NumberKeyboardInterface

NumberKeyboard.Key = NumberKeyboardKey
NumberKeyboard.Button = NumberKeyboardButton
NumberKeyboard.Header = NumberKeyboardHeader
NumberKeyboard.Sidebar = NumberKeyboardSidebar

export default NumberKeyboard
