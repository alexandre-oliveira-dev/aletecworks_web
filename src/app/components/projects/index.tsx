/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, {useState} from "react";
import "./style.css";
import {FiEye} from "react-icons/fi";
import {Button, Image, Row} from "antd";
import Title from "antd/es/typography/Title";

export default function Projects() {
  const [pdfurl, setPdfurl] = useState<string>("");
  const models = [
    {
      key: 1,
      pdf: "model1.pdf",
    },
    {
      key: 2,
      pdf: "model2.pdf",
    },
    {
      key: 3,
      pdf: "model3.pdf",
    },
    {
      key: 4,
      pdf: "model4.pdf",
    },
    {
      key: 5,
      pdf: "model5.pdf",
    },
    {
      key: 6,
      pdf: "model6.pdf",
    },
  ];

  const View = (item: {item: string}) => {
    if (!item) return <></>;
    return (
      <div onClick={() => setPdfurl("")} className="boxpdfpreview">
        <Button
          className="closebtn"
          style={{color: "#fff"}}
          onClick={() => setPdfurl("")}
        >
          X
        </Button>

        <iframe
          width={"100%"}
          height={"100%"}
          className="pdfPreview"
          src={item.item}
        ></iframe>
      </div>
    );
  };

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
            <span className="box-image-model" key={item.key}>
              <iframe
                width={"100%"}
                height={"100%"}
                className="imgModel"
                src={`pdf/${item.pdf}`}
              />
              <button
                onClick={() => {
                  setPdfurl(`pdf/${item.pdf}`);
                }}
                title="Ver projeto"
              >
                ver projeto
                <FiEye></FiEye>
              </button>
            </span>
          );
        })}
      </div>
      {pdfurl && <View item={pdfurl}></View>}
    </section>
  );
}
