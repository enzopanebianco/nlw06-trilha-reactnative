import React from 'react';
import { View,FlatList } from 'react-native';
import { styles } from './styles';
import ListDivider from '../../components/ListDivider';
import Guild from '../../components/Guild';
import { GuildProps } from '../../components/Guild';

type Props ={
    handleGuildsSelected:(guild:GuildProps)=>void;
}

export function Guilds({handleGuildsSelected}:Props) {
    const guilds = [
        {id:'1',name:'Lendários',icon:'image.png',owner:true},
        {id:'2',name:'Lendários',icon:'image.png',owner:true},
        
    ]
  return (
    <View style={styles.container}>
        <FlatList data={guilds} 
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            style={styles.guilds}
            ListHeaderComponent={()=><ListDivider isCenter />}
            contentContainerStyle={{paddingBottom:68,paddingTop:104,}}
            ItemSeparatorComponent={()=><ListDivider isCenter />}
            renderItem={({item})=>(
                <Guild 
                onPress={()=>handleGuildsSelected(item)}
                data={item} />
            )}
        />
    </View>
  );
}

export default Guilds;