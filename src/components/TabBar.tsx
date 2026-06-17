import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type TabBarProps = {
    onPressHome: () => void;
    onPressSendRequest: () => void;
    onPressWallet: () => void;
}

export function TabBar({ onPressHome, onPressSendRequest, onPressWallet }: TabBarProps) {
    return (
        <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem} onPress={onPressHome}>
                <Ionicons name="home-outline" size={24} color="#555" />
                <Text style={styles.tabTextoAtivo}>Página inicial</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItemCentro} onPress={onPressSendRequest}>
                <View style={styles.tabBotaoCentro}>
                    <Ionicons name="swap-vertical" size={26} color="#fff" />
                </View>
                <Text style={styles.tabTexto}>Enviar/sol.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={onPressWallet}>
                <FontAwesome6 name="wallet" size={24} color="#555" />
                <Text style={styles.tabTexto}>Carteira</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    tabItem: {
        alignItems: 'center',
        flex: 1,
        gap: 4,
    },
    tabItemCentro: {
        alignItems: 'center',
        flex: 1,
        gap: 4,
    },
    tabBotaoCentro: {
        backgroundColor: '#005fd6',
        width: 52,
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        shadowColor: '#003087',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 2,
    },
    tabTextoAtivo: {
        fontSize: 11,
        color: '#555',
        fontWeight: '600',
    },
    tabTexto: {
        fontSize: 11,
        color: '#555',
    },
})