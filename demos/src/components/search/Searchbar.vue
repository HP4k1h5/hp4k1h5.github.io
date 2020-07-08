<template>
  <div>
    <span class="search">
      Search
      <label style=" display: flex; align-items: center; padding:4px;">
        <select v-model="curDB" scroll class="select">
          <option v-for="db in dbs" :key="db.name" :value="db.name">
            {{ db.name }}
          </option>
        </select>
        <span style="margin-left: 4px; font-size:14px;">
          DB
        </span>
      </label>
      <span>in</span>
      <select v-model="curCols" multiple class="select">
        <option v-for="col in availCols" :key="col" :value="col">
          {{ col }}
        </option>
      </select>
    </span>
    <span style="display: flex; align-items: center;">
      <textarea
        v-model="query"
        ref="searchbar"
        id="searchbar"
        :rows="rows"
        wrap="hard"
        @keydown.enter.prevent="submitQuery"
        :autofocus="'autofocus'"
      />
      <span
        v-if="querying"
        class="loading dots2"
        style="display:inline-flex"
      ></span>
      <span v-else>
        <button @click="submitQuery">
          <md-icon>search</md-icon>
        </button>
        <button @click="saveQuery">
          <md-icon>save</md-icon>
        </button>
      </span>
    </span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Searchbar',

  computed: {
    ...mapState({
      dbs: state => state.account.dbs,
      cols: state => state.account.cols,
      querying: state => state.search.querying,
    }),

    query: {
      get: function() {
        return this.$store.state.search.query
      },

      set: function(val) {
        this.$store.commit('search/SET_QUERY', val)
      },
    },

    curDB: {
      get: function() {
        return this.$store.state.search.curDB
      },

      set: function(val) {
        this.$store.state.search.curDB = val
      },
    },

    availCols() {
      return this.cols.map(c => c.name)
    },

    curCols: {
      get: function() {
        return this.$store.state.search.curCols
      },

      set: function(val) {
        this.$store.state.search.curCols = val
      },
    },
  },

  data() {
    return {
      rows: 1,
      rowHeight: 38,
    }
  },

  methods: {
    ...mapActions({
      search: 'search/submit',
      save: 'search/save',
    }),

    async submitQuery() {
      await this.search(false)
    },

    async saveQuery() {
      await this.save()
    },

    calculateInputHeight() {
      const input = this.$refs.searchbar
      if (!input) return

      input.style.height = '0'
      const height = input.scrollHeight
      const minHeight = this.rows * this.rowHeight
      input.style.height = Math.max(minHeight, height) + 'px'
    },
  },

  async created() {
    this.calculateInputHeight()
    await this.$nextTick()
    this.$refs.searchbar.focus()
  },

  watch: {
    query() {
      this.calculateInputHeight()
    },
  },
}
</script>

<style scoped>
.search {
  display: flex;
  margin: 0.1%;
  padding: 1%;
  align-items: center;
  font-family: Monda;
  font-size: 20px;
  font-weight: bold;
}

.select {
  display: inline-flex;
  max-height: 28px;
  margin-left: 8px;
  border: solid 1px black;
  border-radius: 8px;
  font-family: Monda;
  font-size: 16px;
  font-weight: bold;
}

textarea {
  width: 80%;
  min-height: 22px;
  margin: 4px;
  padding: 4px;
  resize: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  font-family: Monda;
}
</style>
