import React, { Component } from "react";
import UserService from "../services/UserService";
import NumberSelector from "../components/NumberSelector";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      nama_barang: "",
      jumlah: 0,
      harga_satuan: "",
      lokasi: "",
      deskripsi: "",
      showNotification: false,
    };

    // Bind fungsi
    this.changeNamaBarang = this.changeNamaBarang.bind(this);
    this.changeHargaSatuan = this.changeHargaSatuan.bind(this);
    this.changeLokasi = this.changeLokasi.bind(this);
    this.changeDeskripsi = this.changeDeskripsi.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          nama_barang: user.nama_barang,
          jumlah: user.jumlah,
          harga_satuan: user.harga_satuan,
          lokasi: user.lokasi,
          deskripsi: user.deskripsi,
        });
      });
    }
  }

  saveOrUpdateUser = async (e) => {
    e.preventDefault();
    let user = {
      nama_barang: this.state.nama_barang,
      jumlah: this.state.jumlah,
      harga_satuan: this.state.harga_satuan,
      lokasi: this.state.lokasi,
      deskripsi: this.state.deskripsi,
    };

    try {
      if (this.state.id === "_add") {
        await UserService.createUser(user);
        this.setState({ showNotification: true });
        setTimeout(() => {
          this.setState({ showNotification: false });
          this.props.history.push("/users");
        }, 3000);
      } else {
        await UserService.updateUser(user, this.state.id);
        this.props.history.push("/users");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  changeNamaBarang = (event) => {
    this.setState({ nama_barang: event.target.value });
  };

  changeJumlah = (newJumlah) => {
    this.setState({ jumlah: newJumlah });
  };

  changeHargaSatuan = (event) => {
    this.setState({ harga_satuan: event.target.value });
  };

  changeLokasi = (event) => {
    this.setState({ lokasi: event.target.value });
  };

  changeDeskripsi = (event) => {
    this.setState({ deskripsi: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    return this.state.id === "_add" ? (
      <h3 className="text-center">Add Item</h3>
    ) : (
      <h3 className="text-center">Update Item</h3>
    );
  }

  notification = (
    <div className="notification">
      <span className="notification-checkmark">&#10003;</span>
      <p>Item added successfully</p>
      <button
        onClick={() => this.setState({ showNotification: false })}
        className="btn btn-primary"
      >
        Okay
      </button>
    </div>
  );

  render() {
    return (
      <div>
        {/* Notifikasi */}
        {this.state.showNotification && this.notification}

        {/* Form Input */}
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Nama Barang: </label>
                    <input
                      placeholder="Nama Barang"
                      name="nama_barang"
                      className="form-control"
                      value={this.state.nama_barang}
                      onChange={this.changeNamaBarang}
                    />
                  </div>
                  <div className="form-group">
                    <label>Jumlah :</label>
                    {/* Integrasikan komponen NumberSelector */}
                    <NumberSelector
                      number={this.state.jumlah}
                      onChangeNumber={this.changeJumlah}
                    />
                  </div>
                  <div className="form-group">
                    <label>Harga Satuan:</label>
                    <input
                      type="int"
                      placeholder="Harga Satuan"
                      name="harga_satuan"
                      className="form-control"
                      value={this.state.harga_satuan}
                      onChange={this.changeHargaSatuan}
                    />
                  </div>
                  <div className="form-group">
                    <label> Lokasi: </label>
                    <select
                      name="lokasi"
                      className="form-control"
                      value={this.state.lokasi}
                      onChange={this.changeLokasi}
                    >
                      <option value="Bandung">Bandung</option>
                      <option value="Jakarta">Jakarta</option>
                      <option value="Denpasar">Denpasar</option>
                      <option value="Manokwari">Manokwari</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Deskripsi:</label>
                    <input
                      placeholder="Deskripsi"
                      name="deskripsi"
                      className="form-control"
                      value={this.state.deskripsi}
                      onChange={this.changeDeskripsi}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;