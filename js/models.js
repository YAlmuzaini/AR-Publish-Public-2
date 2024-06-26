var builders = [],
  tools = [];

function ARModel(name, dialogue) {
  //we can make name link to the el id to find it on click?
  this.name = name;
  this.dialogue = dialogue;
}

ARModel.prototype.speak = function () {
  return this.dialogue;
};

//Builder model
function Builder(name, dialogue, tool, successDialogue) {
  ARModel.call(this, name, dialogue);
  this.tool = tool;
  this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
  ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
  var buildersArray = [
    {
      name: "library",
      dialogue:
        "Reading books is enjoyable for some people. On campus where would you go to find or look for a book.",
    },
    {
      name: "mrOmar",
      dialogue:
        "After finding the library, now you need to find a person on campus:<br/>a. Sometimes he wears glasses<br/>b. You go to him for assistance and if you face an issue<br/>c. His name has 4 letters<br/>d. Take a selfie with that person to get the next clue",
      tool: { name: "selfie", dialogue: "Take a selfie with Mr. Omar" },
      successDialogue:
        "Great! You found Mr. Omar. Where do you go if you like video games?",
    },
    {
      name: "gamingLounge",
      dialogue:
        "After finding the gaming lounge, now you need to look for the following:<br/>a. 5 letters that is an abbreviation<br/>b. One letter in blue and 4 in white<br/>c. Outdoors have a new meaning",
    },
    {
      name: "ktechSign",
      dialogue:
        "After locating the ktech sign at the main entrance, now you are one step to finish the race and finding the treasure. You need to look for a door:<br/>a. Behind it you can fix virtually anything<br/>b. You can get any access and beyond<br/>c. The door is next to the door of money",
    },
    {
      name: "technologySolution",
      dialogue:
        "After locating the Technology Solution door you are at your final step, you need to find a person on campus, and you have to say the password: (AKONAMATATA)<br/>a. The password is:<br/>b. The person is located on the ground floor<br/>c. An L shaped office<br/>d. The only female in the office",
    },
    {
      name: "finalStep",
      dialogue:
        "You must send the selfie you took with Mr. Omar to @ktechstudentds Instagram account via direct message and “YOU ARE DONE CONGRTULATIONS”",
    },
  ];

  buildersArray.forEach(function (builder) {
    var tool = builder.tool
      ? new Tool(builder.tool.name, builder.tool.dialogue)
      : null;
    var newBuilder = new Builder(
      builder.name,
      builder.dialogue,
      tool,
      builder.successDialogue
    );
    builders.push(newBuilder);
    if (tool) tools.push(tool);
  });

  console.log("builders", builders);
  console.log("tools", tools);
}

initiateModels();
