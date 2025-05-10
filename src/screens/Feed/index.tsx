import {ActivityIndicator, RefreshControl, View} from 'react-native';
import React, {memo} from 'react';
import {FlashList} from '@shopify/flash-list';
import {Post} from '../../components/post/post';
import {styles} from './styles';
import usePosts from './hooks/usePosts';

const ItemSeparator = memo(() => <View style={{height: 10}} />);

export default function Feed() {
  const {data, refreshing, onEndReached, onRefresh} = usePosts();

  return (
    <View style={styles.container}>
      <FlashList
        ListFooterComponent={() =>
          refreshing && data.length ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <></>
          )
        }
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={500}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={ItemSeparator}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        data={data}
        renderItem={({item}) => <Post item={item} />}
      />
    </View>
  );
}
