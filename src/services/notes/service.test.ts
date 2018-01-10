import fetchMock from 'fetch-mock';

import { ApiError, ApiErrorResponse } from '../common/fetch-api';
import { Note } from './model';
import { getNotes } from './service';

describe("notes api", () => {

  afterEach(fetchMock.restore);

  describe("getNotes", () => {

    let mockNotes: Note[] = [{
      title: "mock title",
      description: "mock description"
    }];

    it("should fetch /api/notes and return a Note array", async () => {

      fetchMock.getOnce('/api/notes', mockNotes);

      let notes = await getNotes()

      expect(notes).toEqual(mockNotes);
    });

    it("should handle standard api errors", async () => {

      let apiErrResp: ApiErrorResponse = {
        message: "API down for maintenance"
      };

      fetchMock.get('/api/notes', {
        body: apiErrResp,
        status: 500
      });

      await expect(getNotes()).rejects.toThrowError(ApiError);
      await expect(getNotes()).rejects.toThrowError(apiErrResp.message);
    });

  });
});