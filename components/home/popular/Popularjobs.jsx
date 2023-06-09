import { useState } from 'react'
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
import useFetch from '../../../hooks/useFetch';

const Popularjobs = () => {
  const router                              = useRouter();
  const [selectedJob, setSelectedJob]       = useState();
  const {data, isLoading, isError, reFetch} = useFetch('search', {
    query: 'React developer',
    num_pages: "1",
  });

  const handleCardPress = (item) => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={data}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          renderItem={({item}) => {
           return (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
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