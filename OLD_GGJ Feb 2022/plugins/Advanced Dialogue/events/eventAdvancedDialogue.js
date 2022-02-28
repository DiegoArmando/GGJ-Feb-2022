const id = "PT_EVENT_ADVANCED_DIALOGUE";
const groups = ["Plugin Pak", "EVENT_GROUP_DIALOGUE"];
const name = "Display Advanced Dialogue";

const wrap8Bit = (val) => (256 + (val % 256)) % 256;

const decOct = (dec) => wrap8Bit(dec).toString(8).padStart(3, "0");

const fields = [].concat(
  [
    {
      key: "__scriptTabs",
      type: "tabs",
      defaultValue: "text",
      values: {
        text: "Text",
        layout: "Layout",
      },
    },
  ],
  // Layout tab
  [
    {
      type: "group",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
      fields: [
        {
          key: `minHeight`,
          label: "Min Height",
          type: "number",
          min: 1,
          max: 18,
          width: "50%",
          defaultValue: 4,
        },
        {
          key: `maxHeight`,
          label: "Max Height",
          type: "number",
          min: 1,
          max: 18,
          width: "50%",
          defaultValue: 7,
        },
      ],
    },
    {
      key: `showBorder`,
      label: "Show Border",
      type: "checkbox",
      defaultValue: "true",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      type: "group",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
      fields: [
        {
          key: `textX`,
          label: "Text X",
          type: "number",
          min: 0,
          max: 20,
          defaultValue: 1,
        },
        {
          key: `textY`,
          label: "Text Y",
          type: "number",
          min: 0,
          max: 18,
          defaultValue: 1,
        },
        {
          key: `textHeight`,
          label: "Text Height",
          type: "number",
          min: 1,
          max: 18,
          defaultValue: 3,
        },
      ],
    },
    {
      key: `closeWhen`,
      label: "Close Dialogue When...",
      type: "select",
      defaultValue: "key",
      options: [
        ["key", "Button Pressed"],
        ["text", "Text Finishes"],
        ["notModal", "Never (Non-Modal)"],
      ],
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
    {
      key: "closeButton",
      type: "togglebuttons",
      options: [
        ["a", "A"],
        ["b", "B"],
        ["any", "Any"],
      ],
      allowNone: false,
      defaultValue: "a",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
        {
          key: "closeWhen",
          eq: "key",
        },
      ],
    },
    {
      key: `clearPrevious`,
      label: "Clear Previous Content",
      type: "checkbox",
      defaultValue: true,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["layout"],
        },
      ],
    },
  ],
  // Text tab
  [
    {
      key: "text",
      type: "textarea",
      placeholder: "Text...",
      multiple: true,
      defaultValue: "",
      flexBasis: "100%",
      conditions: [
        {
          key: "__scriptTabs",
          in: ["text"],
        },
      ],
    },
    {
      key: "avatarId",
      type: "avatar",
      toggleLabel: "Add Avatar",
      label: "Avatar",
      defaultValue: "",
      optional: true,
      conditions: [
        {
          key: "__scriptTabs",
          in: ["text"],
        },
      ],
    },
  ]
);

const compile = (input, helpers) => {
  const {
    _addComment,
    _overlayMoveTo,
    _loadStructuredText,
    _overlayClear,
    _overlayWait,
    _displayText,
    appendRaw,
    _addNL,
  } = helpers;

  const maxHeight = input.maxHeight || 7;
  const minHeight = input.minHeight || 4;
  const textX = input.textX === null ? 1 : input.textX;
  const textY = input.textY === null ? 1 : input.textY;
  const textHeight = input.textHeight === null ? 3 : input.textHeight;

  console.log(input);
  console.log(maxHeight, minHeight, textX, textY, textHeight);

  const speedIn = `.OVERLAY_IN_SPEED`;
  const speedOut = `.OVERLAY_OUT_SPEED`;

  const textInputs = Array.isArray(input.text) ? input.text : [input.text];
  const avatarId = input.avatarId;

  const initialNumLines = textInputs.map(
    (textBlock) => textBlock.split("\n").length
  );

  console.log(input);
  const minNumLines = Math.min(
    maxHeight,
    Math.max.apply(null, initialNumLines)
  );

  console.log(minHeight, minNumLines, maxHeight);

  const textBoxHeight = Math.max(minNumLines, minHeight);
  const textBoxY = 18 - textBoxHeight;

  const x = decOct(1 + textX + (avatarId ? 3 : 0));
  const y = decOct(1 + textY);
  const textPosSequence = `\\003\\${x}\\${y}`;

  _addComment("Advanced Text Dialogue");

  textInputs.forEach((text, textIndex) => {
    let avatarIndex = undefined;
    if (avatarId) {
      const { avatars } = helpers;
      avatarIndex = avatars.findIndex((a) => a.id === avatarId);
      if (avatarIndex < 0) {
        avatarIndex = undefined;
      }
    }

    let endDelaySequence = "";
    if (input.closeWhen === "text") {
      endDelaySequence = `\\001\\${decOct(8)}\\001\\${decOct(6)}`;
    } else if (textIndex !== textInputs.length - 1) {
      endDelaySequence = `\\001\\${decOct(7)}`;
    }
    _loadStructuredText(
      `${textPosSequence}${text}${endDelaySequence}`,
      avatarIndex,
      textHeight
    );

    if (input.clearPrevious) {
      _overlayClear(
        0,
        0,
        20,
        textBoxHeight,
        ".UI_COLOR_WHITE",
        input.showBorder
      );
    }

    if (textIndex === 0) {
      _overlayMoveTo(0, textBoxY, speedIn);
    }

    appendRaw(
      `VM_OVERLAY_SET_SCROLL   ${textX + (avatarId ? 3 : 0)}, ${textY}, ${
        (input.showBorder ? 19 : 20) - (avatarId ? 3 : 0) - textX
      }, ${textHeight}, .UI_COLOR_WHITE`
    );

    _displayText();

    const isModal = input.closeWhen !== "notModal";
    if (isModal) {
      const waitFlags = [".UI_WAIT_WINDOW"];
      switch (input.closeWhen) {
        case "text":
          waitFlags.push(".UI_WAIT_TEXT");
          break;
        case "key":
          console.log("BUTTON", input.closeButton);
          if (input.closeButton === "a") {
            waitFlags.push(".UI_WAIT_BTN_A");
          }
          if (input.closeButton === "b") {
            waitFlags.push(".UI_WAIT_BTN_B");
          }
          if (input.closeButton === "any") {
            waitFlags.push(".UI_WAIT_BTN_ANY");
          }
          break;
        default:
          break;
      }
      _overlayWait(isModal, waitFlags);
    }

    if (isModal && textIndex === textInputs.length - 1) {
      _overlayMoveTo(0, 18, speedOut);
      _overlayWait(isModal, [".UI_WAIT_WINDOW"]);
    } else {
      _overlayWait(isModal, [".UI_WAIT_WINDOW", ".UI_WAIT_TEXT"]);
    }
  });
  _addNL();
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
