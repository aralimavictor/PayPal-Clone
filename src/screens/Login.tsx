import { View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { InputField } from '../components/InputField'
import { Botao } from '../components/Botao'
import { SafeAreaView } from 'react-native-safe-area-context'


type RootStackParamList = {
    Login: undefined
    Home: undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

export function Login({ navigation }: Props) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.inner}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <InputField
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.linkWrapper}>
                    <Text style={styles.link}>Usar número de telefone</Text>
                </TouchableOpacity>

                <InputField
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.linkWrapper}>
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <View style={styles.botoes}>
                    <Botao
                        titulo="Acessar conta"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <View style={styles.espacoBotao} />
                    <Botao
                        titulo="Criar conta"
                        variante="secundario"
                        onPress={() => {}}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 48,
    },
    linkWrapper: {
        alignSelf: 'flex-start',
        marginTop: 12,
        marginBottom: 20,
    },
    link: {
        color: '#003087',
        fontWeight: '600',
        fontSize: 15,
    },
    botoes: {
        width: '100%',
        marginTop: 32,
    },
    espacoBotao: {
        height: 12,
    },
})