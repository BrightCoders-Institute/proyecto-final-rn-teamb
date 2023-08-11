import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { HeaderText } from '../../components/HeaderText/HeaderText'

export const PrincipalScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Toolanguage</Text>
      <Text style={styles.description}>Listen, read and inprove your English skills</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpTitle}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
