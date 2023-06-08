import { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  const jobTypes = ['Full-time', 'Part-time', 'Contractor', 'freelance'];
  const [jobToSearch, setJobToSearch] = useState('');
  const [ActiveJob, setActiveJob] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Daniel</Text>
        <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={jobToSearch}
            onChange={(e) => setJobToSearch(e.target.value)}
            placeholder='What are you looking for?...'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.tab(ActiveJob, item)}
                onPress={() => {
                  setActiveJob(item);
                  router.push(`search/${item}`);
                }}
              >
                <Text
                  style={styles.tabText(ActiveJob)}
                > {item} </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  )
}

export default Welcome