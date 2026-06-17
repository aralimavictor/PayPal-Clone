import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
    nome: string
    data: string
    valor: string
    tipo: string
}

export function CardTransacao({ nome, data, valor, tipo }: Props) {
    return (
        <View style={styles.card}>
            <View style={styles.linha}>
                <View style={styles.logoCircle}>
                    <Ionicons name="logo-steam" size={28} color="#285185" />
                </View>
                <View style={styles.info}>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.data}>{data}</Text>
                </View>
            </View>
            <View style={styles.divisor} />
            <View style={styles.rodape}>
                <Text style={styles.tipo}>{tipo}</Text>
                <Text style={styles.valor}>{valor}</Text>
            </View>
            <TouchableOpacity style={styles.botaoSaiba}>
                <Text style={styles.botaoSaibaTexto}>Saiba mais</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    linha: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    logoCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        borderWidth: 2,
        borderColor: '#3c65b9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    nome: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    data: {
        fontSize: 13,
        color: '#888',
        marginTop: 2,
    },
    divisor: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginBottom: 12,
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    tipo: {
        fontSize: 14,
        color: '#555',
    },
    valor: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    botaoSaiba: {
        alignItems: 'center',
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    botaoSaibaTexto: {
        color: '#53a7e5',
        fontWeight: '600',
        fontSize: 15,
    },
})