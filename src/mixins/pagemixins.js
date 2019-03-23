export default {
  data () {
    return {
      pagination:{
        currentPage: 1,
        total:1,
        pagesize:10
      },
    }
  },

  mounted(){
    console.log(this.msg);
  },

  methods:{
    handleSizeChange(val) {
      this.pagesize = val;

      this.getPageInfo();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getPageInfo();
    },
    getPageInfo() {
      throw new Error('component must implement getPageInfo method')
    }
  }
}

