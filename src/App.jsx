
import './App.css'
import { FooterLinks } from './components/footer'

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>{<FooterLinks/>}</MantineProvider>;
}
