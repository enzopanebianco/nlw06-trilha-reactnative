import React from 'react';
import { View } from 'react-native';
import {styles} from './styles';
// import { Container } from './styles';

type Props = {
    isCenter?:boolean
}

function ListDivider({isCenter}:Props) {
    return (
       <View style={[
           styles.container,
            isCenter?{
                marginVertical:12
            }:
            {
                marginTop:2,
                marginBottom:31,
            }
        ]} />
    )
}

export default ListDivider;