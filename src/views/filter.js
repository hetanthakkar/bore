import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;

export default class filter extends Component {
  state = {
    pressed1: true,
    pressed2: false,
    button1: "#00d2d3",
    button2: "white",
    button3: "white",
    button4: "white",
    button5: "white",
    text1: "white",
    text2: "black",
    text3: "black",
    text4: "black",
    text5: "black",
  };
  brands = async () => {
    console.log(this.state.pressed1);
    await this.setState({ pressed1: !this.state.pressed1 });
    console.log(this.state.pressed1);

    if (this.state.pressed1) {
      this.setState({ button1: "#00d2d3" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ text1: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ pressed5: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
    }
  };

  price = async () => {
    console.log(this.state.pressed2);
    await this.setState({ pressed2: !this.state.pressed2 });
    console.log(this.state.pressed2);

    if (this.state.pressed2) {
      this.setState({ button2: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ text2: "white" });
      this.setState({ text1: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
    }
  };

  color = async () => {
    await this.setState({ pressed3: !this.state.pressed3 });
    if (this.state.pressed3) {
      this.setState({ button3: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button4: "white" });
      this.setState({ button5: "white" });
      this.setState({ text3: "white" });
      this.setState({ text2: "black" });
      this.setState({ text1: "black" });
      this.setState({ text4: "black" });
      this.setState({ text5: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed5: false });
      this.setState({ pressed4: false });
    }
  };

  gcolor = async () => {
    await this.setState({ pressed4: !this.state.pressed4 });
    if (this.state.pressed4) {
      this.setState({ button4: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button5: "white" });
      this.setState({ text4: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text1: "black" });
      this.setState({ text5: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed5: false });
    }
  };

  width = async () => {
    await this.setState({ pressed5: !this.state.pressed5 });
    if (this.state.pressed5) {
      this.setState({ button5: "#00d2d3" });
      this.setState({ button1: "white" });
      this.setState({ button2: "white" });
      this.setState({ button3: "white" });
      this.setState({ button4: "white" });
      this.setState({ text5: "white" });
      this.setState({ text2: "black" });
      this.setState({ text3: "black" });
      this.setState({ text4: "black" });
      this.setState({ text1: "black" });
      this.setState({ pressed1: false });
      this.setState({ pressed2: false });
      this.setState({ pressed3: false });
      this.setState({ pressed4: false });
    }
  };
  renderify = () => {
    return (
      <View>
        <RadioForm
          style={styles.button}
          buttonSize={12}
          formHorizontal={true}
          labelHorizontal={true}
          radio_props={radio_props}
          labelStyle={{
            fontSize: 20,
            color: "black",
            justifyContent: "space-around",
          }}
          initial={-1}
          onPress={(value) => {
            this.setState({ gender: value });
          }}
        >
          <RadioButtonInput
            borderWidth={1}
            buttonInnerColor={"red"}
            buttonSize={20}
            buttonOuterSize={80}
            buttonStyle={{}}
            buttonWrapStyle={{
              marginLeft: 10,
            }}
          />
        </RadioForm>
      </View>
    );
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1.2,
            backgroundColor: "white",
            marginTop: screenHeight * 6,
            height: screenHeight * 100,
            borderWidth: 0.5,
            borderColor: "black",
            borderTopWidth: 0,
          }}
        >
          <TouchableOpacity
            onPress={this.brands}
            style={{
              //   borderWidth: 2,
              width: screenWidth * 38,
              alignSelf: "center",
              padding: 10,
              backgroundColor: this.state.button1,
              height: screenHeight * 7,
              borderRightColor: "black",
              borderRightWidth: 0.5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: this.state.text1,
              }}
            >
              Brands
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.price}
            style={{
              //   borderWidth: 2,
              width: screenWidth * 38,
              alignSelf: "center",
              padding: 10,
              backgroundColor: this.state.button2,
              height: screenHeight * 7,

              borderRightColor: "black",
              borderRightWidth: 0.5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: this.state.text2,
                fontSize: 18,
              }}
            >
              Price
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.color}
            style={{
              //   borderWidth: 2,
              width: screenWidth * 38,
              alignSelf: "center",
              padding: 10,
              backgroundColor: this.state.button3,
              height: screenHeight * 7,

              borderRightColor: "black",
              borderRightWidth: 0.5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: this.state.text3,
                fontSize: 18,
              }}
            >
              Frame Color
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.gcolor}
            style={{
              //   borderWidth: 2,
              width: screenWidth * 38,
              alignSelf: "center",
              padding: 10,
              backgroundColor: this.state.button4,
              height: screenHeight * 7,

              borderRightColor: "black",
              borderRightWidth: 0.5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: this.state.text4,
                fontSize: 18,
              }}
            >
              Glass Color
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.width}
            style={{
              //   borderWidth: 2,
              width: screenWidth * 38,
              alignSelf: "center",
              padding: 10,
              backgroundColor: this.state.button5,
              height: screenHeight * 7,

              borderRightColor: "black",
              borderRightWidth: 0.5,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: this.state.text5,
                fontSize: 18,
              }}
            >
              Frame Width
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>{this.renderify()}</View>
      </View>
    );
  }
}
