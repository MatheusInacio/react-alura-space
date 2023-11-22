import React, { Component } from "react";
import Cabecalho from "../../componentes/Cabecalho";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../componentes/Banner";
import Menu from "../../componentes/Menu";


export default class PaginaInicial extends Component {
  render() {
    return (
      <>
        <Cabecalho />
        <main>
          <section className={styles.principal}>
            <Menu />
            <Banner />
          </section>
        </main>
      </>
    );
  }
}
