import React from "react";
import  { View, Text, TouchableOpacity} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {NoteHeader, NoteText, TagText} from './createStyled';

const CreateNote = (props) => {
    return (
        <View>
            <NoteHeader>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name="chevron-left" color={"#b8b8b8"} size={40}/>
                </TouchableOpacity>
            </NoteHeader>
            <View style={{ paddingBottom: 120, paddingHorizontal: 20 }}>
                <TagText placeholder="#category"/>
                <NoteText placeholder="Note"/>
            </View>
        </View>
    )
};
export default CreateNote;
