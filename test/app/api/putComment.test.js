const requestHelper = require('../../../helper/requestHelper');
const assert = require('power-assert');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200,
  });
  return response;
};

const putComment = async (code, data) => {
  const response = await requestHelper
    .request({
      method: 'put',
      endPoint: '/api/comments/:id',
      statusCode: code,
    })
    .send(data);
  return response;
};

describe('TEST 「PUT api/comments/:id」', () => {});
requestHelper;
assert;
getComments();
putComment();
