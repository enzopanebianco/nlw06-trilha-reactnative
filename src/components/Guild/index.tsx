import React from 'react';
import { View,Text } from 'react-native';
import { TouchableOpacity,TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export type GuildProps ={
    id:string;
    name:string;
    icon:string | null;
    owner:boolean;
} 
type Props = TouchableOpacityProps &{
    data:GuildProps
}

export function Guild({data,...rest}:Props) {
   

  return (
    <TouchableOpacity
        {...rest} activeOpacity={0.7}
    style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
            <View>
                <Text style={styles.title}>
                    {data.name}
                </Text>
                <Text style={styles.type}>
                    {data.owner?'Administrador':'Convidado'}
                </Text>
            </View>

        </View>
        <Feather name="chevron-right" color={theme.colors.heading} size={24}/>
    </TouchableOpacity>
  );
}

export default Guild;