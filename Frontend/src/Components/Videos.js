import Video from 'react-native-video';
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

class Videso extends React.Component {
  state = {
    videos: [
      {
        url: require('../../assets/SampleVideo_360x240_1mb.mp4'),
      },
      {
        url: '../../../../Videos/SampleVideo_1280x720_2mb.mp4',
      },
      {
        url: '../../../../Videos/SampleVideo_360x240_1mb.mp4',
      },
      {
        url: '../../../../Videos/SampleVideo_360x240_2mb.mp4',
      },
      {
        url: '../../../../Videos/SampleVideo_640x360_1mb.mp4',
      },
      {
        url: '../../../../Videos/SampleVideo_720x480_1mb.mp4',
      },
      {
        url: '../../../../Videos/SampleVideo_720x480_2mb.mp4',
      },
      {
        url: '../../../../Videos/video_20181101_205554.mp4',
      },
    ],
  };

  buffer = () => {
    console.log('In');
    return (
      <ActivityIndicator style={styles.loader} color="black" size="small" />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.videos.map(video => (
          <Video
            key={video.url}
            source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
            onBuffer={this.buffer}
            style={styles.video}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  video: {
    position: 'relative',
    top: 0,
    left: 0,
    height: 110,
    width: 110,
    margin: 4,
    borderColor: 'black',
    borderWidth: 1,
    // backgroundColor: 'green',
  },
  loader: {
    position: 'absolute',
    top: '40',
  },
});

export default Videso;
