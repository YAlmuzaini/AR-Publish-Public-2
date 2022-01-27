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
        "يلا نلعب !, حل اللغز وجمع المفاتيح عشان تفوز , ونتبه من الالغام <br/> Clue 1: إسأل مجرب ولا تسأل طبيب",
    },
    {
      name: "doctor",
      dialogue:
        "لقيتني 🏥👨‍⚕️ !! <br/>مفتاح : B <br/> Clue 2: تجيك التهايم وإنت ....",
    },
    {
      name: "sleep",
      dialogue:
        "من متى نايم ؟ 😴💤 <br/>مفتاح : R <br/> Clue 3: مع ....... يا شقرا  ",
    },
    {
      name: "horse",
      dialogue:
        "اسرع 🐎🐎! <br/>مفتاح : A <br/> Clue 4: الي ما يعرف ..... يشويه",
    },
    {
      name: "eagle",
      dialogue:
        "حرام عليك تشويني 🦅🦅 ! <br/>مفتاح : I <br/> Clue 5: الي بالجدر يطلعه .......",
    },
    {
      name: "spatula",
      dialogue:
        "شكلك جعان 🥄🥄 ! <br/>مفتاح : N <br/> احسنت !! فزت باللعبه",
    },
    {
      name: "male",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "giftBox",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "pharaoh",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "praying",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "sun",
      dialogue:
        "❌❌ لغم",
    },
    {
      name: "kinfe",
      dialogue:
        "❌❌ لغم",
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
