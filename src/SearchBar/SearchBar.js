import React from 'react';
import {View, TextInput} from 'react-native';
//style
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.inputview}>
      <TextInput placeholder={'ARA....'} onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
