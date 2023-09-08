import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';

interface SearchBarComponentProps {
  wordData: (word: string, definition: string | string[]) => void;
}

const SearchWordsBar: React.FC<SearchBarComponentProps> = ({wordData}) => {
  const [search, setSearch] = useState<string>('');

  const fetchWordDefinition = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        const word = response.data[0].word;
        const meanings = response.data[0].meanings;

        if (meanings && meanings.length > 0) {
          const definitions: string[] = [];

          meanings.forEach((currentMeaning: any) => {
            if (
              currentMeaning.definitions &&
              currentMeaning.definitions.length > 0
            ) {
              currentMeaning.definitions.forEach((definitionObj: any) => {
                const definition = definitionObj.definition;
                if (definition) {
                  definitions.push(definition);
                }
              });
            }
          });

          if (definitions.length > 0) {
            wordData(word, definitions);
          } else {
            wordData(word, 'No definitions found');
          }
        } else {
          wordData(word, 'No definitions found');
        }
      } else {
        wordData(search, 'Word not found');
      }
    } catch (error) {
      wordData(
        search,
        "We couldn't find a definition for this word, or there might be a spelling error.",
      );
    }
  };

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
        onSubmitEditing={fetchWordDefinition}
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
