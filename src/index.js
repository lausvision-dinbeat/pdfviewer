import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

//tutorial
// https://codesandbox.io/s/react-pdf-demo-i1ted?from-embed=&file=/src/MovieList.jsx

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #3</Text>
      </View>
    </Page>
  </Document>
);


const App = () => (
  <PDFDownloadLink
          document={<MyDocument />}
          fileName="movielist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>

);
 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);