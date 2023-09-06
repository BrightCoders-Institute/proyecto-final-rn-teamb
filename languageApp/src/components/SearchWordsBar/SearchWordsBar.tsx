import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';

type SearchBarComponentProps = {};

const SearchWordsBar: React.FC<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState<string>('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        containerStyle={{backgroundColor: '#012030', borderRadius: 6}}
        inputContainerStyle={{backgroundColor: '#023A57', borderRadius: 6}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SearchWordsBar;
