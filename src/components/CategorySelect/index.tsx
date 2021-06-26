import React from "react";
import { ScrollView } from 'react-native';
import { categories } from "../../utils/categories";
import { styles } from "./styles";
import { Category } from "../Category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?:boolean;
}

export function CategorySelect({ categorySelected, setCategory,hasCheckBox=false }: Props) {
    return (
        <ScrollView horizontal style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >

            {
                categories.map(category => {
                    return (
                        <Category key={category.id}
                            checked={category.id === categorySelected}
                            title={category.title} icon={category.icon}
                            onPress={() => setCategory(category.id)}
                            hasCheckBox={hasCheckBox}
                            />

                    )
                })
            }
        </ScrollView>
    )
}