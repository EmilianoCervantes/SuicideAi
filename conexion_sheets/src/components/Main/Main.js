import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../Navbar/Navbar';
import ReactGoogleSheetConnector from "react-google-sheet-connector";
import GoogleSpreadsheet from "google-spreadsheet"
import creds from '../Credenciales/Credenciales.json'

const rows = [];
const palabras = [];
const valores = [];
const chartData = [];
class Main extends Component {
  constructor( props ){
    super( props )
    this.state = { rows, palabras, valores, chartData }
    this.cargarDatos = this.cargarDatos.bind(this)
    this.llenarTabla = this.llenarTabla.bind(this)
  }

  componentWillMount(){
    let doc = new GoogleSpreadsheet('1j5uZP0eo4a9FdhM9sKHxb3AVObnsOgB0BBz3lLzOlDI');
    let palabras = [];
    let valores = []
    doc.useServiceAccountAuth(creds, function(err){
      doc.getRows(1, function(err, rows){
        /*console.log(rows.length)
        for(let i = 0; i < rows.length; i++){
          console.log(rows[i].palabra);
          console.log(rows[i].porcentaje);
        }*/
        this.setState({rows: rows}, () =>{
          this.cargarDatos();
        });
      }.bind(this));
    }.bind(this));
  }

  cargarDatos(){
    console.log("Datos cargados")
    const datos = this.state.rows
    let palabras = [];
    let valores = [];
    console.log(datos.length)
    for(let i = 0; i < datos.length; i++){
      palabras.push(datos[i].palabra)
      valores.push(datos[i].porcentaje)
    }
    this.setState({ palabras: palabras, valores: valores }, () =>{
      this.llenarTabla();
    })
  }

  llenarTabla(){
    let chartData = {
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[
        {
          label:'Análisis de Palabras',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ]
        }
      ]
    }
    chartData.datasets[0].data = this.state.valores
    chartData.labels = this.state.palabras
    console.log(chartData)
    this.setState({ chartData: chartData })
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="chart">
          <Bar
            data={ this.state.chartData }
          />
        </div>
      </div>
    );
  }
}

export default Main;
