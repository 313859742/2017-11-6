/*
    var arr2 = [1,2,3,4];
    arr2.some((e)=> e==4)
    true
    arr2.some((e)=> e==7)
    false

    在jQ的ajax中如果要进行上传，那么就得加上
        processData:false,
        contentType:false,

    把files[0]转成图片地址
        let oFReader = new FileReader();

        oFReader.onload = function(ev){
            ev.target.result  （图片地址）
        }

        oFReader.readAsDataURL(data);
        
        uploadEndMount : 当全部上传完成的时候触发

*/

class Upload {
    constructor(that){
        this.opts = {
            files:null,
            actionBtn:null,
            view:function(){},
            uploadEndMount:function(){},
            drag:null,
            onprogress:function(){}
        }
        this.arr = []; //存数据的
        this.num = 0;
    }
    //初始化
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

        //为了放开事件能够正常运行
        document.ondragover = function(){
            return false;
        }
        //拖拽
        if(this.opts.drag){
            this.opts.drag[0].ondrop = function(ev){
                _this.addData(ev.dataTransfer.files[0]);
                return false;
            }
        }
    }

    //添加数据并且去重
    addData(data){
        if(!this.arr.some((e)=>e.name == data.name)){
            this.arr.push(data);
            this.opts.view(data);
        }
        //console.log(this.arr);
    }

    //上传
    actionMount(){
        let _this = this;
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
                    _this.num ++;
                    //进度的生命周期
                    _this.opts.onprogress(_this.arr.length, _this.num);
                    //全部上传完成
                    if(_this.num == _this.arr.length){
                        _this.opts.uploadEndMount();
                        _this.arr.length = 0;
                        _this.num = 0;
                    }
                    
                }
            })
        });
    }

    //把数据变成地址
    viewData(data,callback){
        //FileReader + readAsDataURL = 把files[0]转成图片地址
        let oFReader = new FileReader();
        oFReader.onload = function(ev){
            callback(ev.target.result);
            //console.log(ev);
        }
        oFReader.readAsDataURL(data);
    }
    //删除数据
    removeData(name){
        console.log(this.arr);
        this.arr = this.arr.filter((e)=>{
            return e.name != name;
        });
        //console.log(this.arr);
    }

}

$.fn.extend({
    uploads(opt){
        let up = new Upload(this);
        up.init(opt);
        return up;
    },
    //小气泡
    msk(str){
        this.text(str);
        this.animate({
            top:0
        }).delay(800).animate({
            top:-20
        })
    }
})

