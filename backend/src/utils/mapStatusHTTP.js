const httpErrorMap = {
  SUCCESSFUL: 200,
  DELETED: 204,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_DATA: 422,
  REQUIRED: 400,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

export default mapStatusHTTP;
