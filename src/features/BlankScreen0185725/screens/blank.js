import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_14: "", TextInput_16: "" }

  render = () => (
    <View>
      <Image source={{ uri: "https://via.placeholder.com/150" }} />
      <Text>Usuario</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_14}
        onChangeText={nextValue => this.setState({ TextInput_14: nextValue })}
      />
      <Text>Contraseña</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_16}
        onChangeText={nextValue => this.setState({ TextInput_16: nextValue })}
      />
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("BlankScreen1185726")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_3: {},
  Text_5: {},
  TextInput_14: {},
  Text_9: {},
  TextInput_16: {},
  Button_12: {}
})
