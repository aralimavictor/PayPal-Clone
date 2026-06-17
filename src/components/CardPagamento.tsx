import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export function CardPagamento() {
    return (
        <View style={styles.card}>
            <View style={styles.topo}>
                <View style={styles.iconWrapper}>
                    <MaterialIcons name="payments" size={22} color="#fff" />
                </View>
                <Text style={styles.titulo}>Pagamentos recebidos</Text>
            </View>
            <Text style={styles.valor}>R$ 100,00</Text>
            <Text style={styles.descricao}>
                Transferências podem levar até 3 dias úteis e ocorrem automaticamente.
            </Text>
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
    topo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconWrapper: {
        backgroundColor: '#012684',
        borderRadius: 10,
        padding: 8,
        marginRight: 10,
    },
    titulo: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    valor: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 16,
    },
    descricao: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
})