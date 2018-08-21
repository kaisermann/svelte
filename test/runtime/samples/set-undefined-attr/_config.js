export default {
	data: {
		foo: 1
	},

	html: `<div foo="1"></div>`,

	test ( assert, component, target ) {
		component.set({ foo: undefined });
		assert.htmlEqual( target.innerHTML, '<div></div>' );
	}
};
