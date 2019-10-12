<template>
    <div class="validator">
        <el-form :model="formpersonal"
                 ref="formpersonal"
                 :rules="rules"
                 v-show="type=='personal'"
                 :label-position="labelPosition">
            <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
                <el-input v-model="formpersonal.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="id_card_number" :label-width="formLabelWidth">
                <el-input v-model="formpersonal.id_card_number" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="身份证正面照" :label-width="formLabelWidth" prop="id_card_front_photo">
                <el-upload
                        class="avatar-uploader"
                        action
                        accept="image/*"
                        name="upload_file"
                        :show-file-list="false"
                        :http-request="uploadFile"
                        :before-upload="beforeAvatarUpload"
                >
                    <img v-if="fullFacePhoto" :src="fullFacePhoto" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">
                        上传文件要求：jpg、png、jpeg，不超过5M
                    </div>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <div class="btns">
                    <el-button type="primary" @click="applicationCertification('formpersonal')">提交审核</el-button>
                    <el-button @click="cancelCertification">取消申请</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {isCardNo} from '@/utils/validate';
export default {
  name: 'validatorForm',
  data() {
    const validCardNo = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('身份证号不能为空'));
      }
      if (!Number.isInteger(parseInt(value))) {
        callback(new Error('请输入数字'));
      } else if (!isCardNo(value)) {
        callback(new Error('身份证号码为15位或者18位'));
      } else {
        callback();
      }
    };
    //    let validName = (rule, value, callback) => {
    //      if (!value) {
    //        return callback(new Error('姓名不能为空'));
    //      }else {
    //        callback()
    //      }
    //    };
    const validSocialCreditCode = (rule, value, callback) => {
      if (!validSocialCredit(value)) {
        return callback(new Error('只能包括字母、数字、—，8-30个字符'));
      } else {
        callback();
      }
    };
    return {
      dialogidentityVisible: true,
      formpersonal: {
        type: 'personal',
        name: '',
        id_card_number: '',
        id_card_front_photo: '',
        id_card_back_photo: '',
        holding_id_card_photo: '',
      },
      formLabelWidth: '230px',
      labelPosition: 'left',
      fullFacePhoto: '',
      type: 'personal',
      BASE_API: '',
      //        header:{
      //          'Authorization': 'Bearer '+ getToken(),
      //        },
      rules: {
        name: [
          {required: true, message: '姓名不能为空', trigger: 'blur'},
        ],
        id_card_front_photo: [
          {required: true, message: '身份证正面照不能为空', trigger: 'blur'},
        ],
        id_card_number: [
          {required: true, message: '身份证号不能为空', trigger: 'blur'},
          {validator: validCardNo, trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    beforeUploadCheck(file) {
      const isJPG = (file.type === 'image/jpeg')||(file.type === 'image/png');
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt5M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt5M;
    },
    beforeAvatarUpload(file) {
      return this.beforeUploadCheck(file);
    },
    // 上传文件
    uploadFile(param) {
      const that = this;
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          const data = e.target.result;
          const img = new Image();
          img.src = data;
          img.onload = function() {
            console.log(img.width);
            that.businessLicenseSuccess1(param.file, img.width, img.height);
          };
        };
        reader.readAsDataURL(param.file);
      });
    },
    // 上传成功
    businessLicenseSuccess1(item, width, height) {
      //        let uploadData = new FormData();
      //        uploadData.append("upload_file", item);
      //        ulpoad(uploadData, width, height).then(res => {
      //          if (res.code == 0) {
      //            this.fullFacePhoto = res.data.url;
      //            this.formpersonal.id_card_front_photo = res.data.upload_id;
      //          }
      //        });
    },
    applicationCertification(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
        } else {
          return false;
        }
      });
    },
    cancelCertification() {

    },
  },
};
</script>


<style scope>
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        /*border: 1px dashed #d9d9d9;*/
        font-size: 28px;
        color: #8c939d;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
</style>
