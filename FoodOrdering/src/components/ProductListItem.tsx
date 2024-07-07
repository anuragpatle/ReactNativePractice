import { Text, StyleSheet, Image } from 'react-native';
import { Product } from '../types';
import {  View,  } from '../components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

export const defaultPizzaImage =  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
  return (
    <View style={styles.container}>
       <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> ${product.price} </Text>
    </View>
  )
}

export default ProductListItem


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  }

});
