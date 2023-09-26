import { Aside } from "@/components/Aside";
import { MainInfo } from "@/components/MainInfo";
import { Links } from "@/components/Links";

const Home = () => {
  return (
    <main className="flex bg-main-bg gap-7 h-full">

      <Aside />
      <MainInfo />
      <Links />
      
    </main>
  )
}

export default Home;