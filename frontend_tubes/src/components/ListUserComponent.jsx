import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      showConfirmationModal: false,
      userToDeleteId: null,
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }

  deleteUser(id) {
    // Menampilkan modal konfirmasi sebelum menghapus
    this.setState({
      showConfirmationModal: true,
      userToDeleteId: id,
    });
  }

  confirmDelete() {
    const id = this.state.userToDeleteId;
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
        showConfirmationModal: false,
        userToDeleteId: null,
      });
    });
  }

  cancelDelete() {
    // Membatalkan penghapusan dan menutup modal konfirmasi
    this.setState({
      showConfirmationModal: false,
      userToDeleteId: null,
    });
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  render() {
    return (
      <div>
        <style>
          {`
            .custom-table {
              background-color: #f8f9fa;
              border-radius: 10px;
            }

            .custom-table th, .custom-table td {
              border: 1px solid #dee2e6;
              padding: 8px;
              text-align: center;
            }

            .custom-table thead {
              background-color: #4F749E;
              color: white;
            }

            .custom-table tbody tr:nth-child(even) {
              background-color: #ECECEC;
            }

            .custom-table tbody tr:nth-child(odd) {
              background-color: #FAFAFA;
            }

            .action-buttons button {
              margin-left: 5px;
            }

            .btn-success {
              background-color: #28a745;
              color: white;
            }

            .btn-info {
              background-color: #17a2b8;
              color: white;
            }

            .btn-danger {
              background-color: #dc3545;
              color: white;
            }

            .btn-secondary {
              background-color: #6c757d;
              color: white;
            }

            .confirmation-modal {
              display: ${this.state.showConfirmationModal ? "block" : "none"};
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgba(0, 0, 0, 0.4);
            }

            .modal-content {
              background-color: #fefefe;
              margin: 15% auto;
              padding: 20px;
              border: 1px solid #888;
              width: 50%;
              text-align: center;
            }

            .confirmation-modal button {
              margin: 5px;
            }
          `}
        </style>

        {/* Modal Konfirmasi Delete */}
        <div className="confirmation-modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this item?</p>
            <button onClick={this.confirmDelete} className="btn btn-danger">
              Delete
            </button>
            <button onClick={this.cancelDelete} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>

        <h2 className="text-center pt-5" style={{ fontWeight: 'bold', fontSize: '50px' }}>List of Items</h2>
        <div className="row">
          <button className="btn btn-info" onClick={this.addUser}>
            Add Item
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered custom-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Harga Satuan</th>
                <th>Lokasi</th>
                <th>Deskripsi</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                  <td>{user.id}</td>
                  <td>{user.nama_barang}</td>
                  <td>{user.jumlah}</td>
                  <td>{user.harga_satuan}</td>
                  <td>{user.lokasi}</td>
                  <td>{user.deskripsi}</td>
                  <td className="action-buttons">
                    <button onClick={() => this.editUser(user.id)} className="btn btn-info">Update</button>
                    <button onClick={() => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                    <button onClick={() => this.viewUser(user.id)} className="btn btn-secondary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
