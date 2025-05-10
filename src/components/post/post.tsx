import {Image, Text, View} from 'react-native';
import React, {memo, useState} from 'react';
import {SIZES} from '../../constants/sizes';
import {TPost} from '../../screens/Feed/types/postTypes';
import {styles} from './styles';

interface Props {
  item: TPost;
}
export const Post = memo(({item}: Props) => {
  console.log('render', item.id);

  const [isReadMore, setIsReadMore] = useState(false);
  const imageHeight =
    (item.photos[0]?.photo?.xs?.height / item.photos[0]?.photo?.xs?.width) *
      SIZES.width -
    20;

  return (
    <View style={styles.container}>
      <Text style={styles.author}>{item?.union?.name}</Text>
      <Text style={styles.message} numberOfLines={isReadMore ? 0 : 5}>
        {item?.message}
      </Text>
      {item?.message?.length && (
        <Text
          onPress={() => setIsReadMore(prev => !prev)}
          style={styles.readMoreButton}>
          {isReadMore ? 'Свернуть' : 'Развернуть'}
        </Text>
      )}

      {item.photos[0]?.photo?.xs.src && (
        <Image
          style={{
            width: SIZES.width - 20,
            height: imageHeight,
          }}
          source={{uri: item.photos[0]?.photo?.xs?.src}}
        />
      )}
    </View>
  );
});
