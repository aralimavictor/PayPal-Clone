import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export function CardContribua() {
    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Contribua</Text>
                <TouchableOpacity style={styles.verMais}>
                    <Text style={styles.verMaisTexto}>Ver mais</Text>
                    <Ionicons name="chevron-forward" size={16} color="#555" />
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.descricao}>
                    Simplifique a doação para causas importantes para você.
                </Text>
                <View style={styles.icones}>
                    <Ionicons name="heart" size={58} color="#29ABE2" />
                    <View style={styles.setaWrapper}>
                        <Ionicons name="arrow-up-circle" size={32} color="#F5A623" />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.link}>Definir uma instituição de {"\n"}caridade favorita</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    verMais: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    verMaisTexto: {
        fontSize: 14,
        color: '#555',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    descricao: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        marginBottom: 16,
    },
    icones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 16,
    },
    setaWrapper: {
        marginLeft: -12,
        marginBottom: 16,
    },
    link: {
        color: '#53a7e5',
        fontWeight: '600',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
})