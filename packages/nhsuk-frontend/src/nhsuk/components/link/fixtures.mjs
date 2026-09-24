import { components } from "#lib"

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      text: "Change"
    }
  },
  "with badge": {
    context: {
      html: `Referrals${components.render("badge", {
        context: {
          text: "New",
          visuallyHidden: {
            text: "feature",
            placement: "end"
          },
          classes: "nhsuk-u-margin-left-2"
        }
      })}`
    }
  },
  "with text escaping": {
    context: {
      text: "A&E waiting times"
    }
  },
  "with HTML": {
    context: {
      html: "A&amp;E waiting times"
    }
  },
  "with HTML via call block": {
    callBlock: "A&amp;E waiting times"
  },
  "with visually hidden text": {
    context: {
      text: "Change",
      visuallyHidden: {
        text: "date of birth",
        slots: { start: " " }
      }
    }
  },
  "with visually hidden text only": {
    context: {
      visuallyHidden: "Action"
    }
  },
  'with visually hidden text "before"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Error:",
        placement: "before"
      }
    }
  },
  'with visually hidden text "start"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "Error:",
        placement: "start",
        slots: { end: " " }
      }
    }
  },
  'with visually hidden text "end"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "(Karen Francis)",
        placement: "end",
        slots: { start: " " }
      }
    }
  },
  'with visually hidden text "after"': {
    context: {
      text: "Enter your date of birth",
      visuallyHidden: {
        text: "(Karen Francis)",
        placement: "after"
      }
    }
  },
  "with visually hidden text escaping": {
    context: {
      text: "Visit",
      visuallyHidden: {
        text: "A&E",
        slots: { start: " " }
      }
    }
  },
  "with visually hidden HTML": {
    context: {
      text: "Visit",
      visuallyHidden: {
        html: "A&amp;E",
        slots: { start: " " }
      }
    }
  },
  "with custom class": {
    context: {
      text: "Change",
      className: "app-link"
    }
  },
  "with reverse class": {
    context: {
      text: "Change",
      classes: "nhsuk-link--reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "with reverse class overriding reverse variant": {
    context: {
      text: "Change",
      classes: "nhsuk-link--reverse",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "without class": {
    context: {
      text: "Change",
      className: false
    }
  },
  "reverse": {
    context: {
      text: "Change",
      variant: "reverse"
    },
    options: {
      layout: "background-blue"
    }
  },
  "as a button": {
    context: {
      text: "Change",
      type: "submit"
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
