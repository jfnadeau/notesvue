import { ActionContext } from "vuex";

import { Note } from "../../services/notes/model";
import { getNotes } from "../../services/notes/service";
import { RootStore } from "../model/rootstore";
import { fetchNotesAction } from "./fetch-notes";

jest.mock("../../services/notes/service");
describe("fetchNotesAction", () => {
  let actionContext: ActionContext<RootStore, any>;
  const mockGetNotesResult: Note[] = [
    {
      title: "Mock Title",
      description: "Mock Description"
    }
  ];

  beforeEach(() => {
    actionContext = mockActionContext(mockRootStoreState());
    (getNotes as jest.Mock).mockReturnValue(
      Promise.resolve(mockGetNotesResult)
    );
  });

  it("should call getNotes service", async () => {
    if (typeof fetchNotesAction === "function") {
      await fetchNotesAction(actionContext, undefined);
    }

    expect(getNotes).toHaveBeenCalledTimes(1);
  });

  it("should commit the notes received to the store", async () => {
    if (typeof fetchNotesAction === "function") {
      await fetchNotesAction(actionContext, undefined);
    }

    expect(actionContext.commit).toHaveBeenCalledWith({
      type: "load-notes",
      notes: mockGetNotesResult
    });
  });
});

function mockRootStoreState(): RootStore {
  return {
    notes: [],
    selectedIndex: null,
    hasError: false,
    message: null
  };
}

function mockActionContext<S>(state: S): ActionContext<S, any> {
  return {
    dispatch: jest.fn(),
    commit: jest.fn(),
    state,
    getters: {},
    rootState: {},
    rootGetters: {}
  };
}
