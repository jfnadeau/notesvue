import { shallow } from "vue-test-utils";
import { NoteEditor } from "./note-editor";

describe("NoteEditor", () => {

  it("should render like snapshot", () => {

    let sut = shallow(NoteEditor);
    expect(sut.element).toMatchSnapshot();

  });

});