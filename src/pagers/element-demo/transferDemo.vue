<template>
  <el-transfer
          v-model="transferValue"
          :props="{
                      key: 'id',
                      label: 'text'
                    }"
          :button-texts="['删除', '添加']"
          :titles="['属性值列表', '类目属性值列表']"
          :data="available_prop_values"
          @change="transferHandleChange">
  </el-transfer>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      transferValue: [],
      available_prop_values: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      setTimeout(() => {
        this.transferValue = [{'id': 2132572, 'sort_order': 1, 'text': '\u7f8a\u6bdb'}, {
          'id': 2132573,
          'sort_order': 2,
          'text': '\u8148\u7eb6',
        }, {'id': 2132574, 'sort_order': 3, 'text': '\u8695\u4e1d'}, {
          'id': 2132575,
          'sort_order': 4,
          'text': '\u9ebb',
        }, {'id': 2132576, 'sort_order': 5, 'text': '\u68c9'}, {
          'id': 2132577,
          'sort_order': 6,
          'text': '\u7f8a\u7ed2',
        }, {'id': 2132578, 'sort_order': 7, 'text': '\u6da4\u7eb6'}, {
          'id': 2132579,
          'sort_order': 8,
          'text': '\u9526\u7eb6',
        }, {'id': 2132580, 'sort_order': 9, 'text': '\u5154\u6bdb'}, {
          'id': 2132581,
          'sort_order': 10,
          'text': 'LYCRA\u83b1\u5361',
        }, {'id': 2132582, 'sort_order': 11, 'text': '\u83ab\u4ee3\u5c14'}, {
          'id': 2132583,
          'sort_order': 12,
          'text': '\u7f8a\u76ae',
        }, {'id': 2132584, 'sort_order': 13, 'text': '\u732a\u76ae'}, {
          'id': 2132585,
          'sort_order': 14,
          'text': '\u6c2f\u7eb6',
        }, {'id': 2132586, 'sort_order': 15, 'text': '\u918b\u7ea4'}, {
          'id': 2132587,
          'sort_order': 16,
          'text': '\u7ef4\u7eb6',
        }, {'id': 2132588, 'sort_order': 17, 'text': '\u4e19\u7eb6'}, {
          'id': 2132589,
          'sort_order': 18,
          'text': '\u8c82\u76ae',
        }, {'id': 2132590, 'sort_order': 19, 'text': '\u7c98\u80f6'}, {
          'id': 2132591,
          'sort_order': 20,
          'text': '\u9e7f\u76ae',
        }, {'id': 2132592, 'sort_order': 21, 'text': '\u7f8a\u9a7c\u6bdb'}, {
          'id': 2132593,
          'sort_order': 22,
          'text': '\u8c82\u6bdb',
        }, {'id': 2132594, 'sort_order': 23, 'text': '\u72d0\u72f8\u6bdb'}, {
          'id': 2132595,
          'sort_order': 24,
          'text': '\u5934\u5c42\u725b\u76ae',
        }, {'id': 2132596, 'sort_order': 25, 'text': '\u5176\u4ed6'}];


        this.available_prop_values = [{
          'id': 12000089,
          'prop_value_id': 2132572,
          'sort_order': 1,
          'text': '\u7f8a\u6bdb',
        }, {
          'id': 12000090,
          'prop_value_id': 2132573,
          'sort_order': 2,
          'text': '\u8148\u7eb6',
        }, {'id': 12000091, 'prop_value_id': 2132574, 'sort_order': 3, 'text': '\u8695\u4e1d'}, {
          'id': 12000092,
          'prop_value_id': 2132575,
          'sort_order': 4,
          'text': '\u9ebb',
        }, {'id': 12000093, 'prop_value_id': 2132576, 'sort_order': 5, 'text': '\u68c9'}, {
          'id': 12000094,
          'prop_value_id': 2132577,
          'sort_order': 6,
          'text': '\u7f8a\u7ed2',
        }, {'id': 12000095, 'prop_value_id': 2132578, 'sort_order': 7, 'text': '\u6da4\u7eb6'}, {
          'id': 12000096,
          'prop_value_id': 2132579,
          'sort_order': 8,
          'text': '\u9526\u7eb6',
        }, {'id': 12000097, 'prop_value_id': 2132580, 'sort_order': 9, 'text': '\u5154\u6bdb'}, {
          'id': 12000098,
          'prop_value_id': 2132581,
          'sort_order': 10,
          'text': 'LYCRA\u83b1\u5361',
        }, {
          'id': 12000099,
          'prop_value_id': 2132582,
          'sort_order': 11,
          'text': '\u83ab\u4ee3\u5c14',
        }, {'id': 12000100, 'prop_value_id': 2132583, 'sort_order': 12, 'text': '\u7f8a\u76ae'}, {
          'id': 12000101,
          'prop_value_id': 2132584,
          'sort_order': 13,
          'text': '\u732a\u76ae',
        }, {'id': 12000102, 'prop_value_id': 2132585, 'sort_order': 14, 'text': '\u6c2f\u7eb6'}, {
          'id': 12000103,
          'prop_value_id': 2132586,
          'sort_order': 15,
          'text': '\u918b\u7ea4',
        }, {'id': 12000104, 'prop_value_id': 2132587, 'sort_order': 16, 'text': '\u7ef4\u7eb6'}, {
          'id': 12000105,
          'prop_value_id': 2132588,
          'sort_order': 17,
          'text': '\u4e19\u7eb6',
        }, {'id': 12000106, 'prop_value_id': 2132589, 'sort_order': 18, 'text': '\u8c82\u76ae'}, {
          'id': 12000107,
          'prop_value_id': 2132590,
          'sort_order': 19,
          'text': '\u7c98\u80f6',
        }, {'id': 12000108, 'prop_value_id': 2132591, 'sort_order': 20, 'text': '\u9e7f\u76ae'}, {
          'id': 12000109,
          'prop_value_id': 2132592,
          'sort_order': 21,
          'text': '\u7f8a\u9a7c\u6bdb',
        }, {'id': 12000110, 'prop_value_id': 2132593, 'sort_order': 22, 'text': '\u8c82\u6bdb'}, {
          'id': 12000111,
          'prop_value_id': 2132594,
          'sort_order': 23,
          'text': '\u72d0\u72f8\u6bdb',
        }, {
          'id': 12000112,
          'prop_value_id': 2132595,
          'sort_order': 24,
          'text': '\u5934\u5c42\u725b\u76ae',
        }, {'id': 12000113, 'prop_value_id': 2132596, 'sort_order': 25, 'text': '\u5176\u4ed6'}];
      }, 100);
    },
    transferHandleChange(value, direction, movedKeys) {
      const data = {};
      if (!movedKeys.length) {
        return;
      }
      const arr = [];
      this.available_prop_values.map((e) => {
        movedKeys.map((ele) => {
          if (e.id == ele) {
            arr.push(e);
          }
        });
      });
      if (direction == 'right') {

      } else if (direction == 'left') {
        this.$confirm('此操作将永久删除该属性, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.transferValue = value.concat(movedKeys);
          //            this.transferValue.push()
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
