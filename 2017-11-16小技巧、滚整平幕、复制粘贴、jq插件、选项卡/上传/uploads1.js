/*
    var arr2 = [1,2,3,4];
    arr2.some((e)=> e==4)
    true
    arr2.some((e)=> e==7)
    false

    在jQ的ajax中如果要进行上传，那么就得加上
        processData:false,
        contentType:false,

*/

class Upload {
    constructor(that){
        this.opts = {
            files:null,
            actionBtn:null
        }
        this.arr = []; //存数据的
    }

    init(opt){
        let _this = this;
        Object.assign(this.opts,opt);

        if(this.opts.files){
            this.opts.files.change(function(){
               //console.dir(this.files[0]);
               //选择图片添加数据
               _this.addData(this.files[0]);
               $(this).val('');
            });
        }

        //点击上传
        if(this.opts.actionBtn){
            this.opts.actionBtn.click(function(){
                _this.actionMount();
            });
        }
    }

    //添加数据并且去重
    addData(data){
        if(!this.arr.some((e)=>e.name == data.name)){
            this.arr.push(data);
        }
        //console.log(this.arr);
    }

    //上传
    actionMount(){
        this.arr.forEach((e,i)=>{
            let formData = new FormData();
            formData.append('file',e);
            $.ajax({
                url:'php/post_file.php',
                type:'post',
                data:formData,
                processData:false,
                contentType:false,
                success:function(){

                }
            })
        });
        
    }

}

$.fn.extend({
    uploads(opt){
        let up = new Upload(this);
        up.init(opt);
    }
})

