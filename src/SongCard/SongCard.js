import React from 'react';
import {View, Text, Image} from 'react-native';
//style
import styles from './SongCard.style';
const SongCard = ({songs}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: songs.imageUrl,
        }}
      />
      <View style={styles.innercontainer}>
        <Text style={styles.titletext}>{songs.title}</Text>
        <View style={styles.contentcontainer}>
          <View style={styles.deepcontainer}>
            <Text style={styles.artisttext}>{songs.artist}</Text>
            <Text style={styles.yeartext}>{songs.year}</Text>
          </View>
          {songs.isSoldOut === true ? <SoldOut /> : null}
        </View>
      </View>
    </View>
  );
};

const SoldOut = () => {
  return (
    <View style={styles.soldoutview}>
      <Text style={styles.soldouttext}>Tükendi</Text>
    </View>
  );
};

export default SongCard;
