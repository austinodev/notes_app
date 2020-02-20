import React from "react";
import  { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {HomeHeader, ListItem} from './home-styled';

const Home = (props) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-qwer46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-4qwer8d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3dqwera1-471f-bd96-1455erty71e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd1acbea-c1b1-46c2-aeyertyd5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac38afc-c605-48d3-adfgh4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58644a0f-xbcb3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd5acbsdfhqqqea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac678afc-c6gsdfxcvb05-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '586344a0f-3dxcvbshaea1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd5acbertsdfea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac678sdfgafc-c6hsdhj05-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '586344a23450f-3dsdfhjja1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd5acbea2345-c1b1-46c2-aed5-3ad5shsj3abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac67wret8afc-c605-48d3-a4f8-fbdjaer91aa97f63',
            title: 'Second Item',
        },
        {
            id: 'bd5acbtwertea2345-c1b1-46c2-aed5-3ad53abrtweqrb28ba',
            title: 'First Item',
        },
        {
            id: '3ac67wroqwenet8afc-c605-48d3-a4f8-fwyqbd91aayw97f63',
            title: 'Second Item',
        },
    ];
    const Item = ({ title, id }) => (
        <ListItem>
            <Text style={{ color: "lightblue" }}>#app</Text>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
            <Text>{id}</Text>
        </ListItem>
    );
    return (
        <View style={{ backgroundColor: "#fff" }}>
            <HomeHeader>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>#NOTES</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("CreateNote")} >
                    <Icon name="plus" size={30} />
                </TouchableOpacity>
            </HomeHeader>
            <View style={{ paddingBottom: 120 }}>
                <FlatList
                    ListHeaderComponent={() => <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}><Text style={{ color: "lightblue" }}>{DATA.length} Notes</Text></View>}
                    data={DATA}
                    renderItem={({ item }) => <Item id={item.id} title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};

export default Home;
