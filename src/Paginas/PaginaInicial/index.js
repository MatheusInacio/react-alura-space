import React, { Component } from "react";
import styles from "./PaginaInicial.module.scss";

import Cabecalho from "componentes/Cabecalho";
import Banner from "componentes/Banner";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

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
          <div className={styles.galeria}>
            <Galeria />
            <Populares />
          </div>
        </main>
        <Rodape />
      </>
    );
  }
}
