"use client";
import React, {useState} from "react";
import "./styles.css";
import {BiMenu} from "react-icons/bi";
import logo from "../../../../public/logosemfundo.png";
import Image from "next/image";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);

  if (typeof window !== "undefined")
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      if (scrollPosition !== 0 && !collapsed) {
        document
          .querySelector(".header-component")
          ?.classList.add("header-fixed");
      } else {
        document
          .querySelector(".header-component")
          ?.classList.remove("header-fixed");
      }
    });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const MenuMobile = ({open}: {open: boolean}) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: "1000",
          position: "fixed",
          top: "0px",
          display: open ? "flex" : "none",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => toggleCollapsed()}
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundColor: "#121212",
            opacity: "0.8",
          }}
        ></div>
        <nav
          style={{display: open ? "flex" : "none"}}
          className={`menuMobile ${
            open ? "animateMenu" : "animateMenuReverse"
          }`}
        >
          <button
            className="menuItem"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              toggleCollapsed();
            }}
          >
            Inicio
          </button>
          <button
            className="menuItem"
            onClick={() => {
              window.scrollTo({
                top: 1900,
                behavior: "smooth",
              });
              toggleCollapsed();
            }}
          >
            Projetos
          </button>
        </nav>
      </div>
    );
  };

  return (
    <header className="header-component">
      <div className="logo" onClick={() => window.location.reload()}>
        <Image src={logo} alt="logo" />
      </div>
      <div className="buttons-list">
        <button
          onClick={() => {
            if (typeof window !== "undefined")
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => {
            if (typeof window !== "undefined")
              window.scrollTo({
                top: 2200,
                behavior: "smooth",
              });
          }}
        >
          Projetos
        </button>
      </div>
      <>
        <button className="menuBtnMobile" onClick={() => toggleCollapsed()}>
          <BiMenu size={40} />
        </button>
        <MenuMobile open={collapsed}></MenuMobile>
      </>
    </header>
  );
}
