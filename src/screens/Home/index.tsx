import React from 'react';
import { Image, Text, View } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.logo} />
			<Text>
				Welcome to the NLW Esports app! This is the home screen.
			</Text>

			<Heading
				title='Encontre seu duo!'
				subtitle='Selecione o game que deseja jogar'
			/>
		</View>
	);
}
