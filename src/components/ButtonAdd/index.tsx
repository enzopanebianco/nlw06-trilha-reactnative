import React from "react";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";


export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            {...rest}
            style={styles.container}>
            <MaterialCommunityIcons
                size={24} name='plus' 
                color={theme.colors.heading} />
        </RectButton>
            )
}