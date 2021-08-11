import React, { useState } from "react";
import RecordDataService from "../services/RecordService";

export const SaveRecord = (time) => {
  var data = {
    time: time
  };

  return RecordDataService.create(data)
    .then(response => {
      // setRecord({
      //   id: response.data.id,
      //   time: response.data.time,
      // });
      console.log(response.data);
      return response.data
    })
    .catch(e => {
      console.log(e);
      return e
    });
};

export const GetRecords = () => {

  return RecordDataService.getAll()
  .then(response => {
    console.log(response.data);
    return response.data
  })
  .catch(e => {
    console.log(e);
    return e
  });
}