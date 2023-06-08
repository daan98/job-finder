import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './popularjobs.style'
import { SIZES, COLORS } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router   = useRouter();
  const isLoaing = false;
  const isError  = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoaing ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          renderItem={({item}) => {
           return (
            <PopularJobCard
              item={item}
            />
           );
          }}
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs