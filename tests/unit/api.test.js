// getCreationDateByReleaseTag.test.js

const { getCreationDateByReleaseTag } = require('../../api/controllers/GitController');
const { Octokit } = require('@octokit/rest');
const axios = require('axios');

// Mock the Octokit and axios modules to prevent actual API requests
jest.mock('@octokit/rest');

describe('getCreationDateByReleaseTag', () => {
  const mockResponseData = { created_at: '2023-08-04T12:34:56Z' };
  const mockRequestParams = { tag: 'v1.0.0' };

  beforeEach(() => {
    // Reset the mock function's state before each test
    jest.clearAllMocks();
  });

  it('should return the correct created_at date for a valid tag', async () => {
    // Mock the API response
    const mockRequest = jest.fn().mockResolvedValue({ data: mockResponseData });
    Octokit.mockImplementation(() => ({
      request: mockRequest,
    }));

    const req = { params: mockRequestParams };
    const res = {
      send: jest.fn(),
      sendStatus: jest.fn(),
    };

    // Call the function
    await getCreationDateByReleaseTag(req, res);

    // Verify the function's behavior
    expect(res.send).toHaveBeenCalledWith({ created_at: mockResponseData.created_at });
    expect(res.sendStatus).not.toHaveBeenCalled();
  });

  it('should send the correct error status for unsuccessful API response', async () => {
    // Mock the API response with an error
    const mockRequest = jest.fn().mockRejectedValue({ status: 404 });
    Octokit.mockImplementation(() => ({
      request: mockRequest,
    }));

    const req = { params: { tag: 'invalid-tag'} };
    const res = {
      send: jest.fn(),
      sendStatus: jest.fn(),
    };

    // Call the function
    await getCreationDateByReleaseTag(req, res);

    // Verify the function's behavior
    expect(res.sendStatus).toHaveBeenCalledWith(404);
    expect(res.send).not.toHaveBeenCalled();
  });

  // Add more test cases based on your requirements
});
