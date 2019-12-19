import React from 'react';
import './Page.css';

function Page(props) {
  return (
    <BackDisplay displayFile={props.backDisplayFile} />
    <h1 className="pageHeader"> {props.header} </h1>
    <h3 className="pageDescription"> {props.description} </h3>
  );
}

function
