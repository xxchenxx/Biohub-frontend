export default {
  props: ['activity'],
  methods: {
    createUser (h) {
      console.log(this.activity.params)
      return h(
        'router-link',
        {
          attrs: {
            to: {
              name: 'profile',
              params: {
                user: this.activity.params.user
              }
            }
          }
        },
        [this.activity.params.user]
      )
    },
    createBrick (h) {
      return h(
        'router-link',
        {
          attrs: {
            to: {
              name: 'Brick',
              params: {
                repo: this.activity.params.partName
              }
            }
          }
        },
        [this.activity.params.partName]
      )
    },
    createExperience (h) {
      return h(
        'router-link',
        {
          attrs: {
            to: {
              name: 'Exp',
              params: {
                repo: this.activity.params.partName,
                id: this.activity.params.expId
              }
            }
          }
        },
        [this.activity.params.expTitle]
      )
    },
    Rating (h) {
      return [
        this.createUser(h),
        ' rated brick ',
        this.createBrick(h),
        ' with score ',
        this.activity.params.score
      ]
    },
    Watch (h) {
      return [
        this.createUser(h),
        ' watched brick ',
        this.createBrick(h)
      ]
    },
    Comment (h) {
      return [
        this.createUser(h),
        ' commented experience ',
        this.createExperience(h),
        ' at brick ',
        this.createBrick(h)
      ]
    },
    Experience (h) {
      return [
        this.createUser(h),
        ' posted a new experience ',
        this.createExperience(h),
        ' at brick ',
        this.createBrick(h)
      ]
    },
    Star (h) {
      return [
        this.createUser(h),
        ' voted experience ',
        this.createExperience(h),
        ' at brick ',
        this.createBrick(h)
      ]
    }
  },
  render (h) {
    return h(
      'div',
      {

      },
      this[this.activity.type](h)
        .concat([
          h(
            'small',
            {
              attrs: {
                datetime: this.activity.acttime
              },
              class: ['pull-right', 'text-muted'],
              ref: 'acttime'
            }
          )
        ])
    )
  },
  mounted () {
    timeago().render(this.$refs.acttime)
  }
}