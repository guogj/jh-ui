import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: "JHButton",
    props: {
        'type': {
            type: String,
            default: 'primary',
            validator: (val) => {
                return ["primary", "success", "info", "warning", "danger", "text"].includes(val);
            }
        },
        'size': {
            type: String,
            default: 'medium',
            validator: (val) => {
                return ['large', 'medium', 'small', 'mini'].includes(val);
            }
        },
        'plain': Boolean,
        'round': Boolean,
        'disabled': Boolean,
        'icon': String,
        'loading': Boolean,
    },
    emits: ["clickHandle"],
    setup(props, ctx) {
        const classs = computed(() => {
            return ['jh-button', `jh-button--${props.type}`, {
                    'is-disabled': props.disabled,
                    'is-plain': props.plain,
                    'is-round': props.round
                }];
        });
        const fn2 = (e) => {
            console.log('fn2');
            ctx.emit('clickHandle', e);
        };
        console.log(props, ctx.attrs, ctx.slots);
        return {
            classs,
            fn2
        };
    }
});

const _hoisted_1 = ["disabled"];
const _hoisted_2 = {
  key: 0,
  class: "jh-icon-loading"
};
const _hoisted_3 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.fn2 && _ctx.fn2(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_2))
      : createCommentVNode("v-if", true),
    (_ctx.icon&&!_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(`jh-icon-${_ctx.icon}`)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};
let _Button = script;

export { _Button as default };
