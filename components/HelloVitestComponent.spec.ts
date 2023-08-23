import { shallowMount } from "@vue/test-utils";

describe("HelloVitestComponent", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(SetupComponent);
    expect(wrapper.html()).toMatchInlineSnapshot();
  });
});
