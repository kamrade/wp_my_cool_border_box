wp.blocks.registerBlockType('acquirer/border-box', {
  title: 'My Cool Border Box',
  icon: 'welcome-widgets-menus',
  category: 'common',
  attributes: {
    content: {
      type:   'string'
    },
    color: {
      type: 'string'
    }
  },

  // TODO: DON'T FORGET TO CHANGE React to wp.element

  edit: function(props) {

    function updateContent(event) {
      props.setAttributes({ content: event.target.value });
    }

    function updateColor(value) {
      props.setAttributes({ color: value.hex });
    }

    // <div>
    //   <h3>Your cool border box</h3>
    //     <input type="text" value={props.attributes.content} onChange={updateContent} />
    //     <wp.components.ColorPicker
    //         color={props.attributes.color}
    //       onChangeComplete={updateColor}
    //     />
    // </div>

    return React.createElement("div", null, React.createElement("h3", null, "Your cool border box"), React.createElement("input", {
      type: "text",
      value: props.attributes.content,
      onChange: updateContent
    }), React.createElement(wp.components.ColorPicker, {
      color: props.attributes.color,
      onChangeComplete: updateColor
    }));

  },

  save: function(props) {
    return React.createElement("h3", {
      className: "p-3",
      style: {
        border: "2px solid ".concat(props.attributes.color)
      }
    }, props.attributes.content);
  }
})
