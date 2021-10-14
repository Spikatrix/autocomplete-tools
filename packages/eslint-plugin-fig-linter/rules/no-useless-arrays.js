module.exports = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create(context) {
    return {
      "ObjectExpression > Property": function (node) {
        const propName = node.key.name;
        const propValue = node.value;
        if (
          (propName === "name" ||
            propName === "args" ||
            propName === "generators") &&
          propValue.type === "ArrayExpression" &&
          propValue.elements.length === 1
        ) {
          context.report({
            node,
            message: `If \`${propName}\` is a single value it should not be enclosed in square brackets.`,
            fix(fixer) {
              const [wrapperStart, wrapperEnd] = propValue.range;
              // it doesn't take into account `[...elem]`
              const [itemStart, itemEnd] = propValue.elements[0].range;
              return [
                fixer.removeRange([wrapperStart, itemStart]),
                fixer.removeRange([itemEnd, wrapperEnd]),
              ];
            },
          });
        }
      },
    };
  },
};
