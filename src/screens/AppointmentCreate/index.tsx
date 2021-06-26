import React, { useState } from "react";
import { View, Text, TextInput, Platform, Modal,ScrollView, KeyboardAvoidingView } from 'react-native';
import { Background } from "../../components/Background";
import { styles } from "./styles";
import Header from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import {Button} from "../../components/Button";
import ModalView from "../../components/ModalView";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [visible,setVisible] = useState(false);
    const [guild,setGuild] = useState<GuildProps>({}as GuildProps);

    function handleOpenModal(){
        setVisible(true);
    }
    function handleCloseModal(){
        setVisible(false);
    }

    function handleGuildSelected(guild:GuildProps){
        setVisible(false);
        setGuild(guild);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
                <Background>
            <ScrollView>
                    <Header title="Agendar partida" />
                    <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                        Categoria
                    </Text>
                    <CategorySelect hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenModal}>
                            <View style={styles.select}>
                                {
                                    guild.icon?
                                    <GuildIcon />:
                                    <View
                                        style={styles.image}
                                    />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                      {
                                      guild.name?guild.name:'Selecione um servidor'
                                      
                                      }
                                    </Text>
                                </View>
                                <Feather name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label,{marginBottom:12}]}>Dia e mês</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label,{marginBottom:12}]}>Horário</Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2} />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2} />
                                </View>
                            </View>

                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.textMax}> Máx 100 caracteres</Text>
                        </View>
                        <TextInput multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false} style={styles.textarea} />

                        <View style={styles.footer}>
                                <Button  title="Agendar" />
                        </View>
                    </View>
            </ScrollView>
                </Background>
            <ModalView closeModal={handleCloseModal} visible={visible}>
                <Guilds handleGuildsSelected={handleGuildSelected} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}