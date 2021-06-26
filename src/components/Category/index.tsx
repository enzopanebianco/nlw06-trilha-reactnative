import React from "react";
import { Text, View, } from 'react-native';
import { RectButtonProps, RectButton } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({ title, icon: Icon, hasCheckBox = false,
    checked = false, ...rest }: Props) {

    const { secondary50, secondary40, secondary70, secondary75 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[
                secondary50, secondary70
            ]} >
                <LinearGradient
                    colors={[checked ? secondary75 : secondary50, secondary40]}
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>

                    {
                        hasCheckBox &&
                        <View style={checked ? styles.checked : styles.check} />
                    }

                    <Icon height={48} width={48} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}