import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import MyComponent from '../component/myComponent';
import { ActivityIndicator } from 'react-native-paper';

const singleProduct = () => {
    const { id } = useLocalSearchParams();

    interface Data {
        id: number;
        title: string;
        price: number;
        description: string;
        thumbnail: string;
    }

    const [data, setData] = useState<null | Data>(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <View className="justify-center items-center">
            <Text className="my-10 mx-10 text-center text-3xl font-semibold">
                {data && data.title}
            </Text>
            <ScrollView>
                <View className="mx-8 mb-10">
                    {data ? (
                        <View className="w-full mb-8">
                            <MyComponent
                                isBtn={false}
                                id={data.id}
                                title={data.title}
                                description={data.description}
                                url={data.thumbnail}
                            />
                        </View>
                    ) : (
                        <View className="h-100vh justify-center items-center">
                            <ActivityIndicator animating={true} size={'large'} color={'blue'} />
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};
export default singleProduct;