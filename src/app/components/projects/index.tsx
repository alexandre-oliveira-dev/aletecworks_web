/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import "./style.css";
import {FiEye} from "react-icons/fi";
import {Image} from "antd";
import model1 from "./assets/model1.png";
import model2 from "./assets/model2.png";
import model3 from "./assets/model3.png";
import Title from "antd/es/typography/Title";

export default function Projects() {
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
      <Title level={1}>Alguns de nossos projétos</Title>
      <div className="box-models">
        {models.map(item => {
          return (
            <span className="box-image-model" key={item.key}>
              <Image className="imgModel" src={item.img.src} />
              <button
                onClick={() => {
                  if (typeof window !== "undefined")
                    window.location.href = `pdf/${item.pdf}`;
                }}
                title="Ver projéto"
              >
                visualizar projéto
                <FiEye></FiEye>
              </button>
            </span>
          );
        })}
      </div>
    </section>
  );
}
