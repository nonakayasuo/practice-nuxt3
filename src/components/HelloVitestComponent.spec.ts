import { shallowMount } from "@vue/test-utils";
import HelloVitestComponent from "./HelloVitestComponent.vue";

describe("HelloVitestComponent", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(HelloVitestComponent);
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div>
        <p>Hello, World!</p>
      </div>"
    `);
  });
});
