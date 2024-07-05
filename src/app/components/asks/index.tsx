"use client";

import React from "react";
import "./style.css";
import {BiPlusCircle} from "react-icons/bi";
import Title from "antd/es/typography/Title";

export default function Asks() {
  const asks = [
    {
      ask: "Quanto custa um site ?",
      reply:
        "Depende do projetoque você necessita criar e a quantidade de funcionabilidades.",
    },
    {
      ask: "O que é SEO e por que é importante para o meu site?",
      reply:
        "SEO (Search Engine Optimization) são estratégias para ajudar seu site a aparecer nos resultados de busca do Google. É importante porque quanto melhor otimizado seu site estiver, mais fácil será para as pessoas encontrarem seu site quando procurarem informações relacionadas ao seu negócio ou serviços.",
    },
    {
      ask: "Quanto tempo leva para ficar pronto ?",
      reply: "Depende do projeto, mas varia entre 1 à 3 meses.",
    },
    {
      ask: "Quais as formas de pagamento ?",
      reply: "Cartão de crédito e débito, pix.",
    },
  ];

  return (
    <article className="article-container">
      <div className="box-details">
        <Title level={2}>Perguntas frequêntes</Title>
        {asks.map((item, index) => {
          return (
            <details key={index}>
              <summary>
                {item?.ask} <BiPlusCircle className="incon-plus"></BiPlusCircle>
              </summary>
              <p>{item.reply}</p>
            </details>
          );
        })}
      </div>
    </article>
  );
}
