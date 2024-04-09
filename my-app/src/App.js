import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { useProSidebar } from "react-pro-sidebar";

const App = () => {
  
  const { collapseSidebar } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            component={<Link to="/" className="link" />}
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          >
            <h2>QUICKPAY</h2>
          </MenuItem>
          <MenuItem
            component={<Link to="dashboard" className="link" />}
            icon={<GridViewRoundedIcon />}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
          <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
            <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
            <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
          </SubMenu>
          <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
            <MenuItem icon={<AccountBalanceRoundedIcon />}>
              Current Wallet
            </MenuItem>
            <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link to="transactions" className="link" />}
            icon={<MonetizationOnRoundedIcon />}
          >
            Transactions
          </MenuItem>
          <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
            <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
            <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
            <MenuItem icon={<NotificationsRoundedIcon />}>
              Notifications
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </section>
    </div>
  );
};
export default App;

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">WELCOME TO QUICKPAY</h1>
      <h3 className="home-subheader">Bank of the Free</h3>
      <p className="home-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod risus eu leo tincidunt blandit. Proin eget tortor risus. Vivamus euismod magna dui, quis vehicula risus condimentum eu. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">DASHBOARD PAGE</h1>
      <h3 className="dashboard-subheader">Welcome User</h3>
      <p className="dashboard-paragraph">
        Access your financial information, track spending, and manage transactions easily. View account balances, recent activity, and more.
      </p>
    </div>
  );
};

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h1 className="transactions-header">KEEP TRACK OF YOUR SPENDINGS</h1>
      <h3 className="transactions-subheader">Seamless Transactions</h3>
      <p className="transactions-paragraph">
        Monitor your financial health with a clear overview of your income and expenses. Analyze spending patterns and identify areas for optimization. Enjoy a smooth and secure transaction experience.
      </p>
    </div>
  );
};