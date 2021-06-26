import React from "react";
import { View, Text, FlatList } from 'react-native';
import { Background } from "../../components/Background";
import Header from "../../components/Header";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { ImageBackground } from "react-native";
import Banner from '../../assets/illustration.png';
import { styles } from './styles';
import { Member } from "../../components/Member";
import { ListHeader } from "../../components/ListHeader";
import ListDivider from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/diego3g.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Enzo',
            avatar_url: 'https://github.com/enzopanebianco.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header title="Detalhes" action={
                <BorderlessButton>
                    <Fontisto
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />
                </BorderlessButton>
            } />
            <ImageBackground
                style={styles.image}
                source={Banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="total 3" />

            <FlatList data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    )
}