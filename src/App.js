import React, {useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet, View} from 'react-native';
//Data
import music_data from './music-data.json';
//Components
import SongCard from './SongCard';
import SearchBar from './SearchBar';

const App = () => {
  const [list, setList] = useState(music_data);
  const Renderer = ({item}) => <SongCard songs={item} />;
  const RenderSeparator = () => (
    <View
      style={{
        borderColor: '#e0e0e0',
        borderWidth: 1,
      }}
    />
  );
  const SearchChanger = text => {
    const filtersongs = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filtersongs);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={SearchChanger} />
      <FlatList
        data={list}
        renderItem={Renderer}
        ItemSeparatorComponent={RenderSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
