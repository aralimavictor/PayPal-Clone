import { TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
    titulo: string
    variante?: 'primario' | 'secundario'
    onPress: () => void
}

export function Botao({ titulo, variante = 'primario', onPress }: Props) {
    return (
        <TouchableOpacity
            style={[styles.botao, variante === 'secundario' && styles.botaoSecundario]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[styles.texto, variante === 'secundario' && styles.textoSecundario]}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#000',
        paddingVertical: 18,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    botaoSecundario: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textoSecundario: {
        color: '#000',
    },
})