import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { CardPagamento } from '../components/CardPagamento'
import { CardTransacao } from '../components/CardTransacao'
import { CardContribua } from '../components/CardContribua'
import { TabBar } from '../components/TabBar'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Home() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn}>
                    <Ionicons name="menu" size={22} color="#003087" />
                </TouchableOpacity>
                <View style={styles.headerDireita}>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Ionicons name="notifications-outline" size={22} color="#003087" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerBtn}>
                        <Ionicons name="person-outline" size={22} color="#003087" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <CardPagamento />
                <CardTransacao
                    nome="www.steampowered.com"
                    data="17 de jun. de 2026"
                    tipo="Pagamento"
                    valor="-R$ 12,91 BRL"
                />
                <CardContribua />
            </ScrollView>

            <TabBar
                onPressHome={(() => {})}
                onPressSendRequest={(() => {})}
                onPressWallet={() => console.log("Wallet pressed")} //demonstração de ação funcional no console caso queira ir para a aba carteira
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#EEF0F5',
    },
    headerBtn: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        marginLeft: 8,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    headerDireita: {
        flexDirection: 'row',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 32,
    },
})