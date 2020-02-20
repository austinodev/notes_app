import React from "react";
import {View, Text, FlatList} from 'react-native';
import {HomeHeader, ListItem} from '../categories/category-styled';

const Categories = () => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: '#Third Item',
            total: "10 Notes"
        },
        {
            id: 'bd1acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac38afc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
        {
            id: '58644a0f-3da1-471f-bd96-145571e29d72',
            title: '#Third Item',
            total: "10 Notes"
        },
        {
            id: 'bd5acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac678afc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
        {
            id: '586344a0f-3da1-471f-bd96-145571e29d72',
            title: '#Third Item',
            total: "10 Notes"
        },
        {
            id: 'bd5acbertea-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac678sdfgafc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
        {
            id: '586344a23450f-3da1-471f-bd96-145571e29d72',
            title: '#Third Item',
            total: "10 Notes"
        },
        {
            id: 'bd5acbea2345-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac67wret8afc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
        {
            id: 'bd5acbtwertea2345-c1b1-46c2-aed5-3ad53abb28ba',
            title: '#First Item',
            total: "10 Notes"
        },
        {
            id: '3ac67wroqwenet8afc-c605-48d3-a4f8-fbd91aa97f63',
            title: '#Second Item',
            total: "10 Notes"
        },
    ];

    const Item = ({ title, total }) => (
        <ListItem>
            <Text>{title}</Text>
            <Text style={{ color: "#c8c8c8" }}>{total}</Text>
        </ListItem>
    );

    return (
        <View>
            <HomeHeader>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Categories</Text>
            </HomeHeader>
            <View style={{ paddingBottom: 120 }}>
                <FlatList
                    ListHeaderComponent={() => <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}><Text style={{ color: "lightblue" }}>{DATA.length} Notes</Text></View>}
                    data={DATA}
                    renderItem={({ item }) => <Item total={item.total} title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};

export default Categories;
