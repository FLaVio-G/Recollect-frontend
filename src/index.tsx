import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import Background from "./components/Background/background"
import { Header } from "./components/Header/Header"
import { PrincipalCard } from "./components/Principal/PrincipalCard"
import { VidroCard } from "./components/Vidro/VidroCard"
import { MetalCard } from "./components/Metal/MetalCard"
import { PlasticoCard } from "./components/Plastico/PlasticoCard"
import { PapelCard } from "./components/Papel/PapelCard"
import { ResiduosComunsCard } from "./components/Residuos/ResiduosComunsCard"
import { ResiduosEspeciaisCard } from "./components/Residuos/ResíduosEspeciais"
import { ReciclagemCard } from "./components/Reciclagem/ReciclagemCard"
import { HomeCard } from "./components/Home/HomeCard"
import { LoginCard } from "./components/Login/LoginCard"
import { CadastroCard } from "./components/Cadastro/CadastroCard"

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <Background>
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    
      <Header/>
      <PrincipalCard/> <br />
      <ReciclagemCard/><br />
      <VidroCard/> <br />
      <MetalCard/> <br />
      <PlasticoCard/> <br />
      <PapelCard /> <br />
      <ResiduosComunsCard/> <br />
      <ResiduosEspeciaisCard/>
      <HomeCard/>
      <LoginCard/>
      <CadastroCard/>
    <App />
    </ChakraProvider>
  </React.StrictMode>
  </Background>
)



