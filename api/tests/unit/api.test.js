// getCreationDateByReleaseTag.test.js

const { getCreationDateByReleaseTag } = require('../../controllers/GitController');
const { Octokit } = require('@octokit/rest');

// Mock the Octokit to prevent actual API requests
jest.mock('@octokit/rest', () => {
  return {
    Octokit: jest.fn(() => ({
      request: jest.fn(),
    })),
  };
});

describe('getCreationDateByReleaseTag', () => {
  const mockResponseData = { data: { object: { url: 'mock-url' } } };
  const mockRequestParams = { tag: 'v1.0.0' };

  beforeEach(() => {
    // Reset the mock function's state before each test
    jest.clearAllMocks();
  });

  it('should return the correct created_at date for a valid tag', async () => {
    const mockRequest = jest.fn().mockImplementation((route, options) => {
      if (route === 'GET /repos/{owner}/{repo}/git/ref/tags/{tag}') {
        return Promise.resolve(mockResponseData);
      } else {
        return Promise.resolve({ data: { author: { date: '2022-09-14T21:44:59Z' } } });
      }
    });

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
    expect(res.send).toHaveBeenCalledWith({ created_at: '2022-09-14T21:44:59Z' });
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
});
