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

describe('TEST 「PUT api/comments/:id」', () => {
  it('適切で無いidを送ると400エラーが返る', async () => {
    const data = { id: '1' };

    const response = await putComment(400, data);

    assert.deepEqual(response.body, {
      message: 'idに適切でない値が入っています、1以上の数字を入れてください',
    });
  });
});
assert;
getComments();
