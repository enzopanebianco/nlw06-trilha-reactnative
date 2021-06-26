import React from "react";
import { Text, View, } from 'react-native';
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import PlayerSvg from '../../assets/player.svg';
import CallendarSvg from '../../assets/calendar.svg';
import { theme } from "../../global/styles/theme";
import { SvgProps } from "react-native-svg";

export type GuildProps = {
    owner: boolean;
    id:string,
    name:string,
    icon:React.FC<SvgProps>|null,
}

export interface AppointmentProps {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointments({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>

                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo} >
                            <CallendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />
                            <Text style={[
                                styles.player,
                                { color: owner ? primary : on }
                            ]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}