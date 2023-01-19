import { Header } from "../components/Header/Header";
import logo from "../assets/imgs/morro-2.png";
import { Box } from "@chakra-ui/react";
import { CadastroCard } from "../components/Cadastro/CadastroCard";
import { DashboardCard } from "../components/Dashboard/DashboardCard";

function Cadastro() {
  return (
    <Box backgroundSize='cover' bgImage={logo} height="100vh">
      <Header />
      <DashboardCard />
    </Box>
  );
}
export default Cadastro;
