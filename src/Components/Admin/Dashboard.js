import React, { Component } from "react";
import AdminLayout from "../../HOC/AdminLayout";

class Dashboard extends Component {
  render() {
    return (
      <AdminLayout>
        <div className="user_dashboard">
          <div>this is your dashboard</div>
        </div>
      </AdminLayout>
    );
  }
}

export default Dashboard;
