const assert = require('power-assert');
const requestHelper = require('../../../helper/requestHelper');

const getComments = async () => {
  const response = await requestHelper.request({
    method: 'get',
    endPoint: '/api/comments',
    statusCode: 200,
  });
  return response.body;
};

const deleteComment = async (id, code) => {
  const response = await requestHelper.request({
    method: 'delete',
    endPoint: `/api/comments/${id}`,
    statusCode: code,
  });
  return response;
};

assert;
getComments;
deleteComment;
