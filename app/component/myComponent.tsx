import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = (props : {title:string,description:string,url:string}) => (
  <Card className='w-full p-5' mode='outlined'>
    <Card.Content className='p-5'>
      <Text variant="titleLarge">{props.title}</Text>
      <Text className='line-clamp-2' variant="bodyMedium">{props.description}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: `${props.url}` }} />
    <Card.Actions className='m-2'>
      <Button onPress={() => {console.log(123)}}>See more</Button>
      <Button>Add to Cart</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;