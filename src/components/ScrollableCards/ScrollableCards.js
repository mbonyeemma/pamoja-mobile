import React from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import Card from '../Card/Card';

const { width } = Dimensions.get('window');

export default class PagedScroll extends React.Component {
  state = {
    counter: 0
  };

  scroll = (e) => {
    const counter = e.nativeEvent.contentOffset.x / width;
    this.setState({ counter });
  };

  getColor = () => {
    const o = Math.round;
    const r = Math.random;
    const s = 255;
    return `rgba(${o(r() * s)},${o(r() * s)},${o(r() * s)},${r().toFixed(1)})`;
  };

  render() {
    const {
      items = [
        { style: { backgroundColor: 'white' } },
        { style: { backgroundColor: 'red' } },
        { style: { backgroundColor: 'green' } }
      ],
      styles,
      showProgress = true
    } = this.props;
    const { counter } = this.state;
    return (
      <>
        <View style={{ height: width > 320 ? '30%' : '30%' }}>
          <ScrollView
            style={[
              {
                width: '100%',
                position: 'absolute'
              },
              styles
            ]}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={e => this.scroll(e)}
          >
            {items.map((el) => {
              const white = el.style.backgroundColor === 'white';
              return (
                <View
                  key={Math.random()}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width
                  }}
                >
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'white'
                    }}
                  >
                    {white ? (
                      <Card
                        style={[{ height: width > 320 ? 50 : 120 }, el.style]}
                        whiteCard
                      />
                    ) : (
                      <Card
                        style={[
                          { height: width > 320 ? 50 : 120 },
                          el.style || null
                        ]}
                      />
                    )}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        {showProgress ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 2,
              borderColor: 'brown',
              marginTop: width > 320 ? -50 : -20
            }}
          >
            {items.map((_, ind) => (
              <Text
                key={Math.random()}
                style={{
                  fontSize: 65,
                  color: counter === ind ? 'green' : 'rgba(0,0,0,.25)'
                }}
              >
                &#183;
              </Text>
            ))}
          </View>
        ) : null}
      </>
    );
  }
}
