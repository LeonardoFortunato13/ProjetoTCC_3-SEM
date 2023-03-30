import './App.scss';
import AppCard from './components/CardProdutos/AppCard';
import Cadastro from './components/FormCadastro';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
       <AppCard />
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Cadastro />
      </Box>
    </NativeBaseProvider>
  );
}
