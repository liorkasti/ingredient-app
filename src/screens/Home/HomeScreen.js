import React, { useEffect } from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
// import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: 'Home',
//     headerLeft: () => <MenuImage
//       onPress={() => {
//         navigation.openDrawer();
//       }}
//     />
//   });

//   constructor(props) {
//     super(props);
//   }

// onPressRecipe = item => {
//   console.log("The props: ", JSON.stringify(this.props.navigation));
//   this.props.navigation.navigate('Recipe', { item });
//   // <HomeScreen.Screen
//   // name="Recipe"
//   // component={Recipe}
//   // item={item}
//   // />
// };

const HomeScreen = ({ navigation }) => {
  
  useEffect(() => {
  }, []);

  const onPressRecipe = (item) => {
    // console.log("The props: ", JSON.stringify( props ));

    navigation.navigate("Recipe", { Recipe, item });
  };



  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressRecipe(item)}>
    {/* <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}> */}
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  // render() {
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={recipes}
        // renderItem={this.renderRecipes}
        renderItem={renderRecipes}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
}

export default HomeScreen;

