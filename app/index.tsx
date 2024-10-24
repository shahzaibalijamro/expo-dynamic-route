import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import MyComponent from "./component/myComponent";

export default function Index() {
  type Product = [
    {
      id: number;
      title: string;
      price: number;
      description: string;
      thumbnail: string;
    }
  ]
  // type ProductsResponse = {
  //   products: Product[];
  // };
  const [products, setProducts] = useState<null | Product>(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res.products)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(products);

  return (
    <View className="justify-center items-center">
      <Text className="my-10 text-3xl font-semibold">All Products</Text>
      <ScrollView>
        <View className="mx-8 mb-10">
          {products ? products.map(item => {
            return <View className="w-full mb-8" key={item.id}>
              {/* <Text>{item.title}</Text> */}
              <MyComponent isBtn={true} id={item.id} title={item.title} description={item.description} url={item.thumbnail}/>
            </View>
          }) : <View className="h-100vh justify-center items-center">
            <ActivityIndicator animating={true} size={"large"} color={'blue'} />
          </View>}
        </View>
      </ScrollView>
    </View>
  );
}
