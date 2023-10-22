import React, { useEffect, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen() {
  const secondVideo = useRef(null);
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  useEffect(() => {
    // QR kod tarandığında ikinci videoyu otomatik olarak oynat
    playSecondVideo();
  }, []);

  const playSecondVideo = async () => {
    if (secondVideo && secondVideo.current) {
      await secondVideo.current.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={secondVideo}
        style={styles.video}
        source={require("../video/halilim_video.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttons}>
        <Button title="Play from 5s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
        <Button
          title={statusSecondVideo.isLooping ? "Set to not loop" : "Set is loop"}
          onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
