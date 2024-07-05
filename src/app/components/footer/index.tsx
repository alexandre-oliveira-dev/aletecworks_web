"use client";
import React from "react";
import {Col, Row, Typography} from "antd";
import "./style.css";
import {MdEmail} from "react-icons/md";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import Title from "antd/es/typography/Title";

export default function Footer() {
  return (
    <footer className="footer">
      <Col>
        <Row style={{alignItems: "center", gap: 10, justifyContent: "center"}}>
          <Title style={{color: "#fff"}} level={3}>
            Nossas redes sociais
          </Title>
        </Row>
        <Col className="box-contacts-footer">
          <Row style={{alignItems: "center", gap: 10}}>
            <a
              className="instagran"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "silver",
              }}
              href="https://www.instagram.com/techworksa/"
            >
              <BsInstagram
                className="iconinstagran"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/techworksa/")
                }
                size={30}
              ></BsInstagram>{" "}
              Instagram
            </a>
          </Row>
          <br />
          <Row style={{alignItems: "center", gap: 10}}>
            <a
              className="linkedin"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "silver",
              }}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              <BsLinkedin
                className="iconLinkedin"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/")
                }
                size={30}
              ></BsLinkedin>{" "}
              Linkedin
            </a>
          </Row>
          <br />
          <Row style={{alignItems: "center", gap: 10}}>
            <MdEmail color="silver" size={30}></MdEmail>
            <Typography.Text
              copyable
              style={{
                color: "silver",
              }}
            >
              aletecworks@gmail.com
            </Typography.Text>
          </Row>
        </Col>
        <br />
        <Row style={{alignItems: "center", gap: 10, justifyContent: "center"}}>
          <p
            style={{
              color: "silver",
            }}
          >
            {" "}
            ©️copyright - Todos direitos reservados à{" "}
            <a
              target="_blank"
              style={{color: "silver", textDecoration: "underline"}}
              href="https://www.linkedin.com/in/alexandre-oliveira-0b91aa172/"
            >
              Ale Tecworks
            </a>
            .
          </p>
        </Row>
      </Col>
    </footer>
  );
}
