# 🎓 Projeto Acadêmico: PayPal Clone - Estudo de Desenvolvimento Mobile

## 📝 Descrição do Projeto

Este projeto foi desenvolvido como parte de um **estudo acadêmico** sobre desenvolvimento de aplicações móveis multiplataforma. O objetivo principal é a aplicação prática de conceitos fundamentais de Engenharia de Software e Desenvolvimento Front-end, utilizando o ecossistema **React Native** e **Expo**.

O projeto foca na implementação de uma arquitetura modular, componentização eficiente e padrões de navegação modernos, tomando como referência a interface do aplicativo PayPal para o estud*   **Design Patterns** e **User Interface (UI)**.

> **Nota Técnica**: Atualmente, o sistema de autenticação e os dados de transações são **simulados (mockados)** para fins de demonstração de fluxo e interface, não possuindo integração com backend ou persistência de dados real nesta versão.

## 🎯 Objetivos de Aprendizado

*   **Desenvolvimento Multiplataforma**: Utilização do React Native para criação de código compartilhado entre Android e iOS.
*   **Componentização**: Criação de componentes atômicos e reutilizáveis para otimização do desenvolvimento e manutenção.
*   **Tipagem Estática**: Implementação de **TypeScript** para garantir a integridade dos dados e facilitar o debug durante o ciclo de desenvolvimento.
*   **Gestão de Navegação**: Estudo e implementação de fluxos de navegação complexos (Stack e Tab Navigation) com a biblioteca `react-navigation`.
*   **Boas Práticas**: Aplicação de padrões de estilo, organização de pastas e limpeza de código (Clean Code).

## 🛠️ Stack Tecnológica e Ferramentas

*   **Framework**: [React Native](https://reactnative.dev/) com [Expo SDK](https://expo.dev/)
*   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
*   **Navegação**: `@react-navigation/native`, `@react-navigation/native-stack`
*   **Interface**: Estilização via `StyleSheet` (CSS-in-JS) e ícones via `Expo Vector Icons`
*   **Gerenciamento de Área Segura**: `react-native-safe-area-context`

## 🏗️ Arquitetura do Sistema

A estrutura do projeto foi organizada seguindo padrões de modularidade:

*   `src/components`: Contém os componentes de UI (Botões, Inputs, Cards). A lógica de exibição é isolada para permitir a reutilização em diferentes partes do sistema.
*   `src/screens`: Implementa as telas principais, onde a lógica de negócio e a composição dos componentes ocorrem.
*   `src/navigation`: Centraliza a configuração das rotas da aplicação.
*   `assets`: Armazena recursos estáticos, garantindo uma separação clara entre código e mídia.

## 🚀 Como Executar o Projeto

1.  **Instalação de Dependências**:
    ```bash
    npm install
    ```
2.  **Inicialização do Ambiente**:
    ```bash
    npx expo start
    ```
3.  **Visualização**:
    Utilize o app **Expo Go** em um dispositivo físico ou um emulador Android/iOS para visualizar a aplicação.

## 📈 Evolução Para Possíveis Trabalhos Futuros

Como parte de um ciclo de estudo contínuo, as próximas etapas planejadas para este projeto incluem:
1.  Implementação de Gerenciamento de Estado Global (Context API ou Zustand).
2.  Consumo de APIs REST para dinamização dos dados de transações.
3.  Implementação de testes unitários com Jest e React Native Testing Library.
4.  Persistência de dados local (AsyncStorage).
