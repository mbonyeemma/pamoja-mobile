import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Img from "../../../assets/profilepic.png";

class SelectableList extends React.Component {
  state = {
    list: items
  };

  renderSelected = (index) => {
    const { list } = this.state;
    const newList = [...list];
    newList[index].selected = !list[index].selected;
    this.setState({
      list: newList
    });
  };

  render() {
    const { list } = this.state;
    const { title } = this.props;
    let c = 0;
    list.map((el) => {
      if (el.selected) {
        c += 1;
      }
      return c;
    });

    return (
      <View>
        <View style={{ flexDirection: "row", alignItems: "space-between" }}>
          <View style={{ width: "50%", borderColor: "orange" }}>
            <Text
              allowFontScaling
              style={{ fontSize: 11 }}
            >
              {title}
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              borderColor: "green",
              alignItems: "flex-end"
            }}
          >
            <Text
              allowFontScaling
              style={{
                fontSize: 11,
                marginRight: "10%",
                color: "rgb(66,133,244)"
              }}
            >
              {`(${c})`}
            </Text>
          </View>
        </View>
        <ScrollView horizontal style={{}}>
          {list.map((el, indx) => (
            <TouchableOpacity onPress={() => this.renderSelected(indx)} key={Math.random()}>
              <View
                style={{
                  alignItems: "center",
                  padding: 5,
                  marginLeft: indx !== 0 ? 3 : 0,
                  backgroundColor: el.selected ? "#ddd" : "white"
                }}
              >
                <Image source={el.image} style={{ width: 50, height: 50 }} />
                {el.selected ? (
                  <Icon
                    name="radio-button-checked"
                    size={15}
                    color="blue"
                    style={{ position: "absolute", right: 0 }}
                  />
                ) : null}
                <Text allowFontScaling style={{ fontSize: 11 }}>
                  {el.item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default SelectableList;

SelectableList.defaultProps = {
  list: items,
  title: "Select Operator",
  switchSelection: () => {}
};

// expected structure of list items to be mapped. Follow this
export const items = [
  {
    item: "james",
    image: Img,
    selected: true
  },
  {
    item: "peter",
    image: Img,
    selected: false
  },
  {
    item: "john",
    image: Img,
    selected: false
  },
  {
    item: "steve",
    image: Img,
    selected: false
  },
  {
    item: "phiona",
    image: Img,
    selected: false
  },
  {
    item: "justine",
    image: Img,
    selected: false
  },
  {
    item: "amina",
    image: Img,
    selected: false
  },
  {
    item: "anitah",
    image: Img,
    selected: false
  },
  {
    item: "kemy",
    image: Img,
    selected: false
  }
];
