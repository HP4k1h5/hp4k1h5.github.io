<template>
  <div style="border-bottom: solid 1px black">
    <div class="subtitle" :style="subtitleStyles">
      Filters
      <md-icon :style="subtitleStyles">filter_list</md-icon>
    </div>
    <div class="actions">
      <button @click="search"><md-icon>search</md-icon></button>
      <button
        @click="
          filtersOn = true
          addFilter()
        "
      >
        <md-icon>add</md-icon>
      </button>
      <button @click="filters = []">
        <md-icon>refresh</md-icon>
      </button>
      <button @click="filtersOn = !filtersOn">
        <md-icon>{{ filtersOn ? 'expand_less' : 'expand_more' }}</md-icon>
      </button>
    </div>
    <div v-show="filtersOn" class="filters">
      <span
        v-for="(f, i) in filters"
        :key="i"
        class="filter"
        :style="{ backgroundColor: f.color }"
      >
        <button @click="editFilter(i)">
          <md-icon>edit</md-icon>
        </button>
        <span id="field" class="field-val">{{ f.field }}</span>
        <span id="op" class="op">{{ f.op }}</span>
        <span id="val" class="field-val">{{ f.val }}</span>
        <button @click="filters.splice(i, 1)">
          <md-icon>close</md-icon>
        </button>
      </span>
    </div>
    <div v-if="filterEdit" class="editor">
      <select v-model="filterEdit.field" id="field-select">
        <option v-for="val in ['author', 'title', 'text']" :key="val">
          {{ val }}
        </option>
      </select>
      <select v-model="filterEdit.op" id="op-select">
        <option v-for="val in ['LIKE', '>', '<', '==', '!=']" :key="val">
          {{ val }}
        </option>
      </select>
      <input
        v-model="filterEdit.val"
        @keyup.enter="reAddFilter"
        id="val-input"
      />
      <button @click="reAddFilter"><md-icon>add</md-icon></button>
      <button @click="filterEdit = null"><md-icon>clear</md-icon></button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    filters: {
      get: function() {
        return this.$store.state.search.filters
      },
      set: function(val) {
        this.$store.state.search.filters = val
      },
    },
    subtitleStyles() {
      return {
        color: this.filters.length ? '#45ef89' : '333',
      }
    },
  },

  data() {
    return {
      filtersOn: true,
      filterEdit: null,
      colorMap: {
        LIKE: '#45ef89',
        '<': '#bc87aa',
        '>': '#34bcbc',
        '==': '#45ff45',
        '!=': '#ff4545',
      },
    }
  },

  methods: {
    ...mapActions({
      search: 'search/submit',
    }),

    addFilter() {
      this.filterEdit = {
        field: 'author',
        op: 'LIKE',
        val: '%Berens%',
        color: this.colorMap['LIKE'],
      }
    },

    editFilter(i) {
      this.filterEdit = this.filters.splice(i, 1)[0]
    },

    reAddFilter() {
      this.filterEdit.color = this.colorMap[this.filterEdit.op]
      this.filters.push(this.filterEdit)
      this.filterEdit = null
    },
  },

  watch: {
    filters() {
      this.search()
    },
  },
}
</script>

<style scoped>
.filters {
  width: 100%;
  min-height: 50px;
}
.filter {
  display: inline-flex;
  margin: 10px;
  padding: 1px;
  border: solid 1px grey;
  border-radius: 20px;
}
.field-val {
  margin: 7px;
  font-weight: bold;
}
.op {
  margin: 7px;
  background-color: #ccc;
  font-size: 12px;
  font-weight: bold;
}
#field-select {
  padding: 6px;
  font-size: 17px;
}
#op-select {
  padding: 6px;
  font-size: 17px;
}
#val-input {
  font-size: 18px;
}
</style>
