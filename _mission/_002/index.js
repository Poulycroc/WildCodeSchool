const steps = {
  basic: {
    register: {
      name: "register",
      route: '/registration',
      status: null
    },
    saveCard: {
      name: "saveCard",
      route: '/registration/save-card',
      status: null
    }
  },
  teacherBook: {
    booking: {
      name: "booking",
      route: '/registration/booking/{:params}',
      status: null
    },
    register: {
      name: "register",
      route: '/registration',
      status: null
    },
    saveCard: {
      name: "saveCard",
      route: '/registration/save-card',
      status: null
    }
  },
  teacherContact: {
    contact: {
      name: "contact",
      route: '/registration/contact/{:params}',
      status: null
    },
    register: {
      name: "register",
      route: '/registration',
      status: null
    },
    saveCard: {
      name: "saveCard",
      route: '/registration/save-card',
      status: null
    }
  },
  globalAsk: {
    globalAsk: {
      name: "globalAsk",
      route: '/registration/global-ask',
      status: null
    },
    register: {
      name: "register",
      route: '/registration',
      status: null
    },
    saveCard: {
      name: "saveCard",
      route: '/registration/save-card',
      status: null
    }
  }
};
