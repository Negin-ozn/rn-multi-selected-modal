import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TextStyle, ViewStyle, FlatList } from 'react-native';
import SearchIcon from '../assets/icons/SearchIcon';
import CheckIcon from '../assets/icons/CheckIcon';
import * as MyColors from './MyColors';
import Input from './Input';

interface List {
    id: string | number;
    title: string;
}

interface Prop {
    data: List[];
    onClose: () => void;
    modalVisible: boolean;
    selectedItems: List[];
    checkBoxColor?: string;
    confirmBtnTitle?: string;
    searchPlaceHolder?: string;
    itemTitleStyle?: TextStyle;
    confirmBtnStyle?: ViewStyle;
    confirmTxtStyle?: TextStyle;
    checkBoxContainerStyle?: ViewStyle;
    onChangeSelect: (item: List) => void;
}

const MultiSelected = (props: Prop) => {

    const [searchData, setSearchData] = useState(props.data);
    const [searchText, setSearchText] = useState('');

    const RenderItem = (item: List, index: number) => {
        return (
            <Pressable onPress={() => props.onChangeSelect(item)}
                style={[styles.itemContainer, { borderBottomWidth: props.data.length != index + 1 ? 1 : 0 }]}>
                <Text style={[styles.itemTitle, { ...props.itemTitleStyle }]}>{item.title}</Text>
                <View style={{ width: 5 }} />

                <View style={[styles.checkbox, {
                    ...props.checkBoxContainerStyle,
                    borderColor: props.selectedItems.some((i) => i.id === item.id) ? props.checkBoxColor ?? MyColors.PRIMARY : MyColors.BORDER_COLOR,
                    backgroundColor: props.selectedItems.some((i) => i.id === item.id) ? props.checkBoxColor ?? MyColors.PRIMARY : 'transparent',
                }]}>
                    {props.selectedItems.some((i) => i.id === item.id) ?
                        <CheckIcon color='white' /> :
                        <></>
                    }
                </View>
            </Pressable>
        )
    };

    const searchHandler = (text: string) => {
        if (text) {
            setSearchText(text);
            const newData = props.data!.filter(item => {
                return ((item?.title).toLowerCase()).includes(text.toLowerCase())
            });
            setSearchData([...newData]);
        } else {
            setSearchText(text);
            setSearchData([...props.data]);
        }
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={props.modalVisible}
                onRequestClose={() => { }}
            >
                <View style={styles.modalView}>
                    <Input
                        value={searchText}
                        onChangeText={searchHandler}
                        inputContainerStyle={styles.searchInput}
                        containerStyle={{ ...styles.searchContainer }}
                        placeholder={props.searchPlaceHolder ?? 'Search by name'}
                        leftIcon={<SearchIcon color={MyColors.SECONDARY_TEXT} />}
                    />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={searchData}
                        renderItem={({ item, index }) => RenderItem(item, index)}
                        keyExtractor={item => String(item.id)}
                        ListEmptyComponent={() => {
                            return (
                                <View >
                                    <Text style={styles.emptyText}>No Item match!</Text>
                                </View>
                            )
                        }}
                    />
                    <Pressable style={[styles.confirmBtn, props.confirmBtnStyle]}
                        onPress={props.onClose}>
                        <Text style={[styles.confirmTxt, props.confirmTxtStyle]}>{props.confirmBtnTitle ?? 'Confirm'}</Text>
                    </Pressable>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: MyColors.UNDERLINE,
    },
    itemTitle: {
        flex: 1,
        fontSize: 14,
        fontWeight: '600',
        color: MyColors.PRIMARY_TEXT,
    },
    checkbox: {
        width: 26,
        height: 26,
        borderRadius: 8,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        height: 50,
        marginTop: 0,
        marginVertical: 10
    },
    searchInput: {
        borderColor: 'transparent',
        backgroundColor: MyColors.INPUT_BACKGROUND,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flex: 1,
        padding: 20,
        borderRadius: 10,
        marginVertical: '30%',
        marginHorizontal: '5%',
        shadowColor: MyColors.BLACK,
        backgroundColor: MyColors.WHITE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
    },
    confirmBtn: {
        borderRadius: 10,
        paddingVertical: 15,
        backgroundColor: MyColors.SECONDARY,
    },
    confirmTxt: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: MyColors.PRIMARY,
    },
    emptyText: {
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
        color: MyColors.SECONDARY_TEXT,
    }
});

export default MultiSelected;