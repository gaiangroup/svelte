/* input.svelte generated by Svelte vx.x.x */
import {
	SvelteComponentDev,
	add_location,
	append_styles,
	attr_dev,
	detach_dev,
	dispatch_dev,
	element,
	init,
	insert_dev,
	noop,
	safe_not_equal,
	space,
	validate_slots
} from "svelte/internal";

import "svelte/internal/disclose-version";
const file = "input.svelte";

function add_css(target) {
	append_styles(target, "svelte-8brz37", "h1.svelte-8brz37{--done-replace-once:red}h2.svelte-8brz37{--done-replace-twice:green}div.svelte-8brz37{--keep-me:blue}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuc3ZlbHRlIiwibWFwcGluZ3MiOiJBQUtDLGdCQUFHLG9CQUNlLENBQUUsR0FDcEIsQ0FDQSxnQkFBRyxxQkFDZ0IsQ0FBRSxLQUNyQixDQUNBLGlCQUFJLENBQ0gsU0FBUyxDQUFFLElBQ1oiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiaW5wdXQuc3ZlbHRlIl19 */");
}

function create_fragment(ctx) {
	let h1;
	let t1;
	let h2;
	let t3;
	let div;

	const block = {
		c: function create() {
			h1 = element("h1");
			h1.textContent = "Testing Styles";
			t1 = space();
			h2 = element("h2");
			h2.textContent = "Testing Styles 2";
			t3 = space();
			div = element("div");
			div.textContent = "Testing Styles 3";
			attr_dev(h1, "class", "svelte-8brz37");
			add_location(h1, file, 0, 0, 0);
			attr_dev(h2, "class", "svelte-8brz37");
			add_location(h2, file, 1, 0, 24);
			attr_dev(div, "class", "svelte-8brz37");
			add_location(div, file, 2, 0, 50);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, h2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(h1);
				detach_dev(t1);
				detach_dev(h2);
				detach_dev(t3);
				detach_dev(div);
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Input', slots, []);
	const b = 2;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Input> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ b });
	return [b];
}

class Input extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { b: 0 }, add_css);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Input",
			options,
			id: create_fragment.name
		});
	}

	get b() {
		return this.$$.ctx[0];
	}

	set b(value) {
		throw new Error("<Input>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Input;
//# sourceMappingURL=_actual.js.map