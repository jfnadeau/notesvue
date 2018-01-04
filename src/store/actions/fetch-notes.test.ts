jest.mock("../../services/notes/service")
import { getNotes } from "../../services/notes/service";

import { fetchNotesAction } from "./fetch-notes";
import { ActionContext, Dispatch } from "vuex";
import RootStore from "../model/rootstore";
import { Note } from "../../services/notes/model";

describe("fetchNotesAction", () => {

  let actionContext: ActionContext<RootStore, any>;
  let mockGetNotesResult: Note[] = [
    {
      title: "Mock Title",
      description: "Mock Description"
    }
  ];

  beforeEach(() => {
    actionContext = mockActionContext(mockRootStoreState());
    (getNotes as jest.Mock).mockReturnValue(Promise.resolve(mockGetNotesResult));
  });

  it("should call getNotes service", async () => {

    if (typeof fetchNotesAction === 'function') {
      await fetchNotesAction(actionContext, undefined);
    }

    expect(getNotes).toHaveBeenCalledTimes(1);
  });

  it("should commit the notes received to the store", async () => {

    if (typeof fetchNotesAction === 'function') {
      await fetchNotesAction(actionContext, undefined);
    }

    expect(actionContext.commit).toHaveBeenCalledWith({ type: "load-notes", notes: mockGetNotesResult });
  });
});

function mockRootStoreState(): RootStore {
  return {
    notes: [],
    selectedIndex: null
  };
}

function mockActionContext<S>(state: S): ActionContext<S, any> {
  return {
    dispatch: jest.fn(),
    commit: jest.fn(),
    state: state,
    getters: {},
    rootState: {},
    rootGetters: {}
  }
}