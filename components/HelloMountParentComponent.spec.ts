import { mount, shallowMount } from "@vue/test-utils";
import HelloMountParentComponent from "./HelloMountParentComponent.vue";

describe("HelloMountParentComponent with mount", () => {
  test("renders child component", () => {
    const wrapper = mount(HelloMountParentComponent);
    expect(wrapper.find("span").text()).toBe("Hello from Child!");
  });
});

describe("HelloMountParentComponent with shallowMount", () => {
  test("child component is stubbed", () => {
    const wrapper = shallowMount(HelloMountParentComponent);
    expect(
      wrapper.findComponent({ name: "HelloMountChildComponent" }).exists()
    ).toBe(true);
  });
});

describe("HelloMountParentComponent with stubs", () => {
  test("stubs HelloMountChildComponent", () => {
    const wrapper = mount(HelloMountParentComponent, {
      stubs: ["HelloMountChildComponent"],
    });
    // HelloMountChildComponent がスタブ化されているため、その内部の内容はレンダリングされない
  });
});
