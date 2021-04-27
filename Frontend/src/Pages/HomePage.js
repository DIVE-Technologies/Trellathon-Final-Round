import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Heatmap} from 'react-native-maps';
import marker from '../../assets/Artboard 13@3x_Black.png';

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 28.7041,
            longitude: 77.1025,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {/* <Marker
            key="1"
            coordinate={{latitude: 28.9845, longitude: 77.7064}}
            title="Home"
            description="This is my Home"
            image={require('../../assets/Artboard 13@3x_Black.png')}
          /> */}
          <Heatmap
            style={styles.map}
            radius={50}
            opacity={0.7}
            points={[
              {
                latitude: 28.7041,
                longitude: 77.1025,
                weight: 5,
              },
              {
                latitude: 28.9845,
                longitude: 77.7064,
                weight: 1,
              },
            ]}
            gradient={{
                colors: ["red", "yellow", "green"],
                startPoints: [0.01, 0.33, 0.66],
                colorMapSize: 200
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomePage;
