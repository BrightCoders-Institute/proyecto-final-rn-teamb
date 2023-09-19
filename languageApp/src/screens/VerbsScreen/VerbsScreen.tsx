import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
//components
import {HeaderText} from '../../components/HeaderText/HeaderText';
import {SectionButton} from '../../components/SectionButton/SectionButton';
//Navigator
import {NavigationProp, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {getUserInformation} from '../../db/GetUserInformation';
import {
  setAdvance_progress,
  setBeginner_progress,
  setIntermediate_progress,
} from '../../store/userSlice';

interface VerbsProps {
  navigation: NavigationProp<any>;
}

export const VerbsScreen: React.FC<VerbsProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const {beginner_progress, intermediate_progress, advance_progress} =
    useSelector((state: RootState) => state.data);

  const isFocused = useIsFocused();

  useEffect(() => {
    const getinformation = async () => {
      const userInformation = await getUserInformation();
      dispatch(setBeginner_progress(userInformation?.beginner_progress));
      dispatch(
        setIntermediate_progress(userInformation?.intermediate_progress),
      );
      dispatch(setAdvance_progress(userInformation?.advance_progress));
    };
    getinformation();
  }, [isFocused]);

  return (
    <View>
      <View style={styles.headerContainer}>
        <HeaderText header="Choose your English level" />
      </View>
      <SectionButton
        title="Beginner"
        onPress={() => {
          navigation.navigate('FlashCardsScreen', [
            'Beginner',
            beginner_progress,
          ]);
        }}
      />
      <SectionButton
        title="Intermediate"
        onPress={() => {
          navigation.navigate('FlashCardsScreen', [
            'Intermediate',
            intermediate_progress,
          ]);
        }}
      />
      <SectionButton
        title="Advanced"
        onPress={() => {
          navigation.navigate('FlashCardsScreen', [
            'Advance',
            advance_progress,
          ]);
        }}
      />
    </View>
  );
};
