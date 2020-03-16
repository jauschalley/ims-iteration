import axios from 'axios';

const config = () => {
    return {
      "headers": {
        "jwt": sessionStorage.getItem('Token')
      },
    };
};

const RequestService = {
  get: async (url, callback, failureCallback) => {
    axios.get(url, config()).then((response) => {
      callback(response);
    }).catch((err) => { 
      failureCallback && failureCallback(err);
    });
  },
  post: async (url, body, callback, failureCallback) => {
    axios.post(url, body, config()).then((response) => {
      callback(response);
    }).catch((err) => {
      failureCallback && failureCallback(err);
    });
  },
  delete: async (url, callback, failureCallback) => {
    axios.delete(url).then((response) => {
      callback(response);
    }).catch((err) => {
      failureCallback && failureCallback(err);
    });
  }
};

export default RequestService;