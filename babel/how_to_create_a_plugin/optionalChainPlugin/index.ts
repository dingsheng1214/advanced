/**
 * @param  {} babel
 * {@link anotherFunc}
 */
function a(babel){
    const { types: t, template } = babel;

    return {
      name: "ast-transform", // not required
      visitor: {
        OptionalMemberExpression(path) {
          // a?.b  object->a property->b
          let { object, property } = path.node;
          console.log(object, property)

          // object.property
          let memberExpr = t.memberExpression(object, property, path.node.computed);

          // 使用 void 0 代替 undefined
          let undef = path.scope.buildUndefinedNode()
          // 使用 _obj 缓存
          let tmp = path.scope.generateUidIdentifier()
          // a?.b 替换为 a == null ? undefined : a.b
          path.replaceWith(
            template.expression.ast`
                  （tmp = ${object}） == null ? ${undef} : ${memberExpr}
              `
          );
        }
      }
    };
  }
