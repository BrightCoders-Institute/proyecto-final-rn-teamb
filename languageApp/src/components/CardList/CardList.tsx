import React from 'react';
import {FlatList} from 'react-native';
//components
import {ToReadCard} from '../ToReadCard/ToReadCard';
import {ListeningCard} from '../ListeningCard/ListeningCard';
//navigation
import {useRoute} from '@react-navigation/native';
//interfaces
import {PodcastEpisode} from '../../interfaces/CardsInterfaces';
import {Track} from '../../interfaces/CardsInterfaces';
import {Story} from '../../interfaces/CardsInterfaces';

interface CardListProps {
  musicData?: Track[];
  podcastData?: PodcastEpisode[];
  storyData?: Story[];
}

const ToReadList: React.FC<{data: Story[]}> = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <ToReadCard {...item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const PodcastList: React.FC<{data: PodcastEpisode[]}> = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <ListeningCard {...item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const MusicList: React.FC<{data: Track[]}> = ({data}) => (
  <FlatList
    data={data}
    renderItem={({item}) => <ListeningCard {...item} />}
    keyExtractor={(item, index) => index.toString()}
  />
);

const CardList: React.FC<CardListProps> = ({
  musicData,
  podcastData,
  storyData,
}) => {
  const route = useRoute();

  if (route.name === 'ToReadScreen') {
    return <ToReadList data={storyData || []} />;
  } else if (route.name === 'PodcastScreen') {
    return <PodcastList data={podcastData || []} />;
  } else {
    return <MusicList data={musicData || []} />;
  }
};

export default CardList;
