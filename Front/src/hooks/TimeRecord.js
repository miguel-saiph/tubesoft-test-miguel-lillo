import RecordDataService from "../services/RecordService";

export const SaveRecord = (time) => {
  var data = {
    time: time
  };

  return RecordDataService.create(data)
    .then(response => {
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