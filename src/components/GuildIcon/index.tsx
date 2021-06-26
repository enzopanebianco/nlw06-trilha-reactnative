import React from "react";
import { Text, View, Image} from 'react-native';
import { RectButtonProps,RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

export function GuildIcon() {
const uri = 'https://img.ibxk.com.br/2020/10/30/30110741964176.jpg?w=352&h=208&mode=crop&scale=both';
    return (
        <Image 
            source={{uri}}
            style={styles.image}
            resizeMode='cover'
        />
    )
}