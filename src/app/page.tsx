import All from "@/components/All/Index";
import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";
import Make from "@/components/Make/Index";
import Pick from "@/components/Pick/Index";
import Powerful from "@/components/Powerful/Index";
import Services from "@/components/Services/Index";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Pick></Pick>
      <Services></Services>
      <Powerful></Powerful>
      <All></All>
      <Make></Make>
      <Footer></Footer>
    </>
  );
}
