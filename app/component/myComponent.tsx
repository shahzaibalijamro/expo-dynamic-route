import { Link } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props: { title: string, description: string, url: string, id: number, isBtn: boolean }) => (
  <Card className='w-full p-5' mode='outlined'>
    <Card.Content className='p-5'>
      <Text variant="titleLarge">{props.title}</Text>
      <Text className='line-clamp-2' variant="bodyMedium">{props.description}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: `${props.url}` }} />
    {props.isBtn ? <Card.Actions className='m-2'>
      <Link
        href={{
          pathname: '/singleProduct/[id]',
          params: { id: props.id },
        }}>
        <Button>See more</Button>
      </Link>
      <Button>Add to Cart</Button>
    </Card.Actions> : <View style={{justifyContent: 'center'}} className='m-2 text-center justify-center items-center'>
      <Link
        className='text-center justify-center items-center'
        href={'/'}>
        <Button className='text-center justify-center items-center'>Back</Button>
      </Link>
    </View>}
  </Card>
);

export default MyComponent;