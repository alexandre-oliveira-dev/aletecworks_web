/* eslint-disable @next/next/no-img-element */
import Title from "antd/es/typography/Title";
import Footer from "./components/footer";
import Header from "./components/header";
import "./page.css";
import {Button, Card} from "antd";
import ilustration from "../../public/ilustration.jpg";
import {BsWhatsapp} from "react-icons/bs";
import Link from "antd/es/typography/Link";

export default function Home() {
  const projectsTypes = [
    {
      key: 1,
      title: "Landing pages",
      subtitlte:
        "Uma landing page tem como principal objetivo a conversão de leads, ou seja, fazer com que o visitante se torne um cliente, passando para a próxima etapa do funil de vendas",
      img: "https://img.icons8.com/nolan/64/1A6DFF/C822FF/web.png",
    },
    {
      key: 2,
      title: "Sites institucionais",
      subtitlte: "Dar uma identidade digital para o seu negócio é essencial!",
      img: "https://img.icons8.com/nolan/64/1A6DFF/C822FF/device-shop.png",
    },
    {
      key: 3,
      title: "Sistemas de gestão",
      subtitlte: "Gestão financeira, estoque, funcionarios, etc.",
      img: "https://img.icons8.com/nolan/64/1A6DFF/C822FF/conference.png",
    },
  ];

  return (
    <main className="home-container">
      <Header></Header>
      <section className="section">
        <div className="box-text">
          <Title level={1}>
            Colocamos a sua Empresa onde ela já deveria estar.
          </Title>
          <p>
            Desenvolvimento de soluções personalizadas e criativas para cada
            momento do seu negócio, que atenda as expectativas do seu Cliente
            Final.
          </p>
          <Link href="https://wa.me/5555119612564?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20proj%C3%A9to.">
            Fazer um orçamento <BsWhatsapp></BsWhatsapp>
          </Link>
        </div>
      </section>
      <section className="aboutus">
        <div className="title-aboutus">
          <Title level={1}>Precisando de um site para o seu negócio?</Title>
          <p>
            Na Ale TechWorks, somos apaixonados por transformar ideias em
            experiências digitais únicas. Especializados no desenvolvimento de
            sites personalizados, nossa missão é criar soluções digitais que não
            apenas atendam às suas necessidades, mas também superem suas
            expectativas. Combinamos tecnologia de ponta com design inovador
            para entregar projetos que se destacam e trazem resultados
            excepcionais.
          </p>
        </div>
        <div className="box-projects-types">
          {projectsTypes.map(item => {
            return (
              <Card key={item.key} className="card-item-project-type">
                <img width={64} height={64} src={item.img} alt="icon"></img>
                <Title level={3}>{item.title}</Title>
                <p style={{color: "grey"}}>{item.subtitlte}</p>
              </Card>
            );
          })}
        </div>
      </section>
      <section className="section-default-style">
        <div
          className="box-text-ilustration"
          style={{
            flexWrap: "nowrap",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={ilustration.src} alt="" />
          <div className="text-with-ilustration">
            <Title level={2}>
              Utilizamos as melhores tecnologias do mercado!
            </Title>
            <p>
              Deixamos seu site em primeiro no google, com as melhores práticas
              de SEO. Site responsivo, para que seus clientes acessem em
              qualquer tipo de dispositivo e tenha uma experiência única !
            </p>
            <br />
            <div className="ilustrations-seo" style={{display: "flex", gap: "10px"}}>
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/external-those-icons-flat-those-icons/80/external-Google-logos-and-brands-those-icons-flat-those-icons.png"
                alt="external-Google-logos-and-brands-those-icons-flat-those-icons"
              />
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/external-vectorslab-flat-vectorslab/80/external-Seo-seo-and-marketing-vectorslab-flat-vectorslab-3.png"
                alt="external-Seo-seo-and-marketing-vectorslab-flat-vectorslab-3"
              />
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/color/80/first-place-ribbon.png"
                alt="first-place-ribbon"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
