<template>
  <div class="box">
    <!--    <span class="actions">
      <button>
        <span>expand</span>
      </button>
      <button>
        <span>minimize</span>
      </button>
      <button>
        <span>close</span>
      </button>
    </span>
    -->
    <Searchbar />
    <SchematicQuery />
    <Filters />
    <div v-if="genAQL" class="code-block">
      <span class="block">
        <h4 class="block-label">AQL Query</h4>
        <pre>
        <code v-html="hlAQL">
        </code>
      </pre>
      </span>
      <span class="block">
        <h4 class="block-label">Bind Vars</h4>
        <pre>
        <code v-html="hlJSON">
        </code>
      </pre>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Searchbar from '@/components/search/Searchbar'
import SchematicQuery from '@/components/search/SchematicQuery'
import Filters from '@/components/search/Filters'
import hljs from 'highlight.js'
import 'highlight.js/styles/dracula.css'
/* import hljs from 'highlight.js/lib/core' */
/* import json from 'highlight.js/lib/languages/json' */
/* hljs.registerLanguage('json', json) */

export default {
  components: {
    Searchbar,
    SchematicQuery,
    Filters,
  },

  computed: {
    ...mapState({
      genAQL: state => state.search.genAQL,
    }),

    hlAQL() {
      if (!this.genAQL) return
      return hljs.highlightAuto(this.genAQL.query).value
    },

    hlJSON() {
      if (!this.genAQL) return
      return hljs.highlightAuto(JSON.stringify(this.genAQL.bindVars, null, 2))
        .value
    },
  },

  created() {
    hljs.initHighlightingOnLoad()
  },
}
</script>

<style scoped>
.box {
  display: inline-block;
  min-width: 700px;
  max-width: 900px;
  margin: 1%;
  border: solid 1px black;
}
.code-block {
  display: flex;
  justify-content: space-around;
}
.block {
  width: 50%;
}
.block-label {
  margin: 0px 40px;
}
pre {
  overflow: scroll;
  border: 1px solid #ded;
  background-color: #282a36;
  color: #eef;
}
</style>
