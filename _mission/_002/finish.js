const basePath = '/registration'
const routes = {
  register: {
    name: 'register',
    route: basePath
  },
  saveCard: {
    name: 'saveCard',
    route: `${basePath}/save-card`
  },
  booking: {
    name: 'booking',
    route: `${basePath}/booking/{:params}`
  },
  contact: {
    name: 'contact',
    route: `${basePath}/contact/{:params}`
  },
  globalAsk: {
    name: 'globalAsk',
    route: `${basePath}/global-ask`
  }
}
const authorizedList = ['basic', 'teacherBook', 'teacherContact', 'globalAsk']
const steps = function() {
  const steps = {}
  const keys = {
    basic: ['register', 'saveCard'],
    teacherBook: ['booking', 'register', 'saveCard'],
    teacherContact: ['contact', 'register', 'saveCard'],
    globalAsk: ['globalAsk', 'register', 'saveCard']
  }
  Object.keys(keys).forEach((key) => {
    const paths = {}
    keys[key].forEach((path) => {
      Object.assign(paths, {
        [path]: {
          ...routes[path],
          status: null
        }
      })
    })
    Object.assign(steps, { [key]: paths })
  })
  return steps
}