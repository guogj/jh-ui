import { defineComponent, openBlock, createElementBlock } from 'vue';

var script = defineComponent({
    name: "JHIcon",
  setup() {
    
  },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", null, "icon"))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};
let _Icon = script;

export { _Icon as default };
