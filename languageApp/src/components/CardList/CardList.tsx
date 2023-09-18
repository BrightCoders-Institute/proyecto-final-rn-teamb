import React from 'react';
import {FlatList, Text} from 'react-native';
//components
import {ToReadCard} from '../ToReadCard/ToReadCard';
import {ListeningCard} from '../ListeningCard/ListeningCard';
//interfaces
import {PodcastEpisode} from '../../interfaces/CardsInterfaces';
import {Track} from '../../interfaces/CardsInterfaces';
import {Story} from '../../interfaces/CardsInterfaces';
//navigation
import {useRoute} from '@react-navigation/native';
import {NavigationProps} from '../../interfaces/NavigationInterface';

interface CardListProps {
  musicData?: Track[];
  podcastData?: PodcastEpisode[];
  storyData?: Story[];
}

const ToReadList: React.FC<{data: Story[]} & NavigationProps> = ({
  data,
  navigation,
}) => (
  <FlatList
    data={data}
    renderItem={({item}) => (
      <ToReadCard
        {...item}
        onPress={() =>
          navigation.navigate('StoryScreen', {
            title: item.title,
            author: item.author,
            story: item.story,
          })
        }
      />
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

const PodcastList: React.FC<{data: PodcastEpisode[]}> = ({data}) => (
  <Text>song.name</Text>
);

const MusicList: React.FC<{data: Track[]}> = ({data}) => {
  console.log('CARD LIST');
  console.log(data);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ListeningCard song={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const CardList: React.FC<CardListProps & NavigationProps> = ({
  musicData,
  podcastData,
  storyData,
  navigation,
}) => {
  const route = useRoute();

  if (route.name === 'ToReadScreen') {
    return <ToReadList data={storyData || []} navigation={navigation} />;
  } else if (route.name === 'PodcastScreen') {
    return <PodcastList data={podcastData || []} />;
  } else {
    return <MusicList data={musicData || []} />;
  }
};

export default CardList;
