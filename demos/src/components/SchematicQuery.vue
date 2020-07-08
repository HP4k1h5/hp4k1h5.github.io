<template>
  <div v-if="queryArr.length">
    <span v-for="(q, i) in queryArr" :key="i">
      <span
        @click="nextOp(i)"
        class="op"
        :style="{ backgroundColor: q.color }"
        >{{ q.op }}</span
      >
      <span v-if="bolds(q)" class="bold">{{ q.val[0] }}</span>
      <span class="text">{{ bolds(q) ? q.val.slice(1, -1) : q.val }}</span>
      <span v-if="bolds(q)" class="bold">{{ q.val.slice(-1) }}</span>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      query: state => state.search.query,
    }),

    queryArr: {
      get: function() {
        return this.$store.state.search.queryArr
      },
      set: function(val) {
        this.$store.state.search.queryArr = val
      },
    },
  },

  methods: {
    parseQuery() {
      if (!this.query || !this.query.length) this.queryArr = []
      const queryRgx = /(["'(]).+?(\1|\))|[^"'()\s]+/g
      let matches = this.query.match(queryRgx)
      if (!matches) return {}
      matches = matches.filter(m => /\S/.test(m))
      matches = matches.map(m => {
        const mm = this.queryArr.find(p => p.val === m)
        if (mm) {
          return mm
        } else if (['"', "'"].includes(m[0])) {
          return {
            type: 'phr',
            val: m,
            op: '+',
            color: this.colorMap('+'),
          }
        } else if (m[0] == '(') {
          return {
            type: 'prox',
            val: m,
            dist: 5,
            op: '+',
            color: this.colorMap('+'),
          }
        } else {
          return { type: 'ana', val: m, op: '?', color: this.colorMap('?') }
        }
      })
      this.queryArr = matches
    },

    nextOp(i) {
      const ops = ['?', '+', '-']
      const opI = ops.findIndex(o => o === this.queryArr[i].op)
      const next = ops[(opI + 1) % ops.length]
      this.queryArr[i].op = next
      this.queryArr[i].color = this.colorMap(next)
    },

    bolds(p) {
      return ['phr', 'prox'].includes(p.type)
    },

    colorMap(op) {
      const m = {
        '+': '#65be65',
        '-': '#fe3345',
        '?': '#23deb5',
      }
      return m[op]
    },
  },

  watch: {
    query() {
      this.parseQuery()
    },
  },
}
</script>

<style scoped>
div {
  width: 100%;
  padding: 12px;
  border: solid 1px white;
  font-size: 16px;
}
span {
  padding: 2px;
}
.op {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
  margin-left: 5px;
  padding-right: 4px;
  padding-left: 4px;
  border-radius: 15px;
  font-size: 16px;
  transform: scale(0.1, 6);
  font-weight: bolder;
  cursor: pointer;
}
.bold {
  font-size: 24px;
  font-weight: bold;
}
</style>
