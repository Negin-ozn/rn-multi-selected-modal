# rn-multi-selected-modal

[![npm version](https://img.shields.io/npm/v/rn-multi-selected-modal)](https://www.npmjs.com/package/rn-multi-selected-modal)
[![npm downloads](https://img.shields.io/npm/dw/rn-multi-selected-modale)](https://www.npmjs.com/package/rn-multi-selected-modal)

<br/>

A modal to select multi items from a list of data for React native. Platform Android/ios.

<br/>
<br/>

<p align="center">
<img alt='react-native-multi-selected-modal' src="https://github.com/Negin-ozn/rn-multi-selected-modal/blob/main/docs/rn-multi-selected-modal.gif?raw=true" height="500" />
</p>
<br/>
<br/>

# Getting started

## Installation

Install the package in your React Native project:

```sh
yarn add rn-multi-selected-modal
```
### OR

```sh
npm install rn-multi-selected-modal
```

## Installing dependencies

Install the package we need as a dependency

```sh
yarn add react-native-svg
```
### OR
```sh
npm install react-native-svg
```
## Link native code

If yoy want yo use it for ios platform

```sh
cd ios && pod install
```
<br/>
<br/>

# Usage 

```js
import React, { useState } from 'react'
import {  Text, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import {MultiSelected} from 'rn-multi-selected-modal';

const App = () => {

    interface List {
        id: string,
        title: string,
    }

    const [modalVisible, setModalVisible] = useState(false)

    const data = [
        { id: 1, title: "John Smith" },
        { id: 2, title: "Jane Doe" },
        { id: 3, title: "Adam Johnson" },
        { id: 4, title: "Emily Davis" },
        { id: 5, title: "Michael Wilson" }
    ]

    const [selectedItems, setSelectedItems] = useState<List[]>([])

    const onSelectHandler = (item: any) => {

        if (selectedItems.some((i) => i.id === item.id)) {
            let newSelectedItems = [...selectedItems]
            const index = selectedItems.findIndex((i) => i.id === item.id)
            if (index > -1) {
                newSelectedItems.splice(index, 1)
                setSelectedItems(newSelectedItems)
            }

        } else {
            setSelectedItems([...selectedItems, item])
        }
    }

    return (
        <SafeAreaView>
            <Pressable
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
            <MultiSelected
                data={data}
                modalVisible={modalVisible}
                selectedItems={selectedItems}
                onChangeSelect={onSelectHandler}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    )
}
```

<br/>
<br/>

# Properties

We have the props as following for customizing and pass data:

## Required

| Prop                 | Description                                                                                              | Default     |
| -------------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| **`data`**           | List of data with an id:string or number &  title:string.                                                | Empty Array |
| **`onClose`**        | A function that make the modal visible false                                                             | _None_      |
| **`modalVisible`**   | Value that shows the visibility of modal.                                                                | false       |
| **`selectedItems`**  | List of items that are selected.                                                                         | Empty Array |
| **`onChangeSelect`** | A function that describe what you want to do on selecting an item (we retuen the selected item for you). | _None_      |

<br/>

## Optional

| Prop                          | Description                                                                                                           | Default                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **`modalStyle`**              | The style of Modal View                                                                                               | [View style](https://reactnative.dev/docs/style.html) |
| **`checkBoxColor`**           | The color of checkbox when the item is selected. It should be a string value                                          | "#5850EC"                                             |
| **`listEmptyTitle`**          | The title that is shown when we don't have any result of searching or the data is empty. It should be a string value. | No Item match!                                        |
| **`itemTitleStyle`**          | Style of the item's title.                                                                                            | [Text style](https://reactnative.dev/docs/style.html) |
| **`confirmBtnTitle`**         | The title of button that close the modal. It should be a string value                                                 | Confirm                                               |
| **`confirmBtnStyle`**         | Style of the confirm button                                                                                           | [View style](https://reactnative.dev/docs/style.html) |
| **`confirmTxtStyle`**         | Style of the confirm button title.                                                                                    | [Text style](https://reactnative.dev/docs/style.html) |
| **`searchPlaceHolder`**       | The text as a placeholder in search input. It should be a string value                                                | Search by name                                        |
| **`listEmptyTitleStyle`**     | The style of list empty title.                                                                                        | [Text style](https://reactnative.dev/docs/style.html) |
| **`checkBoxContainerStyle`**  | Style of the check boxes                                                                                              | [View style](https://reactnative.dev/docs/style.html) |
| **`checkBoxSelectedIcon`**    | The Icon in the check box when it is selected                                                                         | [React Node](https://reactnative.dev/docs/react-node) |
| **`checkBoxNotSelectedIcon`** | The Icon in the check box when it is not selected                                                                     | [React Node](https://reactnative.dev/docs/react-node) |
