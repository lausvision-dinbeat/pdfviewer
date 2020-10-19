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
    padding: 15
  },
  logo: {
    width: 150,
    padding: 10,
    left: 420,
  },
  text: {
    padding: "5",
    fontSize: 12,
    paddingRight: 5,
  },
  textTable: {
    padding: "5",
    fontSize: 12,
    paddingRight: '25',
  },
  clinicName: {
    color: "#2C3B4D",
  },
  divPaciente: {
    backgroundColor: "#ebebee",
  },
  titleOrange: {
    color: "#4BC7BB",
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
  divlocation: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textlocation: {
    fontSize: 12,
    color: 'grey',
    padding: 5,
  },
});

const MyDocument = () => (
  <Document title="reportDiagnosis.pdf" author="Dinbeat">
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
            <Text style={styles.textTable}>Frecuencia cardíaca</Text>
            <Text style={styles.textTable}>Ritmo cardíaco</Text>
            <Text style={styles.textTable}>Onda P Amplitud</Text>
            <Text style={styles.textTable}>Onda P Duración</Text>
            <Text style={styles.textTable}>Intervalo PQ</Text>
            <Text style={styles.textTable}>QRS Amplitud</Text>
            <Text style={styles.textTable}>QRS Duración</Text>
            <Text style={styles.textTable}>Segmento ST</Text>
            <Text style={styles.textTable}>Intervalo QT medio</Text>
            <Text style={styles.textTable}>Onda T</Text>
          </View>
          <View>
            <Text style={styles.textTable}>120 lpm</Text>
            <Text style={styles.textTable}>ritmo sinusoidal</Text>
            <Text style={styles.textTable}>0.2 mV</Text>
            <Text style={styles.textTable}>20 ms</Text>
            <Text style={styles.textTable}>100 ms</Text>
            <Text style={styles.textTable}>1.2 mV</Text>
            <Text style={styles.textTable}>20 ms</Text>
            <Text style={styles.textTable}>0.0 mV</Text>
            <Text style={styles.textTable}>180 ms</Text>
            <Text style={styles.textTable}>-0.3 mV</Text>
          </View>
          <View>
            <Text style={styles.textTable}>
              adulto: 70-160 lpm | cachorro: 140-220 lpm
            </Text>
            <Text style={styles.textTable}> </Text>
            <Text style={styles.textTable}>menor a 0.4 mV</Text>
            <Text style={styles.textTable}>
              menor a 40 ms (menor a 50 ms en razas grandes)
            </Text>
            <Text style={styles.textTable}>60-135 ms</Text>
            <Text style={styles.textTable}>
              menor a 2.5 mV (menor a 3 mV en razas grandes)
            </Text>
            <Text style={styles.textTable}>
              menor a 50 ms (menor a 60 ms en razas grandes)
            </Text>
            <Text style={styles.textTable}>
              menor a 20 ms 
            </Text>
            <Text style={styles.textTable}>
              150-250 ms
            </Text>
            <Text style={styles.textTable}>
              menor a 1/4 amplitud onda R
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        }}
      />

      <View style={styles.divlocation}>
        <Text style={styles.textlocation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={styles.textlocation}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
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
