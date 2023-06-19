import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, I18nManager, Text, TextInputProps, TextStyle, ViewStyle, GestureResponderEvent } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as MyColors from './MyColors';

interface Props extends TextInputProps {
    label?: string;
    error?: string;
    leftIcon?: any;
    rightIcon?: string;
    setOnFocus?: boolean;
    InputStyle?: TextStyle;
    labelStyle?: TextStyle;
    containerStyle?: ViewStyle;
    inputContainerStyle?: ViewStyle;
    leftIconOnPress?: (event: GestureResponderEvent) => void | undefined;
    rightIconOnPress?: (event: GestureResponderEvent) => void | undefined;
}

const styles = StyleSheet.create({
    container: {
        height: (100),
        borderRadius: 15,
    },
    inputContainer: {
        height: (50),
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: (10),

    },
    textInput: {
        flex: 1,
        textAlign: I18nManager.isRTL ? "right" : 'left',
    },
    label: {
        marginBottom: 8,
        textAlign: 'left',
    },
    iconContainer: {
        paddingRight: (10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        flex: 1,
        height: (50),
        fontSize: 14,
        color: MyColors.BLACK,
        paddingHorizontal: 10,
        borderColor: 'transparent',
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    }
});

const Input: React.FC<Props> = (props) => {

    const [borderColors, serBorderColors] = useState('');

    return (
        <View style={[styles.container, props.containerStyle]}>

            {props.label && <Text style={[styles.label, props.labelStyle, { color: MyColors.BLACK }]}>{props.label}</Text>}

            <View style={[styles.inputContainer, props.inputContainerStyle]} >

                {props.leftIcon &&
                    // <TouchableOpacity style={styles.iconContainer}
                    //     onPress={props.leftIconOnPress}>
                    //     <SvgXml xml={props.leftIcon} />
                    // </TouchableOpacity>
                    props.leftIcon
                }

                <TextInput
                    value={props.value}
                    editable={props.editable}
                    maxLength={props.maxLength}
                    multiline={props.multiline}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    onChangeText={props.onChangeText}
                    numberOfLines={props.numberOfLines}
                    secureTextEntry={props.secureTextEntry}
                    style={[styles.inputStyle, props.InputStyle]}
                    placeholderTextColor={MyColors.SECONDARY_TEXT}
                />

                {props.rightIcon &&
                    <TouchableOpacity style={styles.iconContainer}
                        onPress={props.rightIconOnPress}>
                        <SvgXml xml={props.rightIcon} />
                    </TouchableOpacity>
                }

            </View>


        </View>
    );
};
export default Input;
