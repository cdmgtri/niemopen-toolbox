
export default {
  controlId: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  step: {
    type: String,
    required: false,
    default: null
  },
  icon: {
    type: String,
    required: false,
    default: null
  },
  ariaLabel: {
    type: String,
    required: false,
    default: null
  },
  note: {
    type: String,
    required: false,
    default: null
  }
};
