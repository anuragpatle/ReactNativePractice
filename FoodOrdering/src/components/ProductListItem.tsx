import { Text, StyleSheet, Image, View } from 'react-native';
import { Product } from '../types';
import Colors from '@/constants/Colors';

export const defaultPizzaImage =  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png';

type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
  return (
    <View style={styles.container}>
       <Image source={{uri: product.image || defaultPizzaImage}} 
       style={styles.image} 
       resizeMode='contain'
       />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}> ${product.price} </Text>
    </View>
  )
}

export default ProductListItem


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    borderRadius: 20,
    maxWidth: '50%'
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
