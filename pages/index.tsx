import { Aside } from "@/components/Aside";
import { MainInfo } from "@/components/MainInfo";
import { Links } from "@/components/Links";

const Home = () => {
  return (
    <main className="flex bg-main-bg  gap-7">

      <Aside />
      <MainInfo />
      <Links />
      
    </main>
  )
}

export default Home;