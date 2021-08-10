import React, { useState } from "react";
import RecordDataService from "../services/RecordService";

const AddRecord = () => {
  const initialRecordState = {
    id: null,
    time: "",
  };
  const [record, setRecord] = useState(initialRecordState);
  const [submitted, setSubmitted] = useState(false);

  const saveRecord = () => {
    var data = {
      time: '00:00:00'
    };

    RecordDataService.create(data)
      .then(response => {
        setRecord({
          id: response.data.id,
          time: response.data.time,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newRecord = () => {
    setRecord(initialRecordState);
    setSubmitted(false);
  };

  return (
    <div>
      <h1>Add</h1>
      <button onClick={saveRecord} className="btn btn-success">
        Submit
      </button>
    </div>
    
  );
};

export default AddRecord;