import { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    placeholder: string
    value: string
    onChangeText: (text: string) => void
    secureTextEntry?: boolean
    keyboardType?: 'default' | 'email-address'
}

export function InputField({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
}: Props) {
    const [mostrarSenha, setMostrarSenha] = useState(false)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry && !mostrarSenha}
                keyboardType={keyboardType}
                autoCapitalize="none"
            />
            {secureTextEntry && (
                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => setMostrarSenha(!mostrarSenha)}
                >
                    <Ionicons
                        name={mostrarSenha ? 'eye-off' : 'eye'}
                        size={22}
                        color="#555"
                    />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        width: '100%',
    },
    input: {
        flex: 1,
        paddingVertical: 18,
        fontSize: 16,
        color: '#333',
    },
    icone: {
        padding: 4,
    },
})