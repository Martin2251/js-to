import { Table, Button, Alert, Badge } from "react-bootstrap";
import React from "react";
import Pagination from "./Pagination";

class ShipmentsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortby: "",
      sortOrder: "",
      filterdData: []
    };
  }
