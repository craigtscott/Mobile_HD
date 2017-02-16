```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []}
  },

  lists: {
    1: {
      title: "Redux",
      num_tasks: 3,
      num_done: 2
    }

    2: {
      title: "Redux",
      num_tasks: 3,
      num_done: 2
    }

    3: {
      title: "Redux",
      num_tasks: 3,
      num_done: 2
    }
  },

  listDetail:{
    1: {
      title: "Redux",
      num_tasks: 3,
      num_done: 2,

    tasks: {
      1: {
        title: "Sample State",
        completed: true,
        list_id: 1
      }

      2: {
        title: "Sample State",
        completed: true,
        list_id: 1
      }

      3: {
        title: "Sample State",
        completed: false,
        list_id: 1
      }
    }

  }

  search: {
    search_phrase: "honey",
    results: {
      1: {
        title: "Get honey",
        completed: true,
        list_id: 4
      },
      2: {
        title: "Harvest honey",
        completed: false,
        list_id: 2
      },
      3:{
        title: "Put Honey in Tea",
        completed: false,
        list_id: 3
      }
    }
  }
}
```
