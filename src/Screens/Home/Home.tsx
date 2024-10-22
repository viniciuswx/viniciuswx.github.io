import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Photo from "@/assets/IMG_4684.jpg";
import { Calendar, MapPinHouse } from "lucide-react";

export function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <Nav />
      <Card className="max-w-[500px]">
        <CardHeader className="p-0">
          <CardTitle className="flex flex-col items-center gap-2 border-b border-black p-4">
            <img src={Photo} alt="Photo" width={100} className="rounded-full" />
            <h1 className="bg-black text-white px-4 py-2 rounded">
              Vinicius | Front-End Developer
            </h1>

            <div className="text-black flex items-center gap-2 justify-center">
              <div className=" flex items-center gap-2">
                <MapPinHouse width={15} />
                Piracicaba-SP
              </div>
              <div className="w-1 h-1 rounded bg-black"></div>
              <div className="flex items-center gap-2">
                <Calendar width={15} />
                12/10/2002
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-2">
          <p>Tenho 21 anos e estou começando na área da programação.</p>
          <p>
            Estudo atualmente Análise de Sistemas na escola{" "}
            <a href="https://portal.anhembi.br/" target="_blank">
              ANHEMBI
            </a>{" "}
            e trabalho atualmente na empresa{" "}
            <a href="https://www.vxconsult.com.br/" target="_blank">
              VX Consult
            </a>{" "}
            como Desenvolvedor Jr.
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Footer />
    </div>
  );
}

export default Home;
