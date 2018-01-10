import Vue from "vue";
import { createRenderer } from "vue-server-renderer";
import { shallow, Wrapper } from "vue-test-utils";

import { Note } from "../../services/notes/model";
import { NoteEditor } from "./note-editor";

describe("NoteEditor", () => {

  it("should render like snapshot", () => {

    const sut = shallow(NoteEditor);
    expect(createRenderer().renderToString(sut.vm)).resolves.toMatchSnapshot();

  });

  it("should render note content when note prop is updated", async () => {

    const newNote: Note = {
      title: "new title",
      description: "new description",
    };

    const sut = shallow(NoteEditor);
    sut.setProps({ initialNote: newNote });

    expect(createRenderer().renderToString(sut.vm)).resolves.toMatchSnapshot();
  });

  it("should emit save event when save button is clicked", () => {

    const sut = shallow(NoteEditor);
    setInputValue(sut, "input[name='title']", "Input title");
    setInputValue(sut, "textarea[name='description']", "Input desc");

    sut.find("button").trigger("click");

    expect(sut.emitted("save")[0]).toEqual(
      [{ title: "Input title", description: "Input desc" } as Note],
    );

  });

});

function setInputValue<V extends Vue>(
  wrapper: Wrapper<V>,
  selector: string,
  value: string) {

  const inputWrapper = wrapper.find(selector);
  (inputWrapper.element as HTMLInputElement).value = value;
  inputWrapper.trigger("input");
}
