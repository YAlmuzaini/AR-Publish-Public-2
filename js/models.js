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
      name: "female",
      dialogue:
        "يلا نلعب !, حل اللغز وجمع المفاتيح عشان تفوز <br/> Clue 1: إسأل مجرب ولا تسأل طبيب",
    },
    {
      name: "doctor",
      dialogue:
        "لقيتني 🏥👨‍⚕️ !! <br/>مفتاح : B <br/> Clue 2: تجيك التهايم وإنت ....",
    },
    {
      name: "sleep",
      dialogue:
        "صباح الخير! 😴💤 <br/>مفتاح : R <br/> Clue 3: مع ....... يا شقرا  ",
    },
    {
      name: "horse",
      dialogue:
        "هممم 🐎🐎! <br/>مفتاح : A <br/> Clue 4: الي ما يعرف ..... يشويه",
    },
    {
      name: "eagle",
      dialogue:
        "حرام عليك تشويني 🦅🦅 ! <br/>مفتاح : I <br/> Clue 5: الي بالجدر يطلعه .......",
    },
    {
      name: "spatula",
      dialogue:
        "شكله جعان 🥄🥄 ! <br/>مفتاح : N <br/> <a href=''>Click Here</a>",
    },
  ];

  buildersArray.forEach(function (builder) {
    builders.push(
      new Builder(
        builder.name,
        builder.dialogue,
        builder.tool,
        builder.successDialogue
      )
    );
    if (builder.tool) tools.push(builder.tool);
  });

  console.log("builders", builders);
  console.log("tools", tools);
}

initiateModels();
