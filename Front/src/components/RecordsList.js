import React, { useState, useEffect } from "react";
import RecordDataService from "../services/RecordService";
import { Link } from "react-router-dom";

const RecordsList = () => {
  const [records, setRecords] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveRecords();
  }, []);

  const retrieveRecords = () => {
    RecordDataService.getAll()
      .then(response => {
        setRecords(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveRecords();
    setCurrentRecord(null);
    setCurrentIndex(-1);
  };

  const setActiveRecord = (record, index) => {
    setCurrentRecord(record);
    setCurrentIndex(index);
  };

  const removeAllRecords = () => {
    RecordDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      Lista
    </div>
  );
};

export default RecordsList;