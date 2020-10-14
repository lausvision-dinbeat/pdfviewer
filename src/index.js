import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import './index.css';
import dinbeatlogo from './img/logo.png';

//tutorial
// https://codesandbox.io/s/react-pdf-demo-i1ted?from-embed=&file=/src/MovieList.jsx

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#f0f3f7',
    margin: 15,

  },
  logo: {
    width: 150,
    padding: 10,
    left: 430,
  },
  clinicName: {
    color: '#2C3B4D'
  },
  divPaciente: {
    backgroundColor: '#ebebee'
  },
  datosPaciente: {
    color: '#eb6b30'
  },

});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <Image src={dinbeatlogo} alt="images"  style={styles.logo} />
      <View style={styles.title}>
        <Text style={styles.clinicName}>NOMBRE CLINICA DIAGNOSTICADORA</Text>
      </View>
      <View style={styles.divPaciente}>
        <Text style={styles.datosPaciente}>DATOS PACIENTE</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
              <Text>Nombre:</Text>
              <Text>Sexo:</Text>
              <Text>Raza:</Text>
              <Text>Peso:</Text>
              <Text>Fecha de nacimiento:</Text>
          </View>
          <View>
              <Text>Clínica de origen:</Text>
              <Text>Fecga demanda del servicio:</Text>
              <Text>Motivo del exámen:</Text>
          </View>
        </View>
      </View>
      <View style={styles.divAntecedentes}>
        <Text style={styles.datosPaciente}>Antecedentes</Text>
      </View>
    </Page>
  </Document>
);


const App = () => (
<PDFViewer className='pdfviewer'>
<MyDocument/>
</PDFViewer>

);
 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);