import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,

    alignItems: 'center',
  },
  image: {height: 100, width: 100, borderRadius: 50},
  innercontainer: {paddingLeft: 8, flex: 1, justifyContent: 'center'},
  deepcontainer: {flexDirection: 'row', flex: 1, alignItems: 'center'},
  titletext: {fontSize: 27, fontWeight: 'bold'},
  artisttext: {},
  yeartext: {marginLeft: 4, color: 'black', fontSize: 12},
  soldoutview: {
    borderWidth: 2.5,
    borderRadius: 7,
    padding: 3,
    borderColor: 'red',
  },
  soldouttext: {fontSize: 17, color: 'red', fontWeight: 'bold'},
  contentcontainer: {flexDirection: 'row'},
});
