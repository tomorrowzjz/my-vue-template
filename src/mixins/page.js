export const pages = {
  data(){
    return{
      pagination:{
        currentPage: 1,
        total:1,
        pagesize:10
      }
    }
  },

  methods:{
    getData(){
      throw new Error('component must implement getData method')
    },
    handleSizeChange(val) {
      this.pagination.pagesize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.getData();
    }
  }
}
