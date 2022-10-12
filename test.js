// We use class syntax to define our extension object
// This isn't actually necessary, but it tends to look the best

class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'executeCustomJavascript',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Exe Javascr',

      blocks: [
        {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'execute',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Run Javascript [IO][IT][CO]'
	    arguments: {
		IO: {
		 type: Scratch.ArgumentType.STRING,
		 defaultValue: ''
	      },
		IT: {
		 type: Scratch.ArgumentType.STRING,
		 defaultValue: ''
		},
		CO: {
		 type: Scratch.ArgumentType.STRING,
		}
	    }
        }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  execute(args) {
    var func = function customBlockFunction(args) {
    console.log(args.IO);
    return args.IO + 2;
	};
	return func();  // Reported value
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());