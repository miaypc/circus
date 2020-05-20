import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

function AdminPage() {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [acts, setActs] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

  const handleChangeActName = (event) => {
    console.log("changed!!!!", event);
    setName(event.target.value);
  };
  const handleChangeId = (event) => {
    setId(event.target.value);
  };
  const handleActSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit!!!!", event);
    // 192.168.1.1 = Mia's computer - Berlin
    // 192.175.3.2 = Unknow computer - France
    fetch("/api/act", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name: name,
      }),
    })
      .then(() => {
        setName("");
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  };

  const handleShowAct = (event) => {
    console.log("show!!!!", event);
    fetch("/api/act")
      .then((response) => response.json())
      .then((data) => {
        setActs(data.result);
        setLoading(false);
      });
  };

  const handleDelete = (event) => {
    console.log("delete!!!!", event);
    console.log(id);
    fetch(`api/act/${id}`, {
      method: "delete",
    }).then(() => {
      setId("");
    });
  };

  // useEffect(() => {
  //   handleShowAct();
  // }, [name, id]);

  return (
    <div>
      <Nav />

      <h1 style={{ color: "#f55d71", marginTop: "2em", textAlign: "center" }}>
        Manage the activities of our Gallery
      </h1>
      <div
        style={{ textAlign: "center", marginTop: "4em", marginBottom: "4em" }}
      >
        <h3 style={{ color: "#797c80" }}> Add another activity </h3>
        <TextField
          id="standard-basic"
          label="Activity Name"
          value={name}
          onChange={handleChangeActName}
        />
        <Button
          style={{
            color: "#f55d71",
            marginLeft: "2em",
            marginTop: "1em",
          }}
          variant="contained"
          onClick={handleActSubmit}
        >
          Add
        </Button>
      </div>
      <Divider />

      <div
        style={{ textAlign: "center", marginTop: "4em", marginBottom: "4em" }}
      >
        <h3 style={{ color: "#797c80" }}> Show our activities</h3>

        <Button
          style={{
            color: "#f55d71",
            marginTop: "1em",
            marginBottom: "1em",
          }}
          onClick={handleShowAct}
          variant="contained"
        >
          Show
        </Button>
        {loading ? (
          <h4 style={{ color: "#f55d71" }}>Please click the SHOW button</h4>
        ) : (
          acts.map((e) => (
            <div>
              <h4 style={{ color: "#f55d71" }}>Activity Name: {e.name}</h4>
              <p style={{ color: "#f55d71" }}>Activity id: {e._id}</p>
            </div>
          ))
        )}
      </div>
      <Divider />
      <div
        style={{ textAlign: "center", marginTop: "4em", marginBottom: "4em" }}
      >
        <h3 style={{ color: "#797c80" }}> Delete one of our activities</h3>
        <TextField
          id="standard-basic"
          label="Insert the ID"
          value={id}
          onChange={handleChangeId}
        />
        <Button
          style={{
            color: "#f55d71",
            marginTop: "1em",
            marginLeft: "2em",
          }}
          variant="contained"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPage;
