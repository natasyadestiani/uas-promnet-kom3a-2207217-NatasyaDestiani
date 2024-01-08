import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <style>
          {`
            .custom-card {
              background-color: #f8f9fa; /* Warna latar belakang */
              border: 1px solid #dee2e6; /* Warna garis tepi */
              border-radius: 10px; /* Sudut card */
              margin: 20px auto; /* Margin dari atas dan bawah */
            }

            .custom-card-header {
              background-color: #4F749E; /* Warna latar belakang header */
              color: white; /* Warna teks header */
              text-align: center;
              font-size: 25px;
              padding: 10px; /* Ruang di dalam header */
            }

            .custom-card-body {
              padding: 20px; /* Ruang di dalam body */
            }

            .row2 {
              margin-bottom: 2px;
            }

            .roww {
              font-weight: normal;
              font-size: 18px;
              color: #495057; /* Warna teks utama */
            }
          `}
        </style>
        <div className="card col-md-6 offset-md-3 custom-card">
          <div className="custom-card-header">Detail Item</div>
          <div className="card-body custom-card-body">
            <div className="row2">
              <label>ID:</label>
              <div className="roww">{this.state.user.id}</div>
            </div>
            <div className="row2">
              <label>Nama Barang:</label>
              <div className="roww">{this.state.user.nama_barang}</div>
            </div>
            <div className="row2">
              <label>Jumlah :</label>
              <div className="roww">{this.state.user.jumlah}</div>
            </div>
            <div className="row2">
              <label>Harga Satuan :</label>
              <div className="roww">{this.state.user.harga_satuan}</div>
            </div>
            <div className="row2">
              <label>Lokasi :</label>
              <div className="roww">{this.state.user.lokasi}</div>
            </div>
            <div className="row2">
              <label>Deskripsi :</label>
              <div className="roww">{this.state.user.deskripsi}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
