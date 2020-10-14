import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Canvas,
} from "@react-pdf/renderer";
import "./index.css";
import dinbeatlogo from "./img/logo.png";

//tutorial
// https://codesandbox.io/s/react-pdf-demo-i1ted?from-embed=&file=/src/MovieList.jsx

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f0f3f7",
  },
  logo: {
    width: 150,
    padding: 10,
    left: 430,
  },
  text: {
    padding: "5",
    fontSize: 12,
  },
  clinicName: {
    color: "#2C3B4D",
  },
  divPaciente: {
    backgroundColor: "#ebebee",
  },
  titleOrange: {
    color: "#eb6b30",
    fontSize: 14,
  },
  titleBlue: {
    color: "#2C3B4D",
    paddingLeft: 5,
    fontSize: 14,
  },
  textParagraph: {
    fontSize: 11,
    padding: 5,
  },
  textcollegiate: {
    fontSize: 12,
    padding: 5,
  },

  table: {
    display: "table",
    borderStyle: "solid",
    borderWidth: 1,
  },
 
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src={dinbeatlogo} alt="images" style={styles.logo} />
      <View style={styles.title}>
        <Text style={styles.clinicName}>NOMBRE CLINICA DIAGNOSTICADORA</Text>
      </View>
      <View style={styles.divPaciente}>
        <Text style={styles.titleOrange}>DATOS PACIENTE</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.text}>Nombre:</Text>
            <Text style={styles.text}>Sexo:</Text>
            <Text style={styles.text}>Raza:</Text>
            <Text style={styles.text}>Peso:</Text>
            <Text style={styles.text}>Fecha de nacimiento:</Text>
          </View>
          <View>
            <Text style={styles.text}>Clínica de origen:</Text>
            <Text style={styles.text}>Fecha demanda del servicio:</Text>
            <Text style={styles.text}>Motivo del exámen:</Text>
          </View>
        </View>
      </View>
      <View style={styles.divAntecedentes}>
        <Text style={styles.titleOrange}>ANTECEDENTES</Text>
        <Text style={styles.text}>IService.request.poll</Text>
      </View>
      <View style={styles.divAnalisis}>
        <Text style={styles.titleOrange}>ANÁLISI DEL ELECTROCARDIOGRAMA</Text>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.text}>Frecuencia cardíaca</Text>
            <Text style={styles.text}>Ritmo cardíaco</Text>
            <Text style={styles.text}>Onda P Amplitud</Text>
            <Text style={styles.text}>Onda P Duración</Text>
            <Text style={styles.text}>Intervalo PQ</Text>
            <Text style={styles.text}>Complejo QRS</Text>
            <Text style={styles.text}>Amplitud</Text>
            <Text style={styles.text}>Duración</Text>
          </View>
          
        </View>
        
      </View>

      <View style={styles.divComentarios}>
        <Text style={styles.titleBlue}>
          INTERPRETACIÓN ELECTROCARDIOGRÁFICA
        </Text>
        <Text style={styles.textParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          metus quis arcu porttitor fringilla in ac lorem. Etiam ut diam nec
          libero facilisis porta. Nulla id egestas ante, a porttitor tellus.{" "}
        </Text>
        <Text style={styles.titleBlue}>DIAGNÓSTICO ELECTROCARDIOGRÁFICO</Text>
        <Text style={styles.textParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          metus quis arcu porttitor fringilla in ac lorem. Etiam ut diam nec
          libero facilisis porta. Nulla id egestas ante, a porttitor tellus.{" "}
        </Text>
        <Text style={styles.titleBlue}>
          CONCLUSIONES Y COMENTARIOS CLÍNICOS
        </Text>
        <Text style={styles.textParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          metus quis arcu porttitor fringilla in ac lorem. Etiam ut diam nec
          libero facilisis porta. Nulla id egestas ante, a porttitor tellus.{" "}
        </Text>
        <Text style={styles.textcollegiate}> Fdo. ...</Text>
        <Text style={styles.textcollegiate}> Nº Colegiado: ...</Text>
      </View>
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer className="pdfviewer">
    <MyDocument />
  </PDFViewer>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
