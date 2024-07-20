/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, {useState} from "react";
import "./style.css";
import {FiEye} from "react-icons/fi";
import {Image} from "antd";
import Title from "antd/es/typography/Title";
import model1 from "../projects/assets/model1.png";
import model2 from "../projects/assets/model2.png";
import model3 from "../projects/assets/model3.png";
import model4 from "../projects/assets/model4.png";
import model5 from "../projects/assets/model5.png";
import model6 from "../projects/assets/model6.png";

export default function Projects() {
  const [pdfurl, setPdfurl] = useState<string>("");
  const models = [
    {
      key: 1,
      img: model1,
      pdf: "model1.pdf",
    },
    {
      key: 2,
      img: model2,
      pdf: "model2.pdf",
    },
    {
      key: 3,
      img: model3,
      pdf: "model3.pdf",
    },
    {
      key: 4,
      img: model4,
      pdf: "model4.pdf",
    },
    {
      key: 5,
      img: model5,
      pdf: "model5.pdf",
    },
    {
      key: 6,
      img: model6,
      pdf: "model6.pdf",
    },
  ];

  return (
    <section
      className="section-default-style projectscomponent"
      style={{
        justifyContent: "center !important",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Title level={1}>Alguns de nossos projetos</Title>
      <div className="box-models">
        {models.map(item => {
          return (
            <div className="box-image-model" key={item.key}>
              <Image className="imgModel" src={item.img.src} />
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(`pdf/${item.pdf}`);
                  }
                }}
                title="Ver projeto"
              >
                ver projeto
                <FiEye></FiEye>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
