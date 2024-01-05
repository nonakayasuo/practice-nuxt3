import { mount, shallowMount } from "@vue/test-utils";
import HelloVitestComponent from "./HelloVitestComponent.vue";

// describe("HelloVitestComponent", () => {
//   test("renders correctly", () => {
//     const wrapper = mount(HelloVitestComponent);
//     expect(wrapper.html()).toMatchInlineSnapshot(`
//       "<div>
//         <p>Hello, World!</p>
//       </div>"
//     `);
//   });
// });

describe("HelloVitestComponent", () => {
  test("renders correctly", () => {
    const wrapper = shallowMount(HelloVitestComponent);
    console.log(wrapper.html());
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div>
        <p>Hello, World!</p>
      </div>"
    `);
  });
});
