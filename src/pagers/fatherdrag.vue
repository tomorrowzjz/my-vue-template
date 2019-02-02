<template>
    <draggable v-model="pages"
               class="dragArea"
               :options="{draggable:'.item', group:'pages'}"
               :element="'ul'">
        <li v-for="item in pages" :key="item.id" class="item">
            <div>{{ item.title }}</div>

            <template v-if="item.nests && item.nests.length > 0">
                <menu-child :childs="item.nests"></menu-child>
            </template>
        </li>
    </draggable>
</template>

<script>
  import draggable from 'vuedraggable'
  import MenuChild from './nested.vue'
  export default {
    props: ['getMenuPages'],
    components: {draggable, MenuChild},
    data() {
      return {
        pages: [
          {
            "id": 2,
            "title": "About",
            "nests": [
              {
                "id": 12,
                "title": "East Esperanza12",
                "nests": [{
                  "id": 13,
                  "title": "winborough13",
                  "nests": null
                }]
              }
            ],
          },
          {
            "id": 5,
            "title": "East Shaylee",
            "nests": [{
              "id": 6,
              "title": "Einoborough",
              "nests": [{
                "id": 7,
                "title": "East Esperanza",
                "nests": [{
                  "id": 8,
                  "title": "winborough",
                  "nests": null
                }]
              }]
            },{
              "id": 9,
              "title": "Einoborough9",
              "nests": [{
                "id": 10,
                "title": "East Esperanza10",
                "nests": [{
                  "id": 11,
                  "title": "winborough11",
                  "nests": null
                }]
              }]
            }],
          },
        ]
      }
    },
  }
</script>
