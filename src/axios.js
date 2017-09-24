import axios from 'axios'
import Qs from 'qs'

//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

function http(type,url,params,contentType){
    let contentTypeUse = contentType=='json' ? 'application/json':'application/x-www-form-urlencoded';
    let paramsUse = contentType == 'json' ? params : Qs.stringify(params);

    if(type == 'get'){
        return new Promise((resolve, reject) => {
            axios({
                method:'get',
                url:url,
                params:params
            })
            .then((res) => {
                resolve(res.data)
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            axios({
                method:'post',
                url:url,
                headers: {'Content-Type': contentTypeUse},
                data:paramsUse
            })
            .then((res) => {
                resolve(res.data)
            })
        })
    }
}

export default http
