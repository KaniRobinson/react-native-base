import React from 'react'
import { AsyncStorage } from 'react-native'

export default class Storage {
    constructor() {}

    set(key, value) {
        value = JSON.stringify(value)
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, value)
            .then((val) => {
                resolve(value)
            })
            .catch((error) => {
                reject('')
            })
        })
    }

    get(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key)
            .then((value) => {
                resolve(value)
            })
            .catch((error) => {
                reject('')
            })
        })
    }

    delete(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem(key)
            .then((value) => {
                resolve(key)
            })
            .catch((error) => {
                reject('')
            })
        })
    }
}